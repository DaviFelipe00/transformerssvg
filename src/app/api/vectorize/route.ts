import { NextRequest, NextResponse } from "next/server";
import ImageTracer from "imagetracerjs";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Nenhuma imagem enviada." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Processar imagem com sharp
    const { data, info } = await sharp(buffer)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Criar objeto ImageData compatível
    const imageData = {
      data: new Uint8ClampedArray(data),
      width: info.width,
      height: info.height
    };

    // Vetorizar
    const svg = ImageTracer.imagedataToSVG(imageData, {
      ltres: 1,          // Threshold de linha
      qtres: 1,          // Threshold de quadrante
      pathomit: 8,       // Omitir paths pequenos
      scale: 1,          // Escala
      strokewidth: 1,    // Espessura do traço
      blurradius: 0,     // Blur
      blurdelta: 20      // Delta do blur
    });

    return new NextResponse(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
      },
    });
  } catch (error: any) {
    console.error("Erro:", error);
    return NextResponse.json(
      { error: error.message || "Erro ao vetorizar" },
      { status: 500 }
    );
  }
}
"use client";

import { useState } from "react";
import Header from "./components/Header";
import UploadBox from "./components/UploadBox";
import ImagePreview from "./components/ImagePreview";
import ConvertButtons from "./components/ConvertButtons";
import SvgResult from "./components/SvgResult";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [svg, setSvg] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!image) return;

    setLoading(true);
    setError("");

    try {
      const form = new FormData();
      form.append("image", image);

      const res = await fetch("/api/vectorize", {
        method: "POST",
        body: form,
      });

      if (!res.ok) throw new Error("Falha");

      const svgText = await res.text();
      setSvg(svgText);
    } catch {
      setError("Erro ao converter a imagem.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    if (preview) URL.revokeObjectURL(preview);
    setImage(null);
    setPreview("");
    setSvg("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-6xl grid lg:grid-cols-2 gap-8">
        
        {/* LADO ESQUERDO */}
        <div className="space-y-6">
          {!preview ? (
            <UploadBox
              onSelect={(file, url) => {
                setImage(file);
                setPreview(url);
                setSvg("");
                setError("");
              }}
            />
          ) : (
            <>
              <ImagePreview image={image} preview={preview} />
              <ConvertButtons
                loading={loading}
                onConvert={handleConvert}
                onReset={handleReset}
              />
              {error && <p className="text-red-500">{error}</p>}
            </>
          )}
        </div>

        {/* LADO DIREITO */}
        <SvgResult svg={svg} loading={loading} image={image} />
      </div>
    </div>
  );
}

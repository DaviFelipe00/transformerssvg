import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-border/40 bg-background backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col items-center text-center gap-4">

          {/* AGRUPOU EM COLUNA */}
          <div className="flex flex-col items-center gap-3">

            {/* Logo */}
            <div className="relative h-24 w-50 overflow-hidden">
              <Image
                src="/logo_transformers.svg"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Título */}
            <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              TransformerSVG
            </h1>
          </div>

          {/* Subtítulo */}
          <p className="text-sm text-muted-foreground md:text-base max-w-xl text-balance">
            Faça o upload da imagem que deseja transformar em SVG e faça o download.
          </p>

        </div>
      </div>
    </header>
  );
}

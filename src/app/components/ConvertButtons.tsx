interface Props {
  loading: boolean;
  onConvert: () => void;
  onReset: () => void;
}

export default function ConvertButtons({ loading, onConvert, onReset }: Props) {
  return (
    <div className="flex gap-3">

      {/* Botão principal — cinza escuro elegante */}
      <button
        onClick={onConvert}
        disabled={loading}
        className="
          flex-1 
          bg-neutral-800 
          hover:bg-neutral-700
          disabled:bg-neutral-600
          text-white
          font-semibold 
          py-3 px-6 
          rounded-lg 
          shadow-sm 
          transition-all
        "
      >
        {loading ? "Convertendo..." : "Converter para SVG"}
      </button>

      {/* Botão secundário — minimalista e discreto */}
      <button
        onClick={onReset}
        className="
          px-5 py-3
          rounded-lg
          font-medium
          bg-neutral-200 
          text-neutral-800
          hover:bg-neutral-300
          shadow-sm
          transition-all
        "
      >
        Limpar
      </button>

    </div>
  );
}

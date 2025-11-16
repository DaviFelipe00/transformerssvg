interface Props {
  onSelect: (file: File, url: string) => void;
}

export default function UploadBox({ onSelect }: Props) {

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    onSelect(file, url);
  };

  return (
    <label className="block cursor-pointer">
      <div className="border-2 border-dashed border-border bg-card rounded-xl p-12 text-center hover:border-primary/50">
        <p className="text-lg font-semibold">Clique para fazer upload</p>
        <p className="text-sm text-muted-foreground mt-1">
          PNG, JPG, JPEG – Máx 10MB
        </p>
      </div>

      <input
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={handleSelect}
      />
    </label>
  );
}

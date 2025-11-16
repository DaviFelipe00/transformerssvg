interface Props {
  image: File | null;
  preview: string;
}

export default function ImagePreview({ image, preview }: Props) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="aspect-square flex items-center justify-center bg-muted/30 p-8">
        <img src={preview} className="max-w-full max-h-full object-contain" />
      </div>

      <div className="p-4 border-t border-border">
        <p className="font-medium">{image?.name}</p>
        <p className="text-sm text-muted-foreground">
          {(image!.size / 1024).toFixed(1)} KB
        </p>
      </div>
    </div>
  );
}

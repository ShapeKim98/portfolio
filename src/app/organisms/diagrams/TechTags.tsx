export function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

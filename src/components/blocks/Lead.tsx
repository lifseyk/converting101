export function Lead({ text }: { text: string }) {
  return (
    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ink-700 md:text-xl">
      {text}
    </p>
  );
}

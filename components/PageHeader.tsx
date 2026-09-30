export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="border-b-4 border-haiti-gold bg-haiti-navy px-4 py-14 text-center sm:py-20">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-haiti-offwhite sm:text-xl">{subtitle}</p>
      )}
    </header>
  );
}

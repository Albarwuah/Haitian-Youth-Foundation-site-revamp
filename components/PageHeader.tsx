type PageHeaderProps = {
  title: string;
  subtitle?: string;
  bgImage?: string;
  bgColor?: string;
  className?: string;
  overlay?: boolean;
};

export default function PageHeader({
  title,
  subtitle,
  bgImage,
  bgColor,
  className = "",
  overlay = false,
}: PageHeaderProps) {
  return (
    <header
      className={`relative overflow-hidden border-b-4 border-haiti-gold bg-haiti-navy bg-cover bg-center bg-no-repeat px-4 py-14 text-center sm:py-20 ${className}`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundColor: bgColor,
      }}
    >
      {bgImage && overlay && (
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      )}

      <div className="relative z-10 leading-tight sm:leading-snug sm:tracking-tight sm:text-center">
        <h1 className="text-4xl font-bold text-white sm:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-haiti-offwhite sm:text-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
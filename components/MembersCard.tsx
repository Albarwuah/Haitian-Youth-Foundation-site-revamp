type MembersCardProps = { name: string; bio: string; image?: string; role: string };

const initials = (name: string) =>
  name
    .split(/[\s-]+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const MembersCard = ({ name, bio, role }: MembersCardProps) => {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl border-t-4 border-haiti-gold bg-white p-6 text-center text-haiti-charcoal shadow-md">
      <div
        aria-hidden="true"
        className="flex h-20 w-20 items-center justify-center rounded-full bg-haiti-navy font-heading text-2xl font-bold text-haiti-gold"
      >
        {initials(name)}
      </div>
      <h3 className="mt-4 text-xl font-bold text-haiti-navy">{name}</h3>
      <p className="mt-1 font-bold uppercase tracking-wide text-haiti-red">{role}</p>
      <p className="mt-4 leading-relaxed">{bio}</p>
    </article>
  );
};

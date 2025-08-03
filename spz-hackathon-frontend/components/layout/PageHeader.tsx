// components/layout/PageHeader.tsx
export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="text-md text-gray-600 mb-4">{subtitle}</p>
    </div>
  );
}

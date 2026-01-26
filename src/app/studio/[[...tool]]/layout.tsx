export const metadata = {
  title: 'DevLogic CMS',
  description: 'Content management for DevLogic website',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Flipzy – Modern Digital Banking",
  description: "Smart. Secure. Global. Banking redesigned for the future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-flipzyDark text-white">{children}</body>
    </html>
  );
}

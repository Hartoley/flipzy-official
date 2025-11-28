import "./globals.css";
import logo from "../public/logo.png";

export const metadata = {
  logo: { logo },
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

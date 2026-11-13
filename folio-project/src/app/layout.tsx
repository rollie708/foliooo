import "./globals.css";

export const metadata = {
  title: "Folio - All-in-one Crypto Trading Terminal",
  description:
    "Folio - Discover. Analyze. Trade. An all-in-one trading and intelligence terminal for Robinhood Chain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[050B08] text-white font-inter antialiased">
        {children}
      </body>
    </html>
  );
}
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenICS-Atlas",
  description: "Map, simulate, and harden ICS exposure — Shodan-aware, vendor-neutral, open source."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200">
          <div className="container py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold">OpenICS-Atlas</h1>
            <nav className="flex gap-4 text-sm">
              <a href="/">Map</a>
              <a href="/blueprints">Blueprints</a>
              <a href="/protocol/modbus">Protocols</a>
              <a href="https://github.com/SiteQ8" target="_blank" rel="noreferrer">GitHub</a>
            </nav>
          </div>
        </header>
        <main className="container py-6">{children}</main>
        <footer className="border-t border-gray-200">
          <div className="container py-6 text-sm text-gray-600">
            © 2025 Ali AlEnezi · <a href="https://www.linkedin.com/in/alenizi/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

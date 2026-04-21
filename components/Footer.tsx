import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "Instructors", href: "/instructors" },
    { label: "About", href: "/about" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  Community: [
    { label: "NSoC '26", href: "https://www.nsoc.in/projects", external: true },
    {
      label: "Contribute on GitHub",
      href: "https://github.com/Mehren7/Parampara",
      external: true,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌏</span>
              <span className="text-white font-bold text-lg tracking-tight">
                Parampara
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Connecting the global Indian diaspora with their cultural roots
              while empowering women in India with sustainable income.
            </p>
          </div>

          {/* Nav Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-orange-400 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © 2026 Parampara. All rights reserved. Licensed under{" "}
            <a
              href="https://www.apache.org/licenses/LICENSE-2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Apache 2.0
            </a>
            .
          </p>
          <p className="text-xs text-gray-500 italic">
            "Enabling culture to thrive across borders."
          </p>
        </div>
      </div>
    </footer>
  );
}

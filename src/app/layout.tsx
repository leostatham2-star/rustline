import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cormorant = localFont({
  src: [
    {
      path: "../../public/fonts/cormorant-var.woff2",
      weight: "500 700",
      style: "normal",
    },
    {
      path: "../../public/fonts/cormorant-italic-var.woff2",
      weight: "500 700",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = localFont({
  src: "../../public/fonts/jost-var.woff2",
  weight: "400 700",
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rustline | Weathering Steel Landscape Edging",
  description:
    "Solid weathering steel edging you hammer in once. It weathers to a warm patina, holds a clean line for decades, and never needs paint. Free shipping on every order.",
  keywords: [
    "steel landscape edging",
    "weathering steel edging",
    "garden edging",
    "metal edging",
    "tree rings",
    "raised beds",
  ],
  authors: [{ name: "Rustline Steel Co." }],
  openGraph: {
    title: "Rustline | Weathering Steel Landscape Edging",
    description:
      "Hammer it in once. It holds the line for decades. Steel edging, tree rings, and raised beds shipped free from Tennessee.",
    siteName: "Rustline",
    type: "website",
  },
};

// The sandbox preview tooling and some browser extensions stamp extra
// attributes (bis_size, __processed_*__ and friends) onto the rendered DOM
// before React hydrates, which trips a hydration mismatch warning. This tiny
// script runs before hydration: it sweeps those attributes off every element
// and keeps stripping them as they reappear, so hydration always sees a
// clean tree. It touches nothing else.
const CLEAN_INJECTED_ATTRIBUTES = `(function () {
  try {
    var re = /^(?:bis_|__processed_)/;
    function clean(el) {
      var names = [];
      for (var j = 0; j < el.attributes.length; j++) {
        names.push(el.attributes[j].name);
      }
      for (var k = 0; k < names.length; k++) {
        if (re.test(names[k])) el.removeAttribute(names[k]);
      }
    }
    var els = document.getElementsByTagName("*");
    for (var i = 0; i < els.length; i++) clean(els[i]);
    if (typeof MutationObserver === "function") {
      new MutationObserver(function (records) {
        for (var i = 0; i < records.length; i++) {
          var name = records[i].attributeName;
          if (name && re.test(name)) {
            var t = records[i].target;
            if (t && t.getAttribute && t.getAttribute(name) !== null) {
              t.removeAttribute(name);
            }
          }
        }
      }).observe(document.documentElement, { subtree: true, attributes: true });
    }
  } catch (err) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cormorant.variable} ${jost.variable} antialiased bg-background text-foreground`}
      >
        <script
          id="clean-injected-attributes"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: CLEAN_INJECTED_ATTRIBUTES }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

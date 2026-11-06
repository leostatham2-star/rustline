"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CartProvider } from "@/components/site/cart";
import { RouterProvider, useRouter } from "@/components/site/router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";
import { Home } from "@/components/site/pages/Home";
import { Shop } from "@/components/site/pages/Shop";
import { Install } from "@/components/site/pages/Install";
import { About } from "@/components/site/pages/About";
import { Contact } from "@/components/site/pages/Contact";
import { Faq } from "@/components/site/pages/Faq";
import { Legal } from "@/components/site/pages/Legal";

function Shell() {
  const { route } = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-bone">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={`${route.view}-${route.category ?? ""}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="flex-1"
        >
          {route.view === "home" ? <Home /> : null}
          {route.view === "shop" ? <Shop category={route.category} /> : null}
          {route.view === "install" ? <Install /> : null}
          {route.view === "about" ? <About /> : null}
          {route.view === "contact" ? <Contact /> : null}
          {route.view === "faq" ? <Faq /> : null}
          {route.view === "privacy" ? <Legal kind="privacy" /> : null}
          {route.view === "terms" ? <Legal kind="terms" /> : null}
        </motion.div>
      </AnimatePresence>
      <Footer />
      <CartDrawer />
    </div>
  );
}

export default function Page() {
  return (
    <RouterProvider>
      <CartProvider>
        <Shell />
      </CartProvider>
    </RouterProvider>
  );
}

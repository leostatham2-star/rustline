"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type View =
  | "home"
  | "shop"
  | "install"
  | "about"
  | "contact"
  | "faq"
  | "privacy"
  | "terms";

export type Route = { view: View; category?: string };

const VIEWS: View[] = [
  "home",
  "shop",
  "install",
  "about",
  "contact",
  "faq",
  "privacy",
  "terms",
];

const HOME_ROUTE: Route = { view: "home" };

function parseHash(hash: string): Route {
  const raw = hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean);
  const first = parts[0] as View;
  if (!VIEWS.includes(first)) return { view: "home" };
  return { view: first, category: parts[1] };
}

// Cache so the snapshot is referentially stable between renders.
let lastHash: string | null = null;
let lastRoute: Route = HOME_ROUTE;

function subscribe(onChange: () => void) {
  const onHash = () => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    onChange();
  };
  window.addEventListener("hashchange", onHash);
  return () => window.removeEventListener("hashchange", onHash);
}

function getSnapshot(): Route {
  const hash = window.location.hash;
  if (hash !== lastHash) {
    lastHash = hash;
    lastRoute = parseHash(hash);
  }
  return lastRoute;
}

function getServerSnapshot(): Route {
  return HOME_ROUTE;
}

type RouterValue = {
  route: Route;
  navigate: (view: View, category?: string) => void;
};

const RouterContext = createContext<RouterValue>({
  route: HOME_ROUTE,
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const route = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const navigate = useCallback((view: View, category?: string) => {
    const next = category ? `#/${view}/${category}` : `#/${view}`;
    if (window.location.hash === next) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    window.location.hash = next;
  }, []);

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

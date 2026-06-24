import { useEffect } from "react";
import { ComponentBoardsPage } from "./pages/ComponentBoardsPage";
import { DesignSystemPage } from "./pages/DesignSystemPage";
import { WebsitePage } from "./pages/WebsitePage";

export default function App() {
  const isDesignSystemRoute =
    window.location.pathname === "/design-system" || window.location.hash === "#design-system";
  const isComponentBoardRoute =
    window.location.pathname === "/components" || window.location.hash === "#components";

  useEffect(() => {
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (isDesignSystemRoute) {
      document.title = "Kim's Blinds Design System";
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = "noindex, nofollow";
    } else if (isComponentBoardRoute) {
      document.title = "Kim's Blinds Components";
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.name = "robots";
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.content = "noindex, nofollow";
    } else if (robotsMeta?.content === "noindex, nofollow") {
      robotsMeta.remove();
    }
  }, [isComponentBoardRoute, isDesignSystemRoute]);

  if (isDesignSystemRoute) {
    return <DesignSystemPage />;
  }

  if (isComponentBoardRoute) {
    return <ComponentBoardsPage />;
  }

  return <WebsitePage />;
}

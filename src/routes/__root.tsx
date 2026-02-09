import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";

import app from "@/lib/config/app.config";
import appCss from "@/lib/styles/globals.css?url";

import type { PropsWithChildren } from "react";

/**
 * Root route
 */
export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: `${app.name} - ${app.tagline}`,
      },
      {
        name: "description",
        content: app.description,
      },
      {
        property: "og:title",
        content: `${app.name} - ${app.tagline}`,
      },
      {
        property: "og:description",
        content: app.description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: app.url,
      },
      {
        property: "og:image",
        content: `${app.url}/og.png`,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: `${app.name} - ${app.tagline}`,
      },
      {
        name: "twitter:description",
        content: app.description,
      },
      {
        name: "twitter:image",
        content: `${app.url}/og.png`,
      },
      {
        name: "twitter:creator",
        content: "@omnidotdev",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧬</text></svg>",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

/**
 * Root document
 */
function RootDocument({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default RootDocument;

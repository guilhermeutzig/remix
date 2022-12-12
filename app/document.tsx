import { Links, LiveReload } from "@remix-run/react";

type Props = {
  children: JSX.Element;
  title?: string;
};

function Document({ children, title }: Props) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Links is a component for meta tags. */}
        {/* 
          It needs to be imported here and each route 
          can have it's own `links` variable to replace 
          default meta. Example in routes/index.tsx 
        */}
        <Links />
        <title>{title || "Remix | guilhermeutzig"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default Document;

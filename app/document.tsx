import { Links, LiveReload, Meta } from "@remix-run/react";

type Props = {
  children: JSX.Element;
  title?: string;
};

function Document({ children, title }: Props) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Links is a component for link tags. */}
        {/* 
          It needs to be imported here and each route 
          can have it's own `links` variable to replace 
          in the <head>. Example in routes/index.tsx.
        */}
        <Links />
        {/* 
          Meta is a component for meta tags. 
          Same functionality as Links.
         */}
        <Meta />
        <title>{title || "Remix | guilhermeutzig"}</title>
      </head>
      <body>
        {children}
        {/* As the name says, LiveReload allows live reload for development */}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default Document;

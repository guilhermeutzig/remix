import { LiveReload } from "@remix-run/react";

type Props = {
  children: JSX.Element;
  title?: string;
};

function Document({ children, title }: Props) {
  return (
    <html lang="pt-BR">
      <head>
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

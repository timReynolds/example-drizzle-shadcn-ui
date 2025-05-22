import styles from "./styles.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <link rel="stylesheet" href={styles} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>@redwoodjs/starter-drizzle</title>
      <link rel="modulepreload" href="/src/client.tsx" />
      <link href="/src/app/styles.css" rel="stylesheet"></link>
    </head>
    <body>
      <div id="root">{children}</div>
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);

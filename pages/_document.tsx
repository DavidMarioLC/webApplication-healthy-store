import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Patua+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal-root"></div>
        <div id="modal-cart"></div>
      </body>
    </Html>
  );
}

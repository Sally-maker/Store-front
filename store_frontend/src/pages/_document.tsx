import Document, {Html,Head,NextScript,Main} from 'next/document'
class Mydocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export  default Mydocument
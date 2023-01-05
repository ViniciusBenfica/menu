import { Html, Head, Main, NextScript } from 'next/document'
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';

setConfiguration({
  containerWidths: [540, 740, 960, 1140, 1250, 1540],
  breakpoints: [576, 768, 992, 1200, 1280, 1600],
});

export default function Document() {
  return (
    <Html lang="en">
      <ScreenClassProvider>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </ScreenClassProvider>
    </Html>
  )
}

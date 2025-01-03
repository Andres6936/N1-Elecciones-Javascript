import Document, {type DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import {render} from '@master/css/render';
import {StyleSheet} from '@master/css';


export default function MyDocument() {
    return (
        <Html>
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const { css } = render((await ctx.renderPage()).html, { StyleSheet })
    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: (
            <>
                <style id="master-css">{css}</style>
                {initialProps.styles}
            </>
        )
    }
}
                
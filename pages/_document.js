import Document, { Html, Main,NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


const NODE_ENV = process.env.NODE_ENV

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => props =>
					sheet.collectStyles(<App {...props} />),
			})

		// const styles = extractCritical(page.html);

		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			// @ts-ignore
			styles: [...initialProps.styles, ...sheet.getStyleElement()],
		}
	}

	constructor(props, ctx) {
		// for emotion-js
		super(props);
		const { __NEXT_DATA__, ids } = props;
		// const teste = new NextScript(props, ctx)
		if (ids) {
			__NEXT_DATA__.ids = ids;
		}



	}

	render() {
		//const GTM_TRACKING_ID = `GTM-KHTJDTG`
		//const GA_TRACKING_ID = `UA-100404714-3` //BETA
		//const GA_TRACKING_ID = `UA-100404714-1`
		//console.log('this.props ------------>', this.props)
		const { inAmpMode,  __NEXT_DATA__} = this.props
		var mobile = !!__NEXT_DATA__.props.pageProps.isMobile ? 'true' : null;
		console.log('NODE_ENV',NODE_ENV)
		console.log('isMobile Document ------------>', mobile)
		console.log('inAmpMode Document ------------>',inAmpMode)
		var testmobile = mobile
		var headProps = !inAmpMode  ? {testmobile} : '';
		console.log('headProps',headProps)
		console.log('(!!inAmpMode || !mobile)',!!inAmpMode , !mobile)
		return (
			<Html lang="pt-br">
				<Head {...headProps}>
				</Head>
				<body className={!inAmpMode ? 'notAmp' : ''}>
					<Main />
                    <NextScript/> 
					
				</body>
			</Html>
		)
	}
}

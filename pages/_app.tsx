// このファイルでは、globalの設定を行なっている。

import { AppProps } from 'next/app'
import Head from 'next/head'
import '@/styles/global.css' // 共通のcssのimport

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>プロフィールジェネレーター</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default App

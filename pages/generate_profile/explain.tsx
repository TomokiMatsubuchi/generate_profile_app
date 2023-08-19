import { NextPage } from 'next'
import Link from 'next/link'

const FormPage: NextPage = () => {
	return (
		<div>
			<h2>プロフィール作成フォーム</h2>
			<p>
				このページでは、あなたの理想のプロフィールをAIの力を使用して作成します。
			</p>
			<Link href="/">Topに戻る</Link>
		</div>
	)
}

export default FormPage

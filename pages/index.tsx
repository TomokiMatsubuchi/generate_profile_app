import { NextPage } from 'next'
import Link from 'next/link' // Next.js内でページのリンクを作成するときはLinkコンポーネントを使用する。
import Layout from '@/components/layout/default'

const IndexPage: NextPage = () => {
	return (
		<Layout>
			<h2>トップページ</h2>
			<p>ここから実装が始まる。</p>
			<Link href="/generate_profile/explain">プロフィール作成画面へ</Link>
		</Layout>
	)
}

export default IndexPage

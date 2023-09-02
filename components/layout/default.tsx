import { ReactElement } from 'react'
import styles from '@/styles/components/layout/default.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type LayoutProps = Required<{
	readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
	// Explain: Headerにリンクを追加する際にはこの連想配列に追加する。
	const headerLinks = [
		{
			pageName: 'TOP',
			href: '/',
		},
		{
			pageName: 'プロフィール作成',
			href: '/generate_profile/explain',
		},
	]

	// Explain: HeaderのLinkをまとめて表示できるようにする。
	const headerLinkList = headerLinks.map((link, index) => {
		return (
			<li key={index} className={styles.header_content}>
				<Link href={link.href} className={styles.header_link}>
					{link.pageName}
				</Link>
			</li>
		)
	})

	return (
		<div>
			<header className={styles.header_container}>
				<h2>ProfileGenerater</h2>
				<ul className={styles.header_list}>{headerLinkList}</ul>
			</header>
			<main className={styles.container}>{children}</main>
		</div>
	)
}

export default Layout

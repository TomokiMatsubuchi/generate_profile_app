import { ReactElement } from 'react'
import styles from '@/styles/components/layout/default.module.css'
import Image from 'next/image'

type LayoutProps = Required<{
	readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<header>
				<Image src="/images/nature.png" width={576} height={320} alt="" />
			</header>
			<main className={styles.container}>{children}</main>
		</div>
	)
}

export default Layout

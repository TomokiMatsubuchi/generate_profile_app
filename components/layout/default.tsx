import { ReactElement } from 'react'
import styles from '@/styles/components/layout/default.module.css'

type LayoutProps = Required<{
	readonly children: ReactElement
}>

const Layout = ({ children }: LayoutProps) => {
	return <div className={styles.container}>{children}</div>
}

export default Layout

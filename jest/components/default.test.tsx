// @ts-nocheck

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event' // ユーザーにクリックさせるため必要
// next-page-testerからgetPageとinitTestHelpersをインポート
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester' // 初期設定を行うもの

// next-page-testerを使用するために実行しておく
initTestHelpers()

describe('Layoutのheaderのテスト', () => {
	it('TOPを押した時にTOPに遷移する', async () => {
		const { page } = await getPage({
			route: '/',
		})
		render(page)

		userEvent.click(screen.getByTestId('nav-top'))
		expect(await screen.findByText('トップページ'))
	})

	it('プロフィール作成を押した時にプロフィール作成フォームに遷移する', async () => {
		const { page } = await getPage({
			route: '/generate_profile/explain',
		})
		render(page)

		userEvent.click(screen.getByTestId('nav-profile'))
		expect(await screen.findByText('プロフィール作成フォーム'))
	})
})

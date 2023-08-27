import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '@/components/layout/default'
import { useForm, SubmitHandler } from 'react-hook-form'
import { type } from 'os'

type FormValues = {
	name: string
	age: number
	favoriteThings: string
	purpose: string
	whereILive: string
}

type GptMessage = {
	role: 'user' | 'system' | 'assistant'
	content: string
}

const FormPage: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<FormValues>({ mode: 'onChange' })

	const onSubmit = async (data: FormValues) => {
		const message = createMessage(data)
		await chatCompletion(message)
	}

	const createMessage = (data: FormValues) => {
		const userName = data.name
		const userAge = data.age
		const userFavoriteThings = data.favoriteThings
		const userPurpose = data.purpose
		const userLived = data.whereILive
		const content = `
			あなたは恋愛マスターです。
			次のプロフィール情報を持つ人間のマッチングアプリ用の自己紹介メッセージを作成してください。
			名前: ${userName}
			年齢: ${userAge}
			趣味: ${userFavoriteThings}
			マッチングアプリの使用目的: ${userPurpose}
			居住地: ${userLived}
			`
		const message: GptMessage[] = [
			{
				role: 'user',
				content: content,
			},
		]
		return message
	}

	const chatCompletion = async (
		message: GptMessage[]
	): Promise<GptMessage[] | undefined> => {
		const body = JSON.stringify({
			message,
			model: 'gpt-3.5-turbo',
		})

		const res = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
			},
			body,
		})

		const resdata = res.json()
		return resdata.choices[0].message
	}

	return (
		<Layout>
			<h2>プロフィール作成フォーム</h2>
			<p>
				このページでは、あなたの理想のプロフィールをAIの力を使用して作成します。
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="name">名前</label>
				<input
					id="name"
					{...register('name', { required: '名前を入力してください。' })}
					aria-describedby="error-name-required"
				/>
				{errors?.name && (
					<span id="error-name-required" aria-live="assertive">
						{errors.name.message}
					</span>
				)}
				<label htmlFor="age">年齢</label>
				<input
					id="age"
					{...register('age', {
						required: '年齢を入力してください。',
						pattern: {
							value: /^[0-9]+$/,
							message: '年齢は半角数字で入力してください。',
						},
					})}
				/>
				{errors?.age && <span id="error-age">{errors.age.message}</span>}
				<label htmlFor="favoriteThings">趣味</label>
				<input
					id="favoriteThings"
					{...register('favoriteThings', {
						required: '趣味を入力してください。',
					})}
					aria-describedby="error-favoriteThings-required"
				/>
				{errors?.favoriteThings && (
					<span id="error-favoriteThings-required" aria-live="assertive">
						{errors.favoriteThings.message}
					</span>
				)}
				<label htmlFor="purpose">利用目的</label>
				<input
					id="purpose"
					{...register('purpose', { required: '利用目的を入力してください。' })}
					aria-describedby="error-purpose-required"
				/>
				{errors?.purpose && (
					<span id="error-purpose-required" aria-live="assertive">
						{errors.purpose.message}
					</span>
				)}
				<label htmlFor="whereILive">住んでいる場所</label>
				<input
					id="whereILive"
					{...register('whereILive', {
						required: '住んでいる場所を入力してください',
					})}
					aria-describedby="error-whereILive-required"
				/>
				{errors?.whereILive && (
					<span id="error-whereILive-required" aria-live="assertive">
						{errors.whereILive.message}
					</span>
				)}
				<button type="submit" disabled={!isDirty || !isValid}>
					プロフィールを作成する
				</button>
			</form>
			<Link href="/">Topに戻る</Link>
		</Layout>
	)
}

export default FormPage

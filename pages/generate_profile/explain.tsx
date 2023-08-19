import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '@/components/layout/default'
import { useForm } from 'react-hook-form'

type FormValues = {
	name: string
	age: number
	favoriteThings: string
	purpose: string
	whereILive: string
}

const FormPage: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ mode: 'onChange' })

	const onSubmit = handleSubmit(async (data) => {
		console.log(data)
	})

	return (
		<Layout>
			<h2>プロフィール作成フォーム</h2>
			<p>
				このページでは、あなたの理想のプロフィールをAIの力を使用して作成します。
			</p>
			<form onSubmit={onSubmit}>
				<label htmlFor="name">名前</label>
				<input
					id="name"
					{...register('name', { required: '名前の入力は必須です。' })}
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
					{...register('age', { required: '年齢の入力は必須です。' })}
					aria-describedby="error-age-required"
				/>
				{errors?.age && (
					<span id="error-age-required" aria-live="assertive">
						{errors.age.message}
					</span>
				)}
				<button type="submit">プロフィールを作成する</button>
			</form>
			<Link href="/">Topに戻る</Link>
		</Layout>
	)
}

export default FormPage

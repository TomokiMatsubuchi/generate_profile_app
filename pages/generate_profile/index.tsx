import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '@/components/layout/default'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
	name: string
	age: number
	favoriteThings: string
	purpose: string
	whereILive: string
}

const ProfileFormPage: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<FormValues>({ mode: 'onChange' })

	const onSubmit = async (data: FormValues) => {
		console.log(data)
	}

	return (
		<Layout>
			<>
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
						{...register('purpose', {
							required: '利用目的を入力してください。',
						})}
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
					<button type="submit" disabled={!isDirty}>
						プロフィールを作成する
					</button>
				</form>
				<Link href="/">Topに戻る</Link>
			</>
		</Layout>
	)
}

export default ProfileFormPage

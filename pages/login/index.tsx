import Layout from '@/components/layout/default'
import { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { sendHttpRequest } from '@/services/api/axios'

type loginFormValues = {
	email: string
	password: string
}

const LoginForm: NextPage = () => {
	const {
		register,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<loginFormValues>({ mode: 'onChange' })

	const onSubmit = async (data: loginFormValues): Promise<void> => {
		const endpoint = `/auth/sign_in`
		const httpMethod = 'POST'
		const response = await sendHttpRequest<loginFormValues>(
			endpoint,
			httpMethod,
			data
		)
		console.log(response)
	}

	return (
		<Layout>
			<>
				<h2>Login</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label htmlFor="email">メールアドレス</label>
					<input
						id="email"
						type="email"
						{...register('email', {
							required: 'メールアドレスを入力してください。',
							pattern: {
								value: /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
								message: 'メールアドレスを正しい形式で入力してください。',
							},
						})}
						aria-describedby="error-email-required"
					/>
					{errors?.email && (
						<span id="error-email-required" aria-live="assertive">
							{errors.email.message}
						</span>
					)}
					<label htmlFor="password">パスワード</label>
					<input
						id="password"
						type="password"
						{...register('password', {
							required: 'パスワードを入力してください。',
							pattern: {
								value: /^\w+$/,
								message: 'パスワードは半角英数字で入力してください。',
							},
						})}
					/>
					{errors?.password && (
						<span id="error-password">{errors.password.message}</span>
					)}
					<button type="submit" disabled={!isDirty}>
						ログイン
					</button>
				</form>
			</>
		</Layout>
	)
}

export default LoginForm

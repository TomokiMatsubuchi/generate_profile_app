import axios from 'axios'

const prefixUrl = process.env.NEXT_PUBLIC_API_URL

export const sendHttpRequest = async <T>(
	endpoint: string,
	httpMethod: string,
	requestBody: T
): Promise<void> => {
	const url = prefixUrl + endpoint
	if (httpMethod === 'GET') {
		const response = await axios.get(url)
		return response
	} else if (httpMethod === 'POST') {
		const response = await axios.post(url, requestBody)
		return response
	} else {
		throw new Error(`Method ${httpMethod} not supported`)
	}
}

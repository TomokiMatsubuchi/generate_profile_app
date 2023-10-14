import axios from 'axios'

const prefixUrl = process.env.API_URL

export const sendHttpRequest = async (
	httpmethod: string,
	endpoint: string,
	requestBody: object
): Promise<unknown> => {
	const url = prefixUrl + endpoint
	if (httpmethod === 'GET') {
		const response = await axios.get(url)
		return response
	} else if (httpmethod === 'POST') {
		const response = await axios.post(url, requestBody)
		return response
	} else {
		throw new Error(`Method ${httpmethod} not supported`)
	}
}

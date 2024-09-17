import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || `http://localhost:3031`


export const doRegister = async (name: string, gender: string) => {
	try {
		const response = await axios.post(`${API_URL}/api/v1/register`, {
			type: 'patient',
			name,
			email: `${name}@mail`,
			password: '123',
			phone: `19234`,
			gender,

		})
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error('Erro ao fazer cadastro')
	}
}

export const doLogin = async (email: string, password: string) => {
	try {
		const response = await axios.post(
			`${API_URL}/api/v1/login`,
			{
				email,
				password,
			},
			{
				validateStatus: (status) => status < 500,
			}
		)

		return {
			status: response.status,
			data: response.data,
		}
	} catch (error: any) {
		console.error('Erro ao fazer login', error);
		return {
			status: 500,
			data: 'Erro ao fazer login',
		}
	}
}

export const sendResetEmail = async (email: string) => {
	try {
		const response = await axios.post(
			`${API_URL}/api/v1/user/find/email`,
			{
				email
			},
			{
				validateStatus: (status) => status < 500,
			}
		)

		return {
			status: response.status,
			data: response.data
		}
	} catch(error: any) {
		console.error('Erro ao tentar encontrar o email', error);
		return {
			status: 500,
			data: 'Erro ao tentar encontrar o email',
		}
	}
}
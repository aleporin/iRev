import Client from './api'

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('api/user/login', data)
    console.log(res)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const SignUpUser = async (data) => {
  try {
    const res = await Client.post('api/user/sign_up', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePassword = async (data) => {
  try {
    const res = await Client.put('api/user/profile', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async (data) => {
  try {
    const res = await Client.get('api/user/session', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

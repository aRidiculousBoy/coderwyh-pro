const TOKEN_KEY = 'token'

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}


import Cookie from 'js.cookie';

export const extractToken = (headers) => {
  let token = {
    "access-token": '',
    "client": '',
    "uid": '',
    "isAuthenticated": false,
    "role": '',
    "username": '',
  }
  if (headers.get('client')) {
    token['access-token'] = headers.get('access-token')
    token.client = headers.get('client')
    token.uid = headers.get('uid')
    token.role = headers.get('role')
    token.username = headers.get('name')
    token.isAuthenticated = true
  }
  return token
}

export const storeData = async (key, value) => {
  let ENV = process.env.REACT_APP_ENVIRONMENT
  let domain = (ENV === 'development' ? '.songsnepal.localhost' : '.songsnepal.com')
  try {
    Cookie.set(key, value, { expires: 7, path: "/", domain: domain })
  } catch (error) {
    console.log(error)
  }
}

export const updateSession = session => {
  Object.keys(session).forEach(sessionKey => {
    storeData(sessionKey, session[sessionKey])
  })
}

export const resetSession = () => {
  const session = {
    "access-token": '',
    "client": '',
    "uid": '',
    "isAuthenticated": false,
    "role": '',
    "username": '',
  }
  updateSession(session)
}

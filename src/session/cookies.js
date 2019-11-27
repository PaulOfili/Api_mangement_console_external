import cookie from 'react-cookie';

let userTimeout;

export const getSession = (key) => {
    let sessionData = cookie.load('qt_s');
  
    if (sessionData) {
        let data = sessionData;
        return key ? data[key] : data;
    } else {
        return {};
    }
  
}

export const removeSession = () => {
    userTimeout && clearTimeout(userTimeout);
    cookie.remove('qt_s');
  }

export const saveSession = (userData, token) => {
    var tokenExpiry = new Date((userData.exp - 10) * 1000);
    let cookieOptions = {
        expires: tokenExpiry,
        secure: process.env.SECURE_COOKIES ? true : false,
        path: '/'
    };
  
    userData.expiryDate = tokenExpiry;
    userData.access_token = token
  
  
    let ciphertext = JSON.stringify(userData);
  
    cookie.save('qt_s', ciphertext, cookieOptions);
  }

  export const timeOutUser = (expiry) => {
    userTimeout && clearTimeout(userTimeout);
    userTimeout = setTimeout(() => {
        removeSession();
        window.location.href = '/'
    }, expiry);
  };
  
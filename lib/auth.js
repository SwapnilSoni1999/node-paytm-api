const { default: axios } = require('axios')

const commonHeaders = {
    'content-type': 'application/json',
    'host': 'accounts.paytm.com',
    'authorization': 'Basic bWFya2V0LWFwcDo5YTA3MTc2Mi1hNDk5LTRiZDktOTE0YS00MzYxZTdjM2Y0YmM='
}

const getStateToken = async (number) => {
    const res = await axios({
        method: 'POST',
        url: 'https://accounts.paytm.com/simple/login/init',
        data: {
            loginId: number,
            flow: 'login'
        },
        headers: commonHeaders
    })
    console.log('statetoken', res.data)
    return res.data.stateToken

}

const validatePassword = async (stateToken, password) => {
    const res = await axios({
        method: 'POST',
        url: "https://accounts.paytm.com/simple/login/validate/password",
        headers: commonHeaders,
        data: {
            password,
            stateToken
        }
    })
    console.log('Validating password')
    console.log(res.data)
    return res.data.stateToken
}

const login = async (number, password) => {
    return await validatePassword(await getStateToken(number), password)
}
const verifyOtp = async (otp, stateToken) => {
    const res = await axios({
        method: 'POST',
        url: 'https://accounts.paytm.com/simple/login/validate/otp',
        headers: commonHeaders,
        data: {
            otp,
            stateToken
        }
    })
    console.log("Otp verification", res.data)
    return res.data.oauthCode
}

const getAccessToken = async (oAuthToken) => {
    const res = await axios({
        method: 'POST',
        url: 'https://accounts.paytm.com/oauth2/token',
        data: `code=${oAuthToken}&scope=paytm&grant_type=authorization_code`,
        headers: commonHeaders
    })
    console.log("Access Token", res.data)
    return { accessToken: res.data.access_token, expiresAt: res.data.expires }
} 

module.exports = {
    login,
    verifyOtp,
    getAccessToken
}

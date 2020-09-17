const auth = require('./lib/auth')

class Paytm {
    constructor(number, password) {
        this.number = number
        this.password = password
    }

    async login() {
        this.stateToken = await auth.login(this.number, this.password)
        return this.stateToken
    }

    async verifyOtp(otp) {
        this.oauthToken = await auth.verifyOtp(otp, this.stateToken)
        this.access = await auth.getAccessToken(this.oauthToken)
    }
    
    async getAccessToken() {
        return this.access.accessToken
    }

    
}

module.exports = Paytm
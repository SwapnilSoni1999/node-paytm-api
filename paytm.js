const auth = require('./lib/auth')
const walletHistory = require('./lib/history')

class Paytm {
    constructor(payload) {
        console.log(payload)
        this.access = {
            accessToken: null,
            expiresAt: null
        }
        if (payload.accessToken) {
            this.access.accessToken = payload.accessToken
        } else {
            this.number = payload.number
            this.password = payload.password
        }
    }

    async login() {
        this.stateToken = await auth.login(this.number, this.password)
        return this.stateToken
    }

    async verifyOtp(otp) {
        this.oauthToken = await auth.verifyOtp(otp, this.stateToken)
        this.access = await auth.getAccessToken(this.oauthToken)
        return this.access.accessToken
    }
    
    async getAccessToken() {
        return this.access.accessToken
    }

    async getWalletHistory(offset=0, limit=20) {
        return await walletHistory(this.access.accessToken, offset, limit)
    }

}

module.exports = Paytm
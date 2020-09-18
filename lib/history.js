const { default: axios } = require('axios')

const getWalletHistory = async (accessToken, offset, limit) => {
    console.log(accessToken)
    const res = await axios({
        method: 'POST',
        url: 'https://trust.paytm.in/service/wrapper/userTransactionHistory',
        data: {
            "request": {
              "userGuid": "",
              "startLimit": offset,
              "lastLimit": limit,
              "subWalletParams": {
                "subWalletType": ["PAYTM WALLET"]
              },
              "walletTransactiontype": "ALL"
            }
        },
        headers: {
            ssotoken: accessToken,
            'content-type': 'application/json'
        }
    })
    console.log('Wallet history', res.data)
    return res.data
}

module.exports = getWalletHistory
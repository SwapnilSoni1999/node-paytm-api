const Paytm = require('./paytm')
const readline = require('readline')

// Add your number and Password
const paytm = new Paytm({ number: '+91987654321', password: 'MyPassword' })
paytm.login().then(() => {
    const ques = readline.createInterface({ input: process.stdin, output: process.stdout })
    ques.question('Enter OTP:', async (otp) => {
        await paytm.verifyOtp(otp)

        // only change from auth.js file
        const history = await paytm.getWalletHistory()
        console.log("Wallet history:", history)
        ques.close()
    })
})


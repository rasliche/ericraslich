const QRCode = require('qrcode')

// QR Code Options
const good = {
    urlString: '/api/feedback-positive',
    options: {
        errorCorrectionLevel: 'H',
        margin: 2,
        color: {
            light: '#000000ff',
            dark: '#33dd50ff'
        }
    }
}
const okay = {
    urlString: '/api/feedback-neutral',
    options: {
        errorCorrectionLevel: 'H',
        margin: 2,
        color: {
            light: '#000000ff',
            dark: '#f3f711ff'
        }
    }
}

const poor = {
    urlString: '/api/feedback-poor',
    options: {
        errorCorrectionLevel: 'H',
        margin: 2,
        color: {
            light: '#000000ff',
            dark: '#ff0000ff'
        }
    }
}

async function buildQRCodeDataURL({urlString, options}) {
    return QRCode.toDataURL(urlString, options)
}

module.exports = async function() {
    const positiveUrl = await buildQRCodeDataURL(good)
    const neutralUrl = await buildQRCodeDataURL(okay)
    const negativeUrl = await buildQRCodeDataURL(poor)

    return {
        test: 'test',
        positiveUrl,
        neutralUrl,
        negativeUrl,
    }
}

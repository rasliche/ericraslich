(function() {

    document.querySelector('#feedback-positive').addEventListener('click', async function(event) {
        event.preventDefault()
        fetch('/api/feedback-positive', {
            method: 'POST'
        })
        .then(response => {
            window.location.href = '/projects/qr-feedback-confirmation'
        })
    })
    document.querySelector('#feedback-neutral').addEventListener('click', async function(event) {
        event.preventDefault()
        fetch('/api/feedback-neutral', {
            method: 'POST'
        })
        .then(response => {
            window.location.href = '/projects/qr-feedback-confirmation'
        })
    })
    document.querySelector('#feedback-negative').addEventListener('click', async function(event) {
        event.preventDefault()
        fetch('/api/feedback-negative', {
            method: 'POST'
        })
        .then(response => {
            window.location.href = '/projects/qr-feedback-confirmation'
        })
    })
    // console.log('Install ServiceWorker for QR Code Feedback project.');

    // // ServiceWorker is a progressive technology. Ignore unsupported browswers.
    // if ('serviceWorker' in navigator) {
    //     console.log('QR FEEDBACK: ServiceWorker registration in progress.');
    //     navigator.serviceWorker.register('/projects/qr-sw.js', {
    //         scope: '/projects/'
    //     }).then(function() {
    //         console.log('QR FEEDBACK: ServiceWorker registration complete.');
    //     }, function() {
    //         console.log('QR FEEDBACK: ServiceWorker registration failed.');
    //     });
    // } else {
    //     console.log('QR FEEDBACK: ServiceWorker is not supported.');
    // }
})();
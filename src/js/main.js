(function() {
    console.log('Invoke the static site template JavaScript!');

    // ServiceWorker is a progressive technology. Ignore unsupported browswers.
    if ('serviceWorker' in navigator) {
        console.log('CLIENT: ServiceWorker registration in progress.');
        navigator.serviceWorker.register('/service-worker.js').then(function() {
            console.log('CLIENT: ServiceWorker registration complete.');
        }, function() {
            console.log('CLIENT: ServiceWorker registration failed.');
        });
    } else {
        console.log('CLIENT: ServiceWorker is not supported.');
    }
})();
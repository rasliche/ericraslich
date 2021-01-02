(function() {
    console.log('Invoke the static site template JavaScript!');

    // ServiceWorker is a progressive technology. Ignore unsupported browswers.
    if ('serviceWorker' in navigator) {
        console.log('CLIENT: ServiceWorker registration in progress.');
        navigator.serviceWorker.register('/sw.js').then(function() {
            console.log('CLIENT: ServiceWorker registration complete.');
        }, function() {
            console.log('CLIENT: ServiceWorker registration failed.');
        });
    } else {
        console.log('CLIENT: ServiceWorker is not supported.');
    }

    // Emoji Tooltips
    // const tt = new Tooltip(document.querySelector('#fishing'), {
    //     delay: 500,
    //     trigger: 'hover focus',
    //     title: '🐟'
    // })
    // const tt2 = new Tooltip(document.querySelector('#webdev'), {
    //     delay: 500,
    //     trigger: 'hover focus',
    //     title: '💻'
    // })

})();
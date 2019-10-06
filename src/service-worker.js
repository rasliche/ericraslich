// ServiceWorker is a progressive technology. Ignore unsupported browswers.
if ('serviceWorker' in navigator) {
    console.log('CLIENT: ServiceWorker registration in progress.');
} else {
    console.log('CLIENT: ServiceWorker is not supported.');
}
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {setDefaultHandler, setCatchHandler} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;

setDefaultHandler(new StaleWhileRevalidate());

setCatchHandler(({url, event, params}) => {
return new Response(`离线状态无法访问！`);
});
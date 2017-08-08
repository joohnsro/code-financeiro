import appConfig from './services/appConfig';

require('materialize-css');
window.Vue = require('vue');
require('vue-resource');
Vue.http.options.root = appConfig.api_url;

require('./services/interceptors');
require('./router');

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

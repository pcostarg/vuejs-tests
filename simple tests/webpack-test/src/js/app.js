import '../index.html';
import '../users.html';
import Users from './users.js';
import Vue from 'vue'; 

// const url = window.location.pathname;
// switch (url) {
//     case "/users.html":
        
//         break;
//     case "/":
        
//         break;
// }
(() => {
    console.log('cenas');
})();
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    computed: {
        lowercase: function () {
            return this.message.toLowerCase();
        }
    },
    components: {
        'users': Users
        // 'users': () => import('./users.js')
    }
});
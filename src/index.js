import Vue from 'vue'
import App from './App.vue'
import '../assets/reset.css'
import '../assets/app.css'

new Vue({
    el: '#app',
    render: h => h(App)
    // data: {
    //     name: 'Ted',
    //     newTweet: '',
    //     tweets: [
    //         'Started learning to code today. Wish me luck!',
    //         'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.',
    //         'Today I start learning Vue. I got this.'
    //     ],
    //     bio: 'Excited future front-end engineer.'
    // }
})

new Vue({
    el: '#app',
    data: {
       show: true
    },
    methods: {
        changeText () {
            this.title = 'Our text...';    
        }
    }
});
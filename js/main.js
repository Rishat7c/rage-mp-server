new Vue({
    el: '#app',
    data: {
       show: true,
       cars: [
           {model: "BMW", speed: 250.0},
           {model: "Audi", speed: 240.5},
           {model: "Ford", speed: 160.0},
           {model: "Mercedes", speed: 250.0}
       ],
       message: "Hey, Rishat7c" 
    },
    computed: {
        showMess() {
            return this.message.toUpperCase();
        }
    },
    methods: {
        changeText () {
            this.title = 'Our text...';    
        }
    }
});
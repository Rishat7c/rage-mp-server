Vue.filter ('capatilize', function(value) {
    if(!value) return ''
    value = value.toString()
    return value.replace(/\b\w/g, function(l) { return l.toUpperCase() })
});

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
       message: "hey, rishat7c" 
    },
    computed: {
        showMess() {
            return this.message.toUpperCase()
        }
    },
    filters: {
        lowercase(value) {
            return value.toLowerCase()
        }
    },
    methods: {
        changeText () {
            this.title = 'Our text...';    
        }
    }
});
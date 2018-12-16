new Vue({
    el: '#app',
    data: {
        value: 1
    },
    methods: {
        increment(value) {
            this.value = value
            if(this.value == 25) {
                alert(true)
            }
        }
    },
    computed: {
        doubleValue() {
            return this.value * 2
        }
    }
});
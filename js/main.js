Vue.component('app-car', {
    data: function() {
        return {
            cars: [
                {model: "BMW", speed: 250.0},
                {model: "Audi", speed: 240.5},
                {model: "Ford", speed: 160.0},
                {model: "Mercedes", speed: 250.0},
                {model: "KIA", speed: 200},
                {model: "VAZ", speed: 160}
            ]
        }
    },
    template: '<div><div class="car" v-for="car in cars"><p> {{ car.model }}, speed {{ car.speed }} </p></div></div>'
})

new Vue({
    el: '#app',
    components: {
        'app-car2': {
        data: function() {
            return {
                cars: [
                    {model: "Автомобили"},
                    {model: "Мотоциклы"},
                    {model: "Самолеты"},
                ]
            }
        },
        template: '<div><div class="car" v-for="car in cars"><p> {{ car.model }} </p></div></div>'
        }
    }
});

new Vue({
    el: '#app2'
});
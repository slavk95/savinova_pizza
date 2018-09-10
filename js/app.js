//main-slider
new Vue({
    el: "#app"
})
Vue.component("main-slider",{
    props: ["slides"],
    template: "template/main-slider"
})
new Vue({
    el: "#main-slider",
    data: {
        slides: ""
    },
    methods: {
        getDataForSlider: function () {
           this.slides = [
               {
                   title: "Слайд 1",
                   description: "Опис 1",
                   img: "images/slider/1.jpg"
               },
               {
                   title: "Слайд 2",
                   description: "Опис 2",
                   img: "images/slider/2.jpg"
               },
               {
                   title: "Слайд 3",
                   description: "Опис 3",
                   img: "images/slider/1.jpg"
               },
           ]
        }
    }
})

//menu
new Vue({
    el: "#menu-page",
    data:{
        menu: ""
    },
    methods:{
        getMenu: function () {
            this.menu = [
                {
                    name:"МІСО СУП",
                    price: 35,
                    description:"Традиційний японський суп",
                    category:"soup",
                    img: "images/menu/25.jpg",
                },
                {
                    name:"ГОСТРИЙ КРАБОВИЙ",
                    price: 78,
                    description:"Пікантний гострий суп зі сніжним крабом, обсмаженими овочами, рисовою локшиною, прикрашений водоростями «Норі»",
                    category:"soup",
                    img: "images/menu/26.jpg",
                },
                {
                    name:"СУІГЕДЗА З КРЕВЕТКОЮ",
                    price:78,
                    description:"Ситний суп з пельменями ручної ліпки, яйцем та водоростями «Вакаме»",
                    category:"soup",
                    img: "images/menu/27.jpg",
                },
                {
                    name:"ТАЙСЬКИЙ СУП З МОРЕПРОДУКТАМИ",
                    price:95,
                    description:"Гострий суп з морепродуктами, печерицями та імбирем",
                    category:"soup",
                    img: "images/menu/28.jpg",
                },
                {
                    name:"ТОМ ЯМ",
                    price:165,
                    description:"Національний тайський суп, на основі кокосового молока, в який входять тигрові креветки, кальмар, гостра паста «Том Ям» та свіжі овочі",
                    category:"soup",
                    img: "images/menu/29.jpg",
                },
                {
                    name:"ТОМАТНИЙ СУП З ЧИЛІЙСЬКИМИ МІДІЯМИ",
                    price:78,
                    description:"Оригінальний суп-пюре з томатів Пілаті, цибулі, селери, з додаванням сиру «Моцарела» та чилійських мідій",
                    category:"soup",
                    img: "images/menu/30.jpg",
                },
                {
                    name:"ФІНСЬКИЙ СУП З ЛОСОСЕМ",
                    price:115,
                    description:"Вершковий суп на основі рибного бульйону з ніжним філе лосося та відвареними овочами",
                    category:"soup",
                    img: "images/menu/31.jpg",
                },
                {
                    name:"ГРИБНИЙ КРЕМ-СУП",
                    price:75,
                    description:"Ніжний вершковий крем-суп з печериць з хрусткими сухариками",
                    category:"soup",
                    img: "images/menu/32.jpg",
                },
                {
                    name:"СУП УДОН",
                    price:78,
                    description:"Суп з куркою, локшиною Удон, водоростями «Вакаме» та яйцем",
                    category:"soup",
                    img: "images/menu/33.jpg",
                },
                {
                    name:"РАМЕН З МОРЕПРОДУКТАМИ",
                    price:150,
                    description:"Традиційний азіатський суп на основі м'ясного бульйону, з додаванням морського гребінця, креветки, лосося, локшини «Рамен», курячого яйця та болгарського перцю",
                    category:"soup",
                    img: "images/menu/34.jpg",
                },
                {
                    name:"СИРНИЙ МІСО СУП З ЛОСОСЕМ",
                    price:78,
                    description:"Традиційний японський суп з додаванням лосося, вершків та сиру Чедер",
                    category:"soup",
                    img: "images/menu/35.jpg",
                },
                {
                    name:"КІМЧІ СУП",
                    price:38,
                    description:"Гострий суп на основі місо бульйону, з яйцем та гострим соусом Ширачі",
                    category:"soup",
                    img: "images/menu/36.jpg",
                },
                {
                    name:"КАППА МАКІ",
                    price: 38,
                    description:"Огірок",
                    category:"rols",
                    img: "images/menu/37.jpg",
                },
                {
                    name:"КІОТО МАКІ",
                    price: 65,
                    description:"Мідії в «Спайсі» соусі",
                    category:"rols",
                    img: "images/menu/38.jpg",
                },
                {
                    name:"САКЕ МАКІ",
                    price: 75,
                    description:"Лосось",
                    category:"rols",
                    img: "images/menu/39.jpg",
                },
                {
                    name:"ТЕККА МАКІ",
                    price: 75,
                    description:"Тунець",
                    category:"rols",
                    img: "images/menu/40.jpg",
                },
                {
                    name:"ЯМІ-ЯМІ РОЛ",
                    price: 215,
                    description:"Копчений вугор, манго, полуниця, вершковий сир, соус «Унагі», кунжут",
                    category:"rols",
                    img: "images/menu/41.jpg",
                },
                {
                    name:"ФІЛАДЕЛЬФІЯ МАКСІ",
                    price: 165,
                    description:"Лосось, вершковий сир",
                    category:"rols",
                    img: "images/menu/42.jpg",
                },
                {
                    name:"МІСС УНАГІ",
                    price: 105,
                    description:"Копчений вугор, сніжний краб, соус «Спайсі», кунжут",
                    category:"rols",
                    img: "images/menu/43.jpg",
                },
                {
                    name:"АЛЯСКА",
                    price: 180,
                    description:"Котлета з ніжного філе окуня та норвезького лосося, салат «Рукола», помідори, мариновані огірки, соус «Тар-тар»",
                    category:"burger",
                    img: "images/menu/44.jpg",
                },
                {
                    name:"БРУКЛІН",
                    price: 150,
                    description:"Ситний бургер з яловичою котлетою, сиром «Чедер», беконом, свіжим салатом «Ромен», помідорами, цибулею та арахісом, в житній булочці",
                    category:"burger",
                    img: "images/menu/45.jpg",
                },
                {
                    name:"ТЕХАС",
                    price: 160,
                    description:"Традиційний техаський рецепт бургера: котлета з яловичини, вершковий соус з беконом, листя салатів «Ромен» та «Рукола», сир «Чедер»",
                    category:"burger",
                    img: "images/menu/46.jpg",
                },
                {
                    name:"ЦЕЗАР",
                    price: 125,
                    description:"Класичне поєднання інгредієнтів салату «Цезар» в бургері, соковита курка в паніровці, листя салату «Ромен», свіжі овочі в соусі «Цезар»",
                    category:"burger",
                    img: "images/menu/47.jpg",
                },
                {
                    name:"МОРОЗИВО АСОРТІ",
                    price: 70,
                    description:"3 кульки морозива на ваш вибір, з полуничним та шоколадним топінгом",
                    category:"desert",
                    img: "images/menu/48.jpg",
                },
                {
                    name:"КУЛЬКА МОРОЗИВА",
                    price: 30,
                    description:"1 кулька морозива на ваш вибір, з полуничним та шоколадним топінгом.",
                    category:"desert",
                    img: "images/menu/49.jpg",
                },
                {
                    name:"МІНАРІ",
                    price: 115,
                    description:"Полуниця, ківі, банан і вершковий сир, загорнуті в тонке рисове тісто. Подається з полуничним топінгом.",
                    category:"desert",
                    img: "images/menu/50.jpg",
                },

            ]
        }
    }
})

$(document).ready(function () {



})






//reserv
var rezerv = new Vue({
    el: "#reservation",
    data:{
        errors: [],
        date: null,
        time: null,
        people: null,
        phone: null,
        name: null
    },
    created(){
        this.$root.date = $('input[name="date"]').val();
        console.log(this.$root);
    },
    methods:{
        startDatePicker: function(){
            $(document).ready(function () {

                $('input[name="date"]').daterangepicker({
                    "singleDatePicker": true,
                    "locale": {
                        "format": "DD/MM/YYYY",
                        "separator": " / ",
                        "applyLabel": "Підтвердити",
                        "cancelLabel": "Скасувати",
                        "daysOfWeek": [
                            "Нд",
                            "Пн",
                            "Вт",
                            "Ср",
                            "Чт",
                            "Пт",
                            "Сб"
                        ],
                        "monthNames": [
                            "Січень",
                            "Лютий",
                            "Березень",
                            "Квітень",
                            "Травень",
                            "Червень",
                            "Липень",
                            "Серпень",
                            "Вересень",
                            "Жовтень",
                            "Листоопад",
                            "Грудень"
                        ],
                        "firstDay": 1
                    },

                });
                rezerv.$root.date = $('input[name="date"]').val();

                $('input[name="date"]').on('apply.daterangepicker', function(ev, picker) {
                    rezerv.$root.date = $('input[name="date"]').val();

                });

                $('input[name="time"]').daterangepicker({
                    "singleDatePicker": true,
                    "timePicker": true,
                    "timePicker24Hour": true,
                    "timePickerIncrement": 30,
                    "autoApply": true,
                    "locale": {
                        "format": "HH:mm",
                    },

                }).on('show.daterangepicker', function (ev, picker) {
                    rezerv.$root.time = $('input[name="time"]').val();
                    picker.container.find(".calendar-table").hide();
                });
                rezerv.$root.time = $('input[name="time"]').val();
            })

        },
        checkForm: function(e){
            // if (this.name && this.people) {
            //     return true;
            // }

            this.errors = [];

            if (!this.name || this.name.length < 2 || this.name.trim() == "") {
                this.errors.push('Потрібно вказати ім\'я.');
            }
            if (!this.date) {
                this.errors.push('Вкажіть дату прибуття.');
            }
            if (!this.time) {
                this.errors.push('Вкажіть час прибуття.');
            }
            if (!this.people || this.people <=0) {
                this.errors.push('Вкажіть кількість людей.');
            }

            if (!this.phone) {
                this.errors.push('Вкажіть номер телефону.');
            }

            e.preventDefault();

            if (this.errors.length==0){
                console.log("SENT");
            }
        },
    }
})
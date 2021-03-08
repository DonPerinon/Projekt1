import axios from "axios";
import * as M from "materialize-css";
import Vue from "vue";

// tslint:disable-next-line no-unused-expression
new Vue( {
   
    computed: {
    hasCars(): boolean {
      
            return this.isLoading === false && this.cars.length > 0;
        },
     noCars(): boolean {
         
            return this.isLoading === false && this.cars.length === 0;
        
        }
    },
    data() {
        return {
            car_name:"",
            Image:Image,
            cars:[],
            isLoading: true
            //text:""
        };
    },
    el: "#app",
    methods: {
       /* addAnimal() {
            const animal = {
              name: this.name,
              //text :this.text
            };
            axios
                .post( "/api/animal/add",animal )
                .then( () => {
                  
                    this.name="";
                    this.text= "";
                    this.loadAnimals();
                } )
                .catch( ( err: any ) => {
                   
                    console.log( err );
                } );
        },*/
        
        loadAnimals() {
            axios
                .get( "/api/car/all" )
                .then( ( res: any ) => {
                    
                    this.isLoading = false;
                    
                    this.cars = res.data;

                   
                } )
                .catch( ( err: any ) => {
             
                    console.log( err );
                } );
        }
    },
    mounted() {
        console.log(this.cars)
        return this.loadAnimals();
     
    }
} );
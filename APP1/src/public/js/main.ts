import axios from "axios";
import * as M from "materialize-css";
import Vue from "vue";

// tslint:disable-next-line no-unused-expression
new Vue( {
   
    computed: {
        hazAnimals(): boolean {
      
            return this.isLoading === false && this.animals.length > 0;
        },
        noAnimals(): boolean {
         
            return this.isLoading === false && this.animals.length === 0;
        
        }
    },
    data() {
        return {
            Name:"",
            animals:[],
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
                .get( "/api/animal/all" )
                .then( ( res: any ) => {
                    
                    this.isLoading = false;
                    this.animals = res.data;
                    console.log(this.animals)

                   
                } )
                .catch( ( err: any ) => {
             
                    console.log( err );
                } );
        }
    },
    mounted() {
        return this.loadAnimals();
     
    }
} );
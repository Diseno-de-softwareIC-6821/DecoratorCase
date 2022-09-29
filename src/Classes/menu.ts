import { EAditional } from "../Enumerators/EAditional";
import { ESandwich } from "../Enumerators/ESandwich";
import { ComponentFactory } from "../Factories/ComponentFactory";
import { iComponent } from '../Interfaces/iComponent';
import { Sandwich } from "../Classes/Sandwich";
/*
var opcion: string;
var opcionN: number;
*/

export class Menu{
    static listaSandwiches: iComponent[] = [];
    
    constructor(
    ){}
    
    addSandwich (sandwichType: ESandwich):iComponent{
        return ComponentFactory.getNewSandwich(sandwichType);
    }
    
    addAditional (aditionalType: EAditional, pedidoAct: iComponent):iComponent{
        return ComponentFactory.getNewAditional(aditionalType, pedidoAct);
    }

    printOrder (): void{
        console.log("Su pedido es: ");
        Menu.listaSandwiches.forEach((sandwich) => {
            console.log(sandwich);
        });
    }
    
    //? Funcion que muestra el menú principal de sandwiches
    public menuPrincipal(): void{
    

        let opcion: string = "";
        do{
            console.log("Bienvenido al TecWay");
            console.log("1. Hacer pedido");
            console.log("2. Salir");
            const prompt = require("prompt-sync")();
            opcion = prompt("Ingrese una opcion: ");
            switch (opcion) {
                case "1":{
                    this.menuSandwiches();
                    break;
                } 
                case "2":{
                    console.log("Vuelva pronto!");
                    this.printOrder();
                    break;
                }    
                default: {
                    console.log("Opcion Invalida");
                    break;
                }
            }
        }while (opcion != "2");
        
    }
    private menuSandwiches(): void{
        let opcion: string = "";
        console.log("--------------------");
        console.log("\nMenu de Sandwiches\n");
        console.log("1. Pavo");
        console.log("2. Italiano");
        console.log("3. Beef");
        console.log("4. Veggie");
        console.log("5. Atun");
        console.log("6. Pollo");
        const prompt = require("prompt-sync")();
        opcion = prompt("Ingrese un sandwich: ");
        let sandwichPedido:iComponent;
        switch (opcion) {
            case "1":{
                sandwichPedido = this.addSandwich(ESandwich.PAVO);
            }
            case "2":{
                sandwichPedido = this.addSandwich(ESandwich.ITALIANO);
            }
            case "3":{
                sandwichPedido = this.addSandwich(ESandwich.BEEF);
            }
            case "4":{
                sandwichPedido = this.addSandwich(ESandwich.VEGGIE);
            }
            case "5":{
                sandwichPedido = this.addSandwich(ESandwich.ATUN);
            }
            case "6":{
                sandwichPedido = this.addSandwich(ESandwich.POLLO);
            }
            this.menuAdicionales(sandwichPedido);
        }
        //let sandwichPedido:iComponent = this.addSandwich(); 
    }

    private menuAdicionales(sandwichAct: iComponent): void{
        let opcion: string = "";
        console.log("\nMenú de Adicionales\n");
        console.log("1. Aguacate");
        console.log("2. Doble Proteina");
        console.log("3. Hongos");
        console.log("4. Refresco");
        console.log("5. Sopa");
        console.log("6. Postre");
        do{
            const prompt = require("prompt-sync")();
            opcion = prompt("Ingrese un adicional: ");
            switch (opcion) {
                case "1":{
                    this.addAditional(EAditional.AGUACATE, sandwichAct);
                }
                case "2":{
                    this.addAditional(EAditional.DOBLE_PROTEINA, sandwichAct);
                }
                case "3":{
                    this.addAditional(EAditional.HONGOS, sandwichAct);
                }
                case "4":{
                    this.addAditional(EAditional.REFRESCO, sandwichAct);
                }
                case "5":{
                    this.addAditional(EAditional.SOPA, sandwichAct);
                }
                case "6":{
                    this.addAditional(EAditional.POSTRE, sandwichAct);
                }
            }
            console.log("Desea agregar otro adicional?");
            console.log("1. Si");
            console.log("2. No");
            const promt = require("prompt-sync");
            opcion = prompt("Ingrese su opción: ");
        }while(opcion != "2");
        Menu.listaSandwiches.push(sandwichAct);
        console.log("Sandwich agregado al carrito exitosamente!");
    }
    
    /*
    private input(nota: string): number{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        /*let opcion:number = readline.question(nota, (dato: string): number => {
            let num = Number(dato); // guarda el dato ingresado
            readline.close(); // cierra el input
            return num; //devuelve el input    
        });
        let opcion:number = readline.question(nota);
        readline.close(); // cierra el input
       
        let salida: boolean = true; 
        do{
            if(opcion >= 0 && opcion <= 6){
                salida = true;
            }else{
                console.log("Opcion invalida");
                salida = false;
                opcion = readline.question(nota, (dato: string): number => {
                    let num = Number(dato);
                    readline.close();
                    return num;
                });
                readline.close();
            }
        }while(!salida);  
        return opcion;
        
    }*/

    
    //AGUACATE,DOBLE PROTEINA,HONGOS,REFRESCO,SOPA,POSTRE
    //AGUACATE,DOBLE PROTEINA,HONGOS,REFRESCO,SOPA,POSTRE
    //AGUACATE,DOBLE PROTEINA,HONGOS,REFRESCO,SOPA,POSTRE

}


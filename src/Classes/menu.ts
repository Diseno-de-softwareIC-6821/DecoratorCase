import { EAditional } from "../Enumerators/EAditional";
import { ESandwich } from "../Enumerators/ESandwich";
import { ComponentFactory } from "../Factories/ComponentFactory";
import { iComponent } from '../Interfaces/iComponent';

import { OrderItem } from '../Models/OrderItem';
export class Menu{
    private listaSandwiches: OrderItem[] = [];
    private prompt = require("prompt-sync")();

    constructor(){}
    
    addSandwich (sandwichType: ESandwich):iComponent{
        return ComponentFactory.getNewSandwich(sandwichType);
    }
    
    addAditional (aditionalType: EAditional, pedidoAct: iComponent):iComponent{
        return ComponentFactory.getNewAditional(aditionalType, pedidoAct);
    }

    printOrder (): void{
        console.log("Su pedido es: ");
        this.listaSandwiches.forEach((orderItem) => {
            console.log(orderItem.sandwich!.getName()+": $"+orderItem.sandwich!.getPrice(orderItem.is30cm));
        });
    }
    
    // Funcion que muestra el menú principal de sandwiches
    public menuPrincipal(): void{
    

        let opcion: string = "";

        do{
            console.log("Bienvenido al TecWay");
            console.log("1. Hacer pedido");
            console.log("2. Salir");
            
            opcion = this.prompt("Ingrese una opcion: ");
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
        
        let sandwichPedido: OrderItem = {sandwich: null, is30cm: false};
        opcion = this.prompt("Ingrese un sandwich: ");
        sandwichPedido.is30cm = this.prompt("¿Desea un sandwich de 30cm? (y/n): ") == "y";
        switch (opcion) {
            case "1":{
                this.prompt
                sandwichPedido.sandwich = this.addSandwich(ESandwich.PAVO);
                break
            }
            case "2":{
                sandwichPedido.sandwich = this.addSandwich(ESandwich.ITALIANO);
                break
            }
            case "3":{
                sandwichPedido.sandwich = this.addSandwich(ESandwich.BEEF);
                break
            }
            case "4":{
                sandwichPedido.sandwich = this.addSandwich(ESandwich.VEGGIE);
                break
            }
            case "5":{
                sandwichPedido.sandwich = this.addSandwich(ESandwich.ATUN);
                break
            }
            case "6":{
                sandwichPedido.sandwich = this.addSandwich(ESandwich.POLLO);
                break
            }
        }
        this.prompt("Quiere agregar adicionales? (y/n): ") == "y"? this.menuAdicionales(sandwichPedido): this.listaSandwiches.push(sandwichPedido);
    
    }

    private menuAdicionales(sandwichAct: OrderItem): void{
        let opcion: string = "";
        console.log("\nMenú de Adicionales\n");
        console.log("1. Aguacate");
        console.log("2. Doble Proteina");
        console.log("3. Hongos");
        console.log("4. Refresco");
        console.log("5. Sopa");
        console.log("6. Postre");
        do{

            opcion = this.prompt("Ingrese un adicional: ");

            switch (opcion) {
                case "1":{
                    sandwichAct.sandwich = this.addAditional(EAditional.AGUACATE, sandwichAct.sandwich!);
                    break;
                }
                case "2":{
                    sandwichAct.sandwich =  this.addAditional(EAditional.DOBLE_PROTEINA, sandwichAct.sandwich!);
                    break
                }
                case "3":{
                    sandwichAct.sandwich =  this.addAditional(EAditional.HONGOS, sandwichAct.sandwich!);
                    break
                }
                case "4":{
                    sandwichAct.sandwich =  this.addAditional(EAditional.REFRESCO, sandwichAct.sandwich!);
                    break
                }
                case "5":{
                    sandwichAct.sandwich =  this.addAditional(EAditional.SOPA, sandwichAct.sandwich!);
                    break
                }
                case "6":{
                    sandwichAct.sandwich =  this.addAditional(EAditional.POSTRE, sandwichAct.sandwich!);
                    break
                }
            }
            console.log("Desea agregar otro adicional?");
            console.log("1. Si");
            console.log("2. No");
            
            opcion = this.prompt("Ingrese su opción: ");

        }while(opcion != "2");
        this.listaSandwiches.push(sandwichAct);
        console.log("Sandwich agregado al carrito exitosamente!");
    }

}


import { iComponent } from "../Interfaces/iComponent";

import { ESandwich } from "../Enumerators/ESandwich";
import { EAditional } from "../Enumerators/EAditional";

import SandwichPrices from "../PriceSheet/Sandwich.json"
import AditionalPrices from "../PriceSheet/Aditional.json"

// usa los json para obtener los precios y el nombre de los sandwiches y adicionales
export class ComponentFactory {

    // retorna un nuevo sandwich
    // recive el nombre del sandwich
    static getNewSandwich(sandwichName: ESandwich): iComponent| void{
        
        try{
            const sandwichInfo = SandwichPrices[sandwichName];
            return new Sandwich(sandwichInfo['name'], sandwichInfo['15cm'], sandwichInfo['30cm']);
        
        }catch(e){
            console.error(e);
        }
    }

    // retorna un nuevo adicional
    // recive el nombre del adicional
    // recive el componente a decorar
    static getNewAditional(aditionalName: EAditional, decoratorComponent: iComponent): iComponent| void{
        try{
            const aditionalInfo = AditionalPrices[aditionalName];
            return new Aditional(aditionalInfo['name'], aditionalInfo['15cm'], aditionalInfo['30cm'], decoratorComponent);
        }
        catch(e){
            console.error(e);
        }
    }

}
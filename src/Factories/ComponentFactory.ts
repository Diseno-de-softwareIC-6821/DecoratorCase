import { iComponent } from "../Interfaces/iComponent";

import { ESandwich } from "../Enumerators/ESandwich";
import { EAditional } from "../Enumerators/EAditional";

import SandwichPrices from "../PriceSheet/Sandwich.json"
import AditionalPrices from "../PriceSheet/Aditional.json"

import { Sandwich } from "../Classes/Sandwich";
import { Aditional } from "../Classes/Aditional";

// usa los json para obtener los precios y el nombre de los sandwiches y adicionales
export class ComponentFactory {

    // retorna un nuevo sandwich
    // recive el nombre del sandwich
    static getNewSandwich(sandwichName: ESandwich): iComponent{
    
        const sandwichInfo = SandwichPrices[sandwichName];
        // {
        //     "name": "Pavo",
        //     "15cm":12,
        //     "30cm":18
        // }
        return new Sandwich(sandwichInfo['name'], sandwichInfo['15cm'], sandwichInfo['30cm']);
    
    }

    // retorna un nuevo adicional
    // recive el nombre del adicional
    // recive el componente a decorar
    static getNewAditional(aditionalName: EAditional, decoratorComponent: iComponent): iComponent{

        const aditionalInfo = AditionalPrices[aditionalName];
        return new Aditional(aditionalInfo['name'], aditionalInfo['15cm'], aditionalInfo['30cm'], decoratorComponent);
    
    }

}
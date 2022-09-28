import { ESandwich } from "./Enumerators/ESandwich";
import { ComponentFactory } from "./Factories/ComponentFactory";

function main(): void{
    // obtiene un sandwich
    const sandwich = ComponentFactory.getNewSandwich(ESandwich.PAVO);

    // obtiene un adicional
    const aditional = ComponentFactory.getNewAditional(ESandwich.PAVO, sandwich);

    // imprime el precio del sandwich
    console.log(sandwich?.getPrice());
}

main()
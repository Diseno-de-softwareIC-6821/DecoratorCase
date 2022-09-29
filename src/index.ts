import { EAditional } from "./Enumerators/EAditional";
import { ESandwich } from "./Enumerators/ESandwich";
import { ComponentFactory } from "./Factories/ComponentFactory";
import { iComponent } from "./Interfaces/iComponent";

function main(): void{

    // crea un pedido de sandwich de pavo con aguacate

    // obtiene un sandwich
    let pedido: iComponent;
    let is30cm: boolean = true;

    pedido = ComponentFactory.getNewSandwich(ESandwich.PAVO);

    // obtiene un adicional
    pedido = ComponentFactory.getNewAditional(EAditional.AGUACATE, pedido);
    pedido = ComponentFactory.getNewAditional(EAditional.POSTRE, pedido);

    // imprime el precio del sandwich
    console.log(pedido.getName()+": $"+pedido.getPrice(is30cm));

}

main()
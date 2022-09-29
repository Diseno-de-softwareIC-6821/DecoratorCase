import { EAditional } from "./Enumerators/EAditional";
import { ESandwich } from "./Enumerators/ESandwich";
import { ComponentFactory } from "./Factories/ComponentFactory";
import { iComponent } from "./Interfaces/iComponent";

function main(): void{


    // obtiene un sandwich
    let pedido: iComponent;
    let is30cm: boolean = true;

    pedido = ComponentFactory.getNewSandwich(ESandwich.PAVO);

    // obtiene un adicional
    pedido = ComponentFactory.getNewAditional(EAditional.AGUACATE, pedido);
    pedido = ComponentFactory.getNewAditional(EAditional.POSTRE, pedido);

    // imprime el precio del sandwich
    console.log(pedido.getName()+": $"+pedido.getPrice(is30cm));

    // make a console input to keep the console open
    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      
    readline.question('Who are you?', (name: string) => {
    console.log(`Hey there ${name}!`);
    readline.close();
    });


    

}

main()
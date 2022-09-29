import { iComponent } from "../Interfaces/iComponent";

export class Aditional implements iComponent{
    private name: string;
    private price15cm: number;
    private price30cm: number;
    private decorator: iComponent;

    constructor(name: string, price15cm: number, price30cm: number, component: iComponent){
        this.name = name;
        this.price15cm = price15cm;
        this.price30cm = price30cm;
        this.decorator = component;
    }

    getPrice(is30cm: boolean): number{
        return is30cm ? this.decorator.getPrice(is30cm) + this.price30cm : this.decorator.getPrice(is30cm) + this.price15cm;
    }

    getName(): string{
        return this.decorator.getName() + " + " + this.name;
    }
}
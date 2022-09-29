import { iComponent } from "../Interfaces/iComponent";

export class Sandwich implements iComponent{
    private name: string;
    private price15cm: number;
    private price30cm: number;

    constructor(name: string, price15cm: number, price30cm: number){
        this.name = name;
        this.price15cm = price15cm;
        this.price30cm = price30cm;
    }

    getPrice(is30cm: boolean): number{
        return is30cm ? this.price30cm : this.price15cm;
    }

    getName(): string{
        return this.name;
    }
}
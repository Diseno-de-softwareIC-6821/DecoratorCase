export interface iComponent {
    getPrice(is30cm: boolean): number;
    getName(): string;
}
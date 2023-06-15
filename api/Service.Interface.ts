export interface Element {
    name: string,
    description: string | undefined,
    quantity: number
}
export interface Category {
    name: string;
    description: string;
    elements: Element[];
}
export interface Product{
    id: number;
    title:string;
    price: number;
    image:string;
    description:string;
    category:string;
    creationAt: string;
}

export interface CreateProduct{
    title:string;
    price: number;
    image:string;
    description:string;
    category:string;
}

export interface UpdateProduct{
    title:string;
    price: number;
    image:string;
    description:string;
    category:string;
}

export interface DeleteProduct{
    id:number,
    title:string
}
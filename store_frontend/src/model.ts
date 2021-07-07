
export interface Product {
  id:string
  name:string
  description:string
  image_url:string
  slug:string
  price:number
  created_at:string
}

export const  products: Product[] = [
  {
    id:'uuid',
    name:'Produto teste',
    description:'muito texto',
    price:500.80,
    image_url:'https://source.unsplash.com/random?product',
    slug:'teste',
    created_at:'2021-06-7'
  }
]
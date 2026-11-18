import { formatPrice } from './model';
const products=[{name:'Studio chair',cents:12999},{name:'Field notebook',cents:875},{name:'Aurora lamp',cents:4250}];
export function PriceDemo(){return <main className="card"><p className="eyebrow">NORTHSTAR CHECKOUT</p><h1>Order summary</h1><p>Product prices arrive from the API as integer cents.</p>{products.map((product)=><article key={product.name}><span>{product.name}</span><strong>{formatPrice(product.cents)}</strong></article>)}</main>}

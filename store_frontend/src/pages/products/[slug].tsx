import Head from 'next/head'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core'
import {Product, products} from '../../model'
import { NextPage } from 'next'
import { CardHeader } from '@material-ui/core'

interface ProductListPageProps {
  product: Product;
}
//const ProductDetailPage: NextPage<ProductListPageProps> = ({product}) => {
  const ProductDetailPage = () => {
    const product = products[0]
  return (
    <div>
      <Head>
        <title>{product.name}Create Next App</title>
      </Head>
      <Typography 
        component="h1"
        variant="h3" 
        color="textPrimary" 
        gutterBottom
      >
       Produtos
      </Typography>
       {products.map((product,key) => {
        <Card key={key}>
          <CardHeader title={product.name.toUpperCase()}
          subheader={`R$ ${product.price}`}
          />          
          <CardActions>
            <Button size="small" color="primary" component="a">Comprar</Button>
          </CardActions>

          <CardMedia image={product.image_url}/>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
          </CardContent>

          </Card>
      })}
    </div>
  )
}

export default ProductDetailPage
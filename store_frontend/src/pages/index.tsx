import Head from 'next/head'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core'
import {products} from '../model'

 export default  function ProductListPage() {
  return (
    <div>
      <Head>
        <title>Listagem de Produtos</title>
      </Head>
      <Typography 
        component="h1"
        variant="h3" 
        color="textPrimary" 
        gutterBottom
      >
       Produtos
      </Typography> 
      Listagem de Produtos
       {products.map((product,key) => {
        <Card key={key}>
          <CardMedia image={product.image_url}/>
          <CardContent>
            <Typography component="h2" variant="h5"  gutterBottom >
              {product.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" component="a">Detalhes</Button>
          </CardActions>
          </Card>
      })}
    </div>
  )
}


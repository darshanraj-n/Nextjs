import {useRouter} from 'next/router'

function Product({ product}) 
{
    const router = useRouter()

     if(router.isFallback){
        return<h1>Loading</h1>
     }
   
    return(
        <>
        <h2>{product.id} {product.title} {product.price}</h2>
        <p>{product.description}</p>
        <hr/>
        </>
    )
}
export default Product


export async function getStaticProps(context){
    const {params}=context
    const response= await fetch(`http://localhost:4000/products/${params.productid}`)
    const data = await response.json()

    // if(!data.id){
    //     return{
    //         notFound: true  // if there is no path it will set 404 page
    //     }
    // }
    return{
        props:{
            product:data
        },
        revalidate:10  // serving stale data
    }
}

export async function getStaticPaths(){
    
    return{
        paths:[
            {
                params:{productid:'1'}, //1 is generated at build time 2 and 3 will generate only after the request is made
            }
        ],
        fallback:true
    }
    }
export default function Name1( {params} : {params:{productId:string}}) {
    return (
        <div>
            <h1>Product Name {params.productId}</h1>
        </div>
    )
}
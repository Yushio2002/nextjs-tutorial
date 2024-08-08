import { notFound } from "next/navigation";
import NotFound from "next/not-found";
import { preinit } from "react-dom";
export default function ReviewDetail( {params}:{params:{
    productId:string;
    reviewId:string;
}}) 
{
    if (parseInt(params.reviewId) >1000){
        notFound ();
    }
    return (
        <div>
            <h1>Review {params.reviewId} for Product {params.productId} </h1>
        </div>
    );
}
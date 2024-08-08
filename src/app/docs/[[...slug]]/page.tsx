export default function Docs({params} : {params:{
    slug:string[];
}}) 
{
    if (params.slug?.length === 2){
        return (
            <h1>Welcome to slug 2 {params.slug[0]} and concept {params.slug[1]}</h1>
        );
    }
    else if (params.slug?.length ===3){
        return ( <h1>Welcome to slug 3 {params.slug[0]} and concept {params.slug[1]}</h1>)
    };
    return (
        <div>
            <h1>Docs Home page</h1>
        </div>
    )
}
import Link from "next/link"
export default function ProductList() {
    return (
        <div>
            <Link href="/">Home </Link>
            <h1><Link href="/products/1">Product List 1</Link></h1>
            <h1><Link href="/products/2">Product List 2</Link></h1>
            <h1><Link href="/products/3">Product List 3</Link></h1>
            

        </div>
    )
}
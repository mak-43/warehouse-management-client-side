import { useEffect, useState } from "react"

const useItem=id=>{
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [product])
    return [product,setProduct]
}
export default useItem
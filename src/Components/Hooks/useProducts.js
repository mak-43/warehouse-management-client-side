import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://murmuring-shelf-21130.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false)
    }, [products])
    return [products, setProducts]
}
export default useProducts
import { useEffect, useState } from "react"

const useItem = id => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const url = `https://murmuring-shelf-21130.herokuapp.com/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id,product])

    return [product, setProduct]
}
export default useItem
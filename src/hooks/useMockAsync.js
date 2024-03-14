import { useEffect, useState } from "react";

function useMockAsync(){
	const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return {isLoading}
}
export default useMockAsync
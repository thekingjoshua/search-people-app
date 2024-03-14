import { useEffect, useState } from "react";

export function useMockAsync(){
	const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return {isLoading}
}
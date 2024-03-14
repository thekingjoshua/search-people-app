import { useEffect, useState } from "react";

function useGeneratePeople(){
	const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    return {isLoading}
}
export default useGeneratePeople
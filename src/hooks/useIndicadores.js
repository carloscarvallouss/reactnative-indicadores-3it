import React, { useState, useEffect } from "react";
import { getIndicadores } from "../services/IndicadoresWS";

const useIndicadores = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [indicadores, setIndicadores] = useState([])

    useEffect(() => {
        setTimeout(() => {
            getIndicadores(res => {
                setIsLoading(false)
                setIndicadores(Object.values(res))
            })
        }, 2000);
    }, [])

    return [isLoading, indicadores]
}

export default useIndicadores;
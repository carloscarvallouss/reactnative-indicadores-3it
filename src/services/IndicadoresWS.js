
import axios from "axios"

export const getIndicadores = (res) => {
    axios.get("https://mindicador.cl/api")
        .then(data => {
            res(data.data)
        })
        .catch(e => {
            console.log(e)
            res([])
        })
}

export const getPrecios = (id, res) => {
    axios.get(`https://mindicador.cl/api/${id}`)
        .then(data => {
            res(data.data)
        })
        .catch(e => {
            console.log(e)
            res(null)
        })
}

export const getDetalle = (item, res) => {
    res([{
        title: 'Dolar',
        description: 'Pesos',
    },
    {
        title: 'UF',
        description: 'Pesos',
    },
    ])
}
import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { ImputsContainer } from "../../components/ImputsContainer"
import { Information } from "../../components/Information"
import { InfoTable } from "../../components/InfoTable"
import { api } from "../../services/api"
import './styles.css'

export const Home = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        api.get('/listar/financa/0').then(response => {
            console.log(response.data.rows)
            setList(response.data.rows)
        })
    },[])

    function handleSaveItens(item) {
        const data = item.dados
        api.post('/criar/financa', data).then(response => {
            console.log(response)
        })
        api.get('/listar/financa/0').then(response => {
            console.log(response.data.rows)
            setList(response.data.rows)
        })
    }

    function handleSeachFinancasfromDate(data) {
        api.get(`/listar/financa/dataInicial/${data.dataInicial}/dataFinal/${data.dataFinal}/page/0`)
        .then(response => {
            setList(response.data.rows)
        })
    }

    return (
        <div className="container">
            <Header />
            <Information list={list} onSeach={handleSeachFinancasfromDate}/>
            <ImputsContainer addItens={handleSaveItens} />
            <InfoTable list={list} />
        </div>
        
    )
}
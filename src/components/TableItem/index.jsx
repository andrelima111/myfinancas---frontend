import { TableCell, TableRow } from "@mui/material"



export const TableItem = ({data, categoria_id, titulo, valor}) => {
    let dataFormata = data.split('-').reverse().join('-')
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell style={{ color: '#fff' }} align="center">{dataFormata}</TableCell>
            <TableCell 
            style={categoria_id === 'Ganho' ? {color: '#008000'} : {color: 'red'}} 
            align="center">{categoria_id}
            </TableCell>
            <TableCell style={{ color: '#fff' }} align="center">{titulo}</TableCell>
            <TableCell style={categoria_id === 'Ganho' ? {color: '#008000'} : {color: 'red'}} align="center">{valor}</TableCell>
        </TableRow>
    )
}
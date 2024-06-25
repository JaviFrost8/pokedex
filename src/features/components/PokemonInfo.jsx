import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const PokemonInfo = ({pokemon}) => {

    if(!pokemon){
        return <div></div>
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align='center'><strong>Imagen</strong></TableCell>
            <TableCell align='center'><strong>Nombre</strong></TableCell>
            <TableCell align="right"><strong>Id</strong></TableCell>
            <TableCell align="right"><strong>Altura&nbsp;</strong></TableCell>
            <TableCell align="right"><strong>Peso&nbsp;</strong></TableCell>
            <TableCell align="right"><strong>Tipo&nbsp;</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </TableCell>
              <TableCell align="center">{pokemon.name}</TableCell>
              <TableCell align="right">{pokemon.id}</TableCell>
              <TableCell align="right">{pokemon.height}</TableCell>
              <TableCell align="right">{pokemon.weight}</TableCell>
              <TableCell align="right">{pokemon.types[0].type.name}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

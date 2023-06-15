import React from 'react'

// Mui Component
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'

import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

// Mui Icon
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

interface Props {
  dataHead: {
    name: string
    position?: string
  }[]
  children: any

  pagination?: boolean
  currentPage?: number
  lastPage?: number
  handlePage?: any
}

export default function CustomTable(props: Props) {
  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          width: '100%',
          overflow: 'auto',
          px: 3,
          borderRadius: 1.5,
          border: '1px solid #EEEEEE',
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ height: 64 }}>
              {props.dataHead.map((item, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: 600,
                    textAlign: item.position ?? 'center',
                    pl:
                      index === 0 || props.dataHead.length === index + 1
                        ? 3
                        : 2,
                    pt: 3,
                  }}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  {item.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {props.children}
        </Table>
      </TableContainer>

      {!props.pagination && (
        <Grid container item justifyContent="flex-end" sx={{ mt: 2 }}>
          <Stack spacing={2} sx={{ m: 2 }}>
            <Pagination
              count={props.lastPage}
              boundaryCount={1}
              page={props.currentPage}
              onChange={props.handlePage}
              sx={{
                '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)':
                  {
                    borderRadius: 3,
                    backgroundColor: 'white',
                  },
                '& .Mui-selected': {
                  borderRadius: 3,
                },
              }}
            />
          </Stack>
        </Grid>
      )}
    </>
  )
}

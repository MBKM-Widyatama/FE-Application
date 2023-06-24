import { useContext, useState } from 'react'
import { AppContext } from '@providers/ContextApiProvider'

import { useQuery } from 'react-query'
import service from '@services/masterData/newsCategory'
import { NewsCategory } from '@services/masterData/newsCategory/types'

import { formatDate } from '@utils/formatter/formatDate'

// MUI Components
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

// MUI Icons
import SearchIcon from '@mui/icons-material/Search'

// Custom Components
import Button from '@components/Button'
import Table from '@components/Table'

// Private Components
import Form from './components/Form'

export default function Faculties() {
  const { setSnackbar, setLoading } = useContext(AppContext)

  const [page, setPage] = useState(1)
  const [openDialog, setOpenDialog] = useState({
    open: false,
    type: '',
  })

  const [detailData, setDetailData] = useState<NewsCategory | null>(null)

  const dataTableHead = [
    { name: 'No' },
    { name: 'Name' },
    { name: 'Created Date' },
    { name: 'Updated Date' },
    { name: 'Action' },
  ]

  const { data } = useQuery(
    ['news-category', page],
    async () => service.get(),
    {
      onError: (error: any) =>
        setSnackbar({
          open: true,
          text: error.data.message,
          variant: 'error',
        }),
    },
  )

  return (
    <Grid container spacing={3.5}>
      <Grid item container xs={12} justifyContent="space-between">
        <Grid item>
          <Button
            label="Create Data"
            onClick={() => setOpenDialog({ open: true, type: 'Create' })}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            variant="outlined"
            name="search"
            placeholder="Something beautiful..."
            InputProps={{
              style: { fontSize: 14 },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" sx={{ color: '#AAAAAA' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              '& fieldset': {
                borderRadius: '24px !important',
                borderColor: '#EAEAEA',
              },
              backgroundColor: 'white',
              borderRadius: '24px !important',
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Table dataHead={dataTableHead}>
          <TableBody>
            {data?.content?.map((item: NewsCategory, index: number) => (
              <TableRow key={index} sx={{ height: 112 }}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  {formatDate(item.created_at)}
                </TableCell>
                <TableCell align="center">
                  {formatDate(item.updated_at)}
                </TableCell>
                <TableCell align="center">
                  <Button
                    label="Detail"
                    color="primary"
                    onClick={() => {
                      setDetailData(item)
                      setOpenDialog({ open: true, type: 'Detail' })
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>

      <Form
        data={detailData}
        openDialog={openDialog}
        onCloseDialog={(e) => {
          setOpenDialog(e)
        }}
      />
    </Grid>
  )
}

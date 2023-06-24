import { useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { AppContext } from '@providers/ContextApiProvider'

import { useQuery } from 'react-query'
import { InitialReport } from '@services/penelitian/initialReport/types'
import service from '@services/penelitian/initialReport'

// MUI Components
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Chip from '@mui/material/Chip'

// MUI Icons
import SearchIcon from '@mui/icons-material/Search'

import { useTheme } from '@mui/material/styles'

// Custom Components
import Button from '@components/Button'
import Table from '@components/Table'

export default function InitialReports() {
  const { setSnackbar, setLoading } = useContext(AppContext)

  const theme = useTheme()
  const router = useRouter()

  const [page, setPage] = useState(1)

  const [detailData, setDetailData] = useState<InitialReport | null>(null)

  const dataTableHead = [
    { name: 'No' },
    { name: 'Type' },
    { name: 'Academic Year' },
    { name: 'Schema' },
    { name: 'Research title ' },
    { name: 'Status' },
    { name: 'Action' },
  ]

  const { data } = useQuery(
    ['initial-report', page],
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

  const dataSample: InitialReport[] = [
    {
      id: '1',
      type: 'Group',
      schema: 'Fundamental Research',
      academic_year: '2022 / 2023',
      research_title: 'The Impact of Social Media Usage on Mental Health',
      status: 'Awaiting Review',
    },
    {
      id: '2',
      type: 'Individual',
      schema: 'Fundamental Research',
      academic_year: '2022 / 2023',
      research_title: 'The Impact of Social Media Usage on Mental Health',
      status: 'Approved',
    },
  ]

  return (
    <Grid container spacing={3.5}>
      <Grid item container xs={12} justifyContent="space-between">
        <Grid item>
          <Button
            label="Add Researach Proposal"
            onClick={() => router.push('initial-report/add-research-proposal')}
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
            {dataSample.map((item: InitialReport, index: number) => (
              <TableRow key={index} sx={{ height: 112 }}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.academic_year}</TableCell>
                <TableCell>{item.schema}</TableCell>
                <TableCell>{item.research_title}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <Chip
                    label={item.status}
                    color={item.status === 'Approved' ? 'success' : 'warning'}
                    sx={{
                      borderRadius: 2,
                      fontWeight: 500,
                      color:
                        item.status === 'Approved'
                          ? theme.palette.success.dark
                          : theme.palette.warning.dark,
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Button
                    label="Detail"
                    color="primary"
                    onClick={() => {
                      setDetailData(item)
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  )
}

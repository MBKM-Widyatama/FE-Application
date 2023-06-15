import { useState, useContext } from 'react'
import { AppContext } from '@providers/ContextApiProvider'
import Image from 'next/image'

import { useMutation, useQueryClient } from 'react-query'
import service from '@services/masterData/faculty'
import { Faculty, PayloadFaculty } from '@services/masterData/faculty/types'

import { formatDate } from '@utils/formatter/formatDate'

// Mui Components
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

// Custom Components
import FormDialog from '@components/Dialog'
import Button from '@components/Button'

// Assets
import { ILSampleAvatar } from '@utama/assets/ilustrations'
import { ICMessage, ICTrashbin } from '@utama/assets/icons'

interface Props {
  openDialog: {
    open: boolean
    type: string
  }
  onCloseDialog(e: { open: boolean; type: string }): void
  data: Faculty | null
}

export default function Form(props: Props) {
  const { setSnackbar, setLoading } = useContext(AppContext)
  const queryClient = useQueryClient()

  const initForm: PayloadFaculty = { name: '', leader: '' }

  const [form, setForm] = useState<PayloadFaculty>(initForm)
  const [error, setError] = useState<any>('')

  const sampleData = [
    { id: 'A', name: 'A' },
    { id: 'B', name: 'B' },
    { id: 'C', name: 'C' },
  ]

  function validate(res: any) {
    if (res.status === 422) {
      const newError = { ...error }

      // eslint-disable-next-line array-callback-return
      res.data.errors.map((item: any) => {
        newError[item.field] = item.message
      })

      setError(newError)
      setSnackbar({
        open: true,
        text: 'Unprocessable Content',
        variant: 'error',
      })
    } else {
      setSnackbar({
        open: true,
        text: res.data.message,
        variant: 'error',
      })
    }
  }

  function handleCloseDialog() {
    props.onCloseDialog({ open: false, type: '' })
    setForm(initForm)
  }

  function onApiSuccess(message: string) {
    queryClient.invalidateQueries('faculites')
    handleCloseDialog()
    setSnackbar({
      open: true,
      text: message,
    })
  }

  const createData = useMutation(
    async (data: PayloadFaculty) => service.create(data),
    {
      onSuccess: () => onApiSuccess('Data updated successfully'),
      onError: (err: any) => validate(err),
    },
  )

  const updateData = useMutation(
    async (data: PayloadFaculty) => service.update(data, props.data?.id ?? ''),
    {
      onSuccess: () => onApiSuccess('Data updated successfully'),
      onError: (err: any) => validate(err),
    },
  )

  const deleteData = useMutation(
    async () => service.remove(props.data?.id ?? ''),
    {
      onSuccess: () => onApiSuccess('Data deleted successfully'),
    },
  )

  function handleChange(e: any) {
    const { name, value } = e.target

    setForm((f) => ({
      ...f,
      [name]: value,
    }))

    setError((f: any) => ({
      ...f,
      [name]: '',
    }))
  }

  function onSubmitDialog(e: any) {
    e.preventDefault()

    switch (props.openDialog.type) {
      case 'Create':
        createData.mutate(form)
        break
      case 'Update':
        updateData.mutate(form)
        break
      case 'Delete':
        deleteData.mutate()
        break
      default:
        break
    }
  }

  const DialogContent = () => {
    switch (props.openDialog.type) {
      case 'Detail':
        return (
          <Grid container item lg={12} md={12} xs={12} spacing={3}>
            <Grid
              item
              container
              xs={8}
              spacing={3}
              sx={{
                borderRight: '1px solid #EEEEEE',
                pr: 3,
              }}
            >
              <Grid item xs={12}>
                <Box
                  p={1.5}
                  border="1px solid #EEEEEE"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ borderRadius: 1 }}
                >
                  <Image
                    src={ILSampleAvatar}
                    alt="sample avatar"
                    width={32}
                    height={32}
                  />
                  <Typography variant="body2" color="#828282" sx={{ mx: 1 }}>
                    Created by,
                    <Typography
                      display="inline"
                      variant="body2"
                      color="#343434"
                      fontWeight={600}
                    >
                      {''} Tri Wulandari
                    </Typography>
                  </Typography>
                  <Image
                    src={ICMessage}
                    alt="ic message"
                    width={24}
                    height={24}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider sx={{ width: '100%' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography fontWeight={600} sx={{ mb: 2.5 }}>
                  Faculties Detail
                </Typography>

                <Box
                  px={2}
                  py={2.5}
                  borderRadius={1.5}
                  border="1px solid #EEEEEE"
                >
                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      color="#828282"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      Faculties Detail
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      {props.data?.name}
                    </Typography>
                  </Box>
                  <Divider sx={{ width: '100%', my: 2 }} />

                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      color="#828282"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      Faculty’s Leader
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      {props.data?.leader}
                    </Typography>
                  </Box>
                  <Divider sx={{ width: '100%', my: 2 }} />

                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      color="#828282"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      Created Date
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      {formatDate(props.data?.created_at)}
                    </Typography>
                  </Box>
                  <Divider sx={{ width: '100%', my: 2 }} />

                  <Box display="flex" justifyContent="space-between">
                    <Typography
                      variant="body2"
                      color="#828282"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      Updated Date
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={500}
                      sx={{ fontSize: 12 }}
                    >
                      {formatDate(props.data?.updated_at)}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullwidth
                label="Update Data"
                color="primary"
                notRounded
                onClick={() => {
                  setForm({
                    name: props.data?.name ?? '',
                    leader: props.data?.leader ?? '',
                  })
                  props.onCloseDialog({ open: true, type: 'Update' })
                }}
              />
              <Box my={3}></Box>
              <Button
                fullwidth
                label="Delete Data"
                color="error"
                notRounded
                onClick={() =>
                  props.onCloseDialog({ open: true, type: 'Delete' })
                }
              />
            </Grid>
          </Grid>
        )
      case 'Create':
      case 'Update':
        return (
          <Grid container item lg={12} md={12} xs={12} spacing={3}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                Faculty Name
              </Typography>
              <FormControl fullWidth>
                <Select
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  sx={{ fontSize: 14, height: 46 }}
                >
                  <MenuItem value="" disabled={true}>
                    <em>Select</em>
                  </MenuItem>
                  {sampleData.map((item: { id: string; name: string }) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
                {error.name ? (
                  <FormHelperText>{error.name}</FormHelperText>
                ) : (
                  ''
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                Faculty Leader
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="leader"
                placeholder="Type here anything"
                value={form.leader}
                onChange={handleChange}
                error={!!error.leader}
                helperText={error.leader}
                InputProps={{
                  style: { fontSize: 14, height: 46 },
                }}
              />
            </Grid>
          </Grid>
        )
      case 'Delete':
        return (
          <Box textAlign="center">
            <Image src={ICTrashbin} alt="ic trashbin" width={78} height={94} />
            <Typography variant="h6" fontWeight={500} sx={{ my: 3, mb: 6.5 }}>
              Are you sure you want to <br /> delete this file permanently?
            </Typography>

            <Box display="flex" justifyContent="space-around">
              <Button
                label="Cancel"
                color="primary"
                onClick={() => props.onCloseDialog({ open: false, type: '' })}
              />

              <Button
                label="Yes, im sure"
                color="error"
                onClick={(e) => onSubmitDialog(e)}
              />
            </Box>
          </Box>
        )
      default:
        return <></>
    }
  }

  return (
    <FormDialog
      open={props.openDialog.open}
      title={`${props.openDialog.type} Data`}
      textOnAgree={`${props.openDialog.type} Data`}
      handleClose={handleCloseDialog}
      functionOnAgree={onSubmitDialog}
      noDialogAction={['Detail', 'Delete'].includes(props.openDialog.type)}
      disable={false}
    >
      <Grid container sx={{ width: '100%', mt: 2 }} justifyContent="center">
        {DialogContent()}
      </Grid>
    </FormDialog>
  )
}

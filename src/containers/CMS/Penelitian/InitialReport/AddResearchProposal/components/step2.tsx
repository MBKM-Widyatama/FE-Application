import React, { useState } from 'react'

import { InitialReport } from '@services/penelitian/initialReport/types'

// MUI Components
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'

// MUI Icons
import AddCircleIcon from '@mui/icons-material/AddCircle'
import CancelIcon from '@mui/icons-material/Cancel'

interface Props {
  innerRef: any
}

interface Payload {
  lead_nrk: string
  lead_id: string
  lead_name: string
  member: { member_nrk: string; member_id: string; member_name: string }[]
}

export default function Step1(props: Props) {
  const initForm: Payload = {
    lead_nrk: '',
    lead_id: '',
    lead_name: '',
    member: [{ member_nrk: '', member_id: '', member_name: '' }],
  }
  const [form, setForm] = useState<Payload>(initForm)
  const [error, setError] = useState<any>('')

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

  function handleAdd() {
    const data = { ...form }

    data.member.push({ member_nrk: '', member_id: '', member_name: '' })

    setForm(data)
  }

  function handleRemove(i: any) {
    if (form.member.length === 1) {
      setForm(initForm)
      return
    }
    const data = { ...form }
    data.member.splice(i, 1)

    setForm(data)
  }

  function handleMemberChange(index: any, event: any) {
    const values = { ...form }

    switch (event.target.name) {
      case 'member_nrk':
        values.member[index].member_nrk = event.target.value
        break

      case 'member_id':
        values.member[index].member_id = event.target.value
        break

      case 'member_name':
        values.member[index].member_name = event.target.value
        break
      default:
        break
    }

    setForm(values)
  }

  const sampleData = [
    { id: 'A', name: 'A' },
    { id: 'B', name: 'B' },
    { id: 'C', name: 'C' },
  ]

  return (
    <Grid container rowSpacing={2}>
      <Grid
        item
        container
        xs={12}
        columnSpacing={3}
        rowSpacing={2}
        sx={{ mb: 2 }}
      >
        <Grid item xs={12}>
          <Typography variant="body1" fontWeight={500}>
            NRK of Lead Researcher
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            NRK of Lead Researcher
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="lead_nrk"
            placeholder="Type here anything"
            value={form.lead_nrk}
            onChange={handleChange}
            // error={!!error.leader}
            // helperText={error.leader}
            InputProps={{
              style: { fontSize: 14, height: 46 },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Employee ID of Lead Researcher
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="lead_id"
            placeholder="Type here anything"
            value={form.lead_id}
            onChange={handleChange}
            // error={!!error.leader}
            // helperText={error.leader}
            InputProps={{
              style: { fontSize: 14, height: 46 },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            Employee ID of Lead Researcher
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="lead_name"
            placeholder="Type here anything"
            value={form.lead_name}
            onChange={handleChange}
            // error={!!error.leader}
            // helperText={error.leader}
            InputProps={{
              style: { fontSize: 14, height: 46 },
            }}
          />
        </Grid>
      </Grid>

      {form.member.map((item, index) => (
        <Grid
          item
          container
          xs={12}
          columnSpacing={3}
          rowSpacing={2}
          key={index}
        >
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" fontWeight={500} sx={{ mr: 3 }}>
              Member {index + 1}
            </Typography>

            {form.member.length !== 1 && (
              <IconButton onClick={handleRemove}>
                <CancelIcon color="error" sx={{ fontSize: 32 }} />
              </IconButton>
            )}

            {form.member.length === index + 1 && (
              <IconButton onClick={handleAdd}>
                <AddCircleIcon color="primary" sx={{ fontSize: 32 }} />
              </IconButton>
            )}
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              NRK of Member
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              name="member_nrk"
              placeholder="Type here anything"
              value={item.member_nrk}
              onChange={(data) => handleMemberChange(index, data)}
              InputProps={{
                style: { fontSize: 14, height: 46 },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Employee ID of Member *
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              name="member_id"
              placeholder="Type here anything"
              value={item.member_id}
              onChange={(data) => handleMemberChange(index, data)}
              InputProps={{
                style: { fontSize: 14, height: 46 },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              Name of Member
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              name="member_name"
              placeholder="Type here anything"
              value={item.member_name}
              onChange={(data) => handleMemberChange(index, data)}
              InputProps={{
                style: { fontSize: 14, height: 46 },
              }}
            />
          </Grid>
        </Grid>
      ))}

      <button
        ref={props.innerRef}
        style={{ display: 'none' }}
        onClick={() => console.log('ok')}
      >
        Submit
      </button>
    </Grid>
  )
}

import React, { useState } from 'react'

import { InitialReport } from '@services/penelitian/initialReport/types'

// MUI Components
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface Props {
  innerRef: any
}

interface Payload extends InitialReport {
  partner_name: string
  partner_address: string
}

export default function Step1(props: Props) {
  const initForm: Payload = {
    academic_year: '',
    type: '',
    research_title: '',
    schema: '',
    status: '',
    partner_name: '',
    partner_address: '',
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

  const sampleData = [
    { id: 'A', name: 'A' },
    { id: 'B', name: 'B' },
    { id: 'C', name: 'C' },
  ]

  return (
    <Grid container columnSpacing={3} rowSpacing={4}>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Type of Research
        </Typography>
        <FormControl fullWidth>
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            name="type"
            value={form.type}
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
          {/* {error.name ? (
                  <FormHelperText>{error.name}</FormHelperText>
                ) : (
                  ''
                )} */}
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Academic Year
        </Typography>
        <FormControl fullWidth>
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            name="academic_year"
            value={form.academic_year}
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
          {/* {error.name ? (
                  <FormHelperText>{error.name}</FormHelperText>
                ) : (
                  ''
                )} */}
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Research Title
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          name="research_title"
          placeholder="Type here anything"
          value={form.research_title}
          onChange={handleChange}
          // error={!!error.leader}
          // helperText={error.leader}
          InputProps={{
            style: { fontSize: 14 },
          }}
          multiline
          rows={3}
        />
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Scheme
        </Typography>
        <FormControl fullWidth>
          <Select
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            name="schema"
            value={form.schema}
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
          {/* {error.name ? (
                  <FormHelperText>{error.name}</FormHelperText>
                ) : (
                  ''
                )} */}
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Partner&apos;s Name
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          name="partner_name"
          placeholder="Type here anything"
          value={form.partner_name}
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
          Partner&apos;s Address
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          name="partner_address"
          placeholder="Type here anything"
          value={form.partner_address}
          onChange={handleChange}
          // error={!!error.leader}
          // helperText={error.leader}
          InputProps={{
            style: { fontSize: 14 },
          }}
          multiline
          rows={3}
        />
      </Grid>
      <button
        ref={props.innerRef}
        style={{ display: 'none' }}
        onClick={() => console.log('ok2')}
      >
        Submit
      </button>
    </Grid>
  )
}

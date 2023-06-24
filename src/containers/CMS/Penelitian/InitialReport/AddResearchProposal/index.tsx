import React, { useRef, useContext, useState } from 'react'
import { AppContext } from '@providers/ContextApiProvider'

import { useQuery } from 'react-query'
import { InitialReport } from '@services/penelitian/initialReport/types'
import service from '@services/penelitian/initialReport'

// MUI Components
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'

// MUI Icons
import SearchIcon from '@mui/icons-material/Search'

import { useTheme } from '@mui/material/styles'

// Custom Components
import Button from '@components/Button'
import Table from '@components/Table'
import { Box } from '@mui/material'

// Private Components
import { Step1, Step2, Step3 } from './components'

export default function AddResearchProposal() {
  const { setSnackbar, setLoading } = useContext(AppContext)

  const [activeStep, setActiveStep] = useState(0)

  const formRef = useRef<HTMLDivElement>(null)

  const handleNext = () => {
    if (formRef.current) {
      formRef.current.click()
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const steps = [
    'Research Information',
    'Research Members',
    'Research Document',
  ]

  function getStepContent(step: any) {
    switch (step) {
      case 0:
        return <Step1 innerRef={formRef} />
      case 1:
        return <Step2 innerRef={formRef} />
      case 2:
        return <Step3 innerRef={formRef} />
      default:
        return 'Unkwoinw'
    }
  }

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight={500} sx={{ marginBottom: 5 }}>
        Add Research Proposals
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}

          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      {getStepContent(activeStep)}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 7.5 }}>
        <Button
          label="Back"
          color="primary"
          onClick={handleBack}
          disabled={activeStep === 0}
        />
        <Box width={16}></Box>
        <Button
          label={activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          color="primary"
          onClick={handleNext}
          disabled={activeStep === steps.length}
        />
      </Box>
    </Paper>
  )
}

import React from 'react'
import Image from 'next/image'

// MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// MUI Icons
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

// Custom Components
import Button from '@components/Button'

// Assets
import { ILLoginBgBottom } from '@utama/assets/ilustrations'
import { ICSend } from '@utama/assets'

// Private components
import Header from './components/Header'

export default function PageSignIn() {
  const [IsEmailVerified, setIsEmailVerified] = React.useState(0)

  const formInput = () => {
    if (!IsEmailVerified) {
      return (
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Email
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="email"
            placeholder="Type here anything"
            required
            type="email"
            InputProps={{
              style: { fontSize: 14 },
            }}
          />
        </Grid>
      )
    }
    if (IsEmailVerified === 1) {
      return (
        <>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Choose new password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              name="password"
              placeholder="Type here anything"
              required
              type="password"
              InputProps={{
                style: { fontSize: 14 },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Confirm password
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              name="confirm_password"
              placeholder="Type here anything"
              required
              type="password"
              InputProps={{
                style: { fontSize: 14 },
              }}
            />
          </Grid>
        </>
      )
    }

    return (
      <>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Image src={ICSend} alt="Icon Send" width={165} height={165}></Image>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight={500} sx={{ fontSize: 30 }}>
            Now, check your email.
          </Typography>
        </Grid>
      </>
    )
  }

  return (
    <Box sx={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Header />

      <Box sx={{ position: 'relative' }}>
        <Box
          display="flex"
          justifyContent="center"
          position="absolute"
          zIndex={2}
          left={0}
          right={0}
          marginTop={14.25}
        >
          <Card
            sx={{
              px: 9.5,
              py: 5,
              borderRadius: 2.5,
              boxShadow: '0px 15px 38px rgba(0, 0, 0, 0.11)',
            }}
          >
            <form autoComplete="off">
              <Grid container rowSpacing={3} sx={{ maxWidth: '407px' }}>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    sx={{ fontSize: 30, textAlign: 'center' }}
                  >
                    {IsEmailVerified < 2
                      ? 'Forgot your password?'
                      : 'Recovery Link Sent!'}
                  </Typography>
                </Grid>
                {formInput()}
                {IsEmailVerified < 2 && (
                  <Grid item xs={12}>
                    <Button
                      fullwidth
                      label={
                        IsEmailVerified === 0
                          ? 'Send me the link'
                          : 'Create new password'
                      }
                      onClick={() => setIsEmailVerified(IsEmailVerified + 1)}
                    />
                  </Grid>
                )}
                {IsEmailVerified !== 1 && (
                  <Grid item xs={12} sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="body2"
                      fontWeight={300}
                      sx={{
                        fontSize: '12px',
                        color: '#4046FD',
                      }}
                    >
                      or Sign In with Google
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </form>
          </Card>
        </Box>

        <Box className="next-image-container" pt={45}>
          <Image
            src={ILLoginBgBottom}
            alt="Illustration login bg bottom"
            fill
            className="image"
          ></Image>
        </Box>
      </Box>
    </Box>
  )
}

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

// Private components
import Header from './components/Header'

export default function PageSignIn() {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault()
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
                    Let’s go!
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    Full Name
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="fullname"
                    placeholder="Type here anything"
                    required
                    InputProps={{
                      style: { fontSize: 14 },
                    }}
                  />
                </Grid>
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
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Choose Password
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    name="password"
                    placeholder="Password"
                    required
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      style: { fontSize: 14 },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
                          >
                            {showPassword ? (
                              <VisibilityOff fontSize="small" />
                            ) : (
                              <Visibility fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullwidth
                    label="Sign Up & Join with us"
                    onClick={() => {}}
                  />
                </Grid>
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

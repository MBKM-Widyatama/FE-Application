import { useState, useEffect, useContext } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

// import { AppContext } from '@contexts/index'
// import { isUserAuthenticated } from '@utils/auth'

// Mui Components
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import Tooltip from '@mui/material/Tooltip'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton/'
import ListItemText from '@mui/material/ListItemText'

// Mui Icon
import LogoutIcon from '@mui/icons-material/Logout'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

// import { listMenu } from './listMenu'

// import Image from 'next/image'
import { ICBimaUtama } from '@utama/assets'
import { useMainStore } from '@utama/utils/stores/main'
import { Drawer, DrawerHeader } from './styles'

export default function MainLayout(props: React.PropsWithChildren) {
  const router = useRouter()

  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  const { menuItems } = useMainStore()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {isDrawerOpen && (
        <IconButton
          onClick={() => setIsDrawerOpen(false)}
          sx={{
            position: 'fixed',
            zIndex: 9991,
            marginTop: 4,
            marginLeft: 27,
            border: '1px solid #dddddd',
            backgroundColor: 'white',
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      )}
      <Drawer variant="permanent" open={isDrawerOpen}>
        <DrawerHeader>
          {isDrawerOpen ? (
            <>
              <Image
                src="/illustrations/leapfactor-logo-bg.png"
                alt="Logo Leapfactor"
                width={40}
                height={40}
                priority
              />
              <Typography variant="h5" fontWeight={600} sx={{ marginLeft: 1 }}>
                Leapfactor
              </Typography>
            </>
          ) : (
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              sx={{ marginTop: -2 }}
            >
              <Image
                src="/icons/burger-icon.png"
                alt="Leapfactor Logo"
                width={24}
                height={24}
              />
            </IconButton>
          )}
        </DrawerHeader>
        <List
          sx={{
            // selected states
            '&& .Mui-selected, && .Mui-selected:hover': {
              backgroundColor: '#1d68b810',
              borderLeft: isDrawerOpen
                ? '5px solid #1d68b8'
                : '3px solid #1d68b8',
              paddingLeft: isDrawerOpen ? 1.3 : 1.75,
            },

            // hover states
            '& .MuiListItemButton-root:hover': {
              backgroundColor: '#1d68b805',
            },

            paddingTop: isDrawerOpen ? 3 : 0,
          }}
        >
          {isDrawerOpen && (
            <Typography
              variant="body1"
              sx={{ paddingLeft: 3, marginBottom: 2 }}
            >
              Main Menu
            </Typography>
          )}
          {menuItems.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.path}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Tooltip title={item.title} placement="right">
                <ListItemButton
                  selected={router.pathname === item.path}
                  onClick={() => router.push(item.path)}
                >
                  <ListItemIcon
                    sx={{
                      padding: isDrawerOpen
                        ? '8px 0 8px 24px'
                        : '4px 0 4px 8px',
                    }}
                  >
                    <Image
                      src={
                        router.pathname === item.path
                          ? item.iconActive
                          : item.icon
                      }
                      alt={item.title}
                      width={24}
                      height={24}
                    />
                  </ListItemIcon>
                  {isDrawerOpen && (
                    <ListItemText
                      primary={
                        <Typography
                          style={{
                            color:
                              router.pathname === item.path
                                ? '#1d68b8'
                                : '#8097B3',
                            fontWeight:
                              router.pathname === item.path ? 600 : 400,
                          }}
                        >
                          {item.title}
                        </Typography>
                      }
                    />
                  )}
                </ListItemButton>
              </Tooltip>
            </Link>
          ))}
          <Tooltip title="Logout" placement="right">
            <ListItemButton
            // onClick={() => {
            //   setOpenDialog(true)
            // }}
            >
              <ListItemIcon
                sx={{
                  padding: isDrawerOpen ? '8px 0 8px 24px' : '4px 0 4px 8px',
                }}
              >
                <Image
                  src="/icons/logout-icon.png"
                  alt="Logout"
                  width={24}
                  height={24}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: '#8097B3',
                    }}
                  >
                    Logout
                  </Typography>
                }
              />
            </ListItemButton>
          </Tooltip>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          overflowX: 'hidden',
          backgroundColor: '#F5F7FB',
          minHeight: '100vh',
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}

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
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton/'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'

// Mui Icon
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { ICBimaUtama } from '@utama/assets/icons'
import { listMenu, Menu } from './listMenu'
import { Drawer, DrawerHeader } from './styles'

// assets
export default function MainLayout(props: React.PropsWithChildren) {
  const router = useRouter()

  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  const MenuItem = ({ item }: any) => {
    const [open, setOpen] = useState(true)

    return (
      <>
        <Tooltip title={item.label} placement="right">
          <ListItemButton
            selected={router.asPath === item.path}
            // eslint-disable-next-line no-confusing-arrow
            onClick={() =>
              item.children ? setOpen(!open) : router.push(item.path)
            }
          >
            {item.icon && (
              <ListItemIcon
                sx={{
                  padding: isDrawerOpen ? '8px 0 8px 24px' : '4px 0 4px 8px',
                }}
              >
                <Image
                  src={
                    router.asPath === item.path ? item.iconActive : item.icon
                  }
                  alt={item.label}
                  width={24}
                  height={24}
                />
              </ListItemIcon>
            )}
            {isDrawerOpen && (
              <ListItemText
                primary={
                  <Typography
                    style={{
                      color: router.asPath === item.path ? 'white' : '#828282',
                      fontWeight: router.asPath === item.path ? 600 : 400,
                    }}
                  >
                    {item.label}
                  </Typography>
                }
              />
            )}

            {item.children && <>{open ? <ExpandLess /> : <ExpandMore />}</>}
          </ListItemButton>
        </Tooltip>
        {isDrawerOpen && item.children && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 7 }}>
              {item.children.map((child: Menu, index: number) => (
                <MenuItem key={index} item={child} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    )
  }

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
            marginLeft: 39,
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
                src={ICBimaUtama}
                alt="Logo Abimas"
                width={28}
                height={28}
                priority
              />
              <Typography variant="h5" fontWeight={600} sx={{ marginLeft: 1 }}>
                SIMLITAMAS
              </Typography>
            </>
          ) : (
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              sx={{ marginTop: -2 }}
            >
              <MenuRoundedIcon />
            </IconButton>
          )}
        </DrawerHeader>
        <List
          sx={{
            // selected states
            '&& .Mui-selected, && .Mui-selected:hover': {
              background:
                'linear-gradient(89.11deg, #2C5BF7 1.73%, #40B4FD 98.05%);',
              borderRadius: 2,
            },

            // hover states
            '& .MuiListItemButton-root:hover': {
              backgroundColor: '#1d68b805',
            },

            paddingTop: isDrawerOpen ? 3 : 0,
            px: isDrawerOpen ? 2 : 0,
          }}
        >
          {listMenu.map((item: any, index: number) => (
            <MenuItem item={item} key={index} />
          ))}
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

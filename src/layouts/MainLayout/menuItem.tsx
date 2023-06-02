// import React, { useState } from 'react'
// import ListSubheader from '@mui/material/ListSubheader'
// import MenuItem from '@mui/material/MenuItem'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import Collapse from '@mui/material/Collapse'
// // import InboxIcon from '@mui/icons-material/MoveToInbox'
// // import DraftsIcon from '@mui/icons-material/Drafts'
// // import SendIcon from '@mui/icons-material/Send'
// import ExpandLessIcon from '@mui/icons-material/ExpandLess'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// // import StarBorder from '@mui/icons-material/StarBorder'

// interface Menu {
//   label: string
//   path: string
//   icon: React.ReactElement
// }

// const SingleLevel = (props: Menu) => (
//   <ListItem>
//     <ListItemIcon>{props.icon}</ListItemIcon>
//     <ListItemText primary={props.label} />
//   </ListItem>
// )

// const MultiLevel = ({ item }: any) => {
//   const { items: children } = item
//   const [open, setOpen] = useState(false)

//   const handleClick = () => {
//     setOpen((prev) => !prev)
//   }

//   return (
//     <React.Fragment>
//       <ListItem onClick={handleClick}>
//         <ListItemIcon>{item.icon}</ListItemIcon>
//         <ListItemText primary={item.title} />
//         {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           {children.map((child, key) => (
//             <MenuItem key={key} item={child} />
//           ))}
//         </List>
//       </Collapse>
//     </React.Fragment>
//   )
// }

// function hasChildren(item: any) {
//   const { items: children } = item

//   if (children === undefined) {
//     return false
//   }

//   if (children.constructor !== Array) {
//     return false
//   }

//   if (children.length === 0) {
//     return false
//   }

//   return true
// }

// const NewMenuItem = ({ item }) => {
//   const Component = hasChildren(item) ? MultiLevel : SingleLevel
//   return <Component item={item} />
// }

import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from '../utils/theme';

import logo from '../assets/images/logo.jpeg';
import logopd from '../assets/images/logo_pd.svg';
import { Drawer } from '@mui/material';
import { Css } from '@mui/icons-material';

const MenuVisible = () => css`
  visibility: visible;
  width: 100%;
  height: auto;
  transform: translate3d(0vw, 0, 0);
  transition: all 200ms ease-in-out;
`;

const MenuInvisible = () => css`
  visibility: hidden;
  width: 0;
  height: 0;
  transform: translate3d(-100vw, 0, 0);
  transition: all 200ms ease-in-out;
`;

const BoxMobile = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: ${theme.colors.lightBlue};
    height: 100%;
    width: 100%;
    padding: 0 2rem;
    margin-left: 1rem;

    .LinkDecoration {
      text-decoration: none;
    }

    .icon {
      align-self: flex-start;
      padding-top: 1rem;
    }
  `}
`;

const Links = styled.p`
  color: ${theme.colors.darkBlue};
  font-size: ${theme.sizes.size1};
  font-weight: bold;
  width: auto;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    transform: scale(1.2);
    transition: all 200ms ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0.2rem;
    top: 100%;
    left: 50%;
    background-color: ${theme.colors.darkBlue};
  }

  &:hover::after {
    transition: all 200ms ease-in-out;
    width: 100%;
    left: 0%;
    position: absolute;
  }
`;

const Row = styled.div`
  flex-direction: Row;
  display: flex;
  align-items: center;
`;

const Images = styled.img`
  width: 4rem;
  height: 4rem;
`;

const IconContainer = styled.div`
  cursor: pointer;
  width: auto;
  height: auto;
  padding: 1rem;

  .icon {
    :hover {
      transform: scale(1.2);
      transition: 200ms all ease-in-out;
      z-index: 5;
    }
  }
`;

const MyDrawer = styled(Drawer)(() => css``);

export const TopbarMobile = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <IconContainer>
        {visible === true ? null : (
          <Icon
            icon="eva:menu-outline"
            width={40}
            height={40}
            className="icon"
            onClick={() => setVisible(true)}
            color={theme.colors.darkBlue}
          />
        )}
      </IconContainer>
      <MyDrawer anchor="left" open={visible}>
        <BoxMobile>
          <Icon
            icon="ep:close"
            width={40}
            height={40}
            className="icon"
            onClick={() => setVisible(false)}
            color={theme.colors.darkBlue}
          />
          {/* <Row>
            <Images src={logo} />
            <Images src={logopd} />
          </Row> */}
          <Row>
            <Icon
              icon="ant-design:home-outlined"
              width={20}
              height={20}
              color={theme.colors.darkBlue}
            />
            <Link
              to="/"
              className="LinkDecoration"
              onClick={() => setVisible(false)}
              role="button"
            >
              <Links>HOME</Links>
            </Link>
          </Row>
          <Row>
            <Icon
              icon="ant-design:search-outlined"
              width={20}
              height={20}
              color={theme.colors.darkBlue}
            />

            <Link
              to="/checkProtocol"
              className="LinkDecoration"
              onClick={() => setVisible(false)}
              role="button"
            >
              <Links>PROTOCOLO</Links>
            </Link>
          </Row>
          <Links>HOME</Links>
          <Links>SOBRE O PROJETO</Links>
        </BoxMobile>
      </MyDrawer>
    </>
  );
};

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export const TopbarMobile = () => {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

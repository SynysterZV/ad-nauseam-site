import React from 'react';
import clsx from 'clsx';
import style from '../styles/utils.module.css'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code'
import GitIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />
}

const useStyles = makeStyles({
  list: {
    width: 250,
    background: 'linear-gradient(to bottom, #232526, #414345)'

  },
  fullList: {
    width: 'auto',
  },
  icon:{
    color: 'white',
    '&:hover': {
        color: 'lightgrey'
    }
}

});



export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={style.list} >
          <ListItemLink href="/" key="Home">
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary="Home" />
          </ListItemLink>
          <ListItemLink href="/about" key="About">
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary="About" />
          </ListItemLink>
          <ListItemLink href="/projects" key="Projects">
              <ListItemIcon><CodeIcon /></ListItemIcon>
              <ListItemText primary="Projects" />
          </ListItemLink>
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key='top'>
          <Button className={style.icon} onClick={toggleDrawer('top', true)} >
              <CodeIcon/>
          </Button>
          <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
            {list('top')}
          </Drawer>
          <Button className={style.mediaIcon} href="https://github.com/ad-nauseam">
              <GitIcon />
          </Button>
          <Button className={style.mediaIcon} href="https://twitter.com/synzv1">
              <TwitterIcon />
          </Button>
        </React.Fragment>
    </div>
  );
}

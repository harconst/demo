const menuWidth = 300;

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: 0,
    zIndex: 1,
    overflow: 'hidden'
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  content: {
    width: '100%',
    padding: 0,
    flexGrow: 1,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: '100%',
    overflowY: 'auto',
    boxSizing: 'border-box',
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  'content-left': {
    [theme.breakpoints.up('md')]: {
      marginLeft: -menuWidth
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  card: {
    margin: 16
  },
  centered: {
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    alignItems: 'center'
  },
  'back-fab': {
    position: 'fixed',
    bottom: 74,
    left: 16,
    zIndex: 1200
  }
});

export default styles;

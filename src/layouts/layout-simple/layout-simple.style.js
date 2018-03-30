const styles = theme => ({
  'layout-simple-wrapper': {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'row'
  },
  'layout-simple-main': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  'layout-simple-content-wrapper': {
    flex: '1 1 100%',
    boxSizing: 'border-box',
    flexDirection: 'column-reverse',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden'
  },
  'layout-simple-content': {
    height: '100%',
    margin: 0,
    minHeight: '100%',
    minWidth: '100%',
    width: '100%',
    overflowY: 'auto'
  },
  avatar: {
    marginRight: 5
  }
});

export default styles;

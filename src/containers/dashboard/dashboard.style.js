const styles = theme => ({
  'dashboard-page-wrapper': {
    padding: 16,
    minHeight: '100%',
    boxSizing: 'border-box'
  },
  widget: {
    flex: '1 1 100%',
    display: 'flex',
    flexDirection: 'column'
  },
  'widget-content': {
    flex: '1 1 100%',
    display: 'flex',
    minHeight: 300,
    justifyContent: 'center'
  },
  'table-cell': {
    padding: '4px 24px 4px 24px'
  }
});

export default styles;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';

import { fetchUsers, handleRequestSort } from '../../actions/user.actions';

import styles from './dashboard.style';

const columnData = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'posts', numeric: true, disablePadding: false, label: 'Posts' },
  { id: 'ratio', numeric: true, disablePadding: false, label: 'Comments/Post' }
];

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { classes, userState } = this.props;
    const { users, isFetching, order, orderBy } = userState;

    return (
      <div className={classes['dashboard-page-wrapper']}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={0}>
            <Grid
              key={1}
              item
              xs={12}
              sm={12}
              md={7}
              className={classes.widget}
            >
              <Paper className={classes['widget-content']}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {columnData.map(column => {
                        return (
                          <TableCell
                            className={classes['table-cell']}
                            key={column.id}
                            numeric={column.numeric}
                            padding={column.disablePadding ? 'none' : 'default'}
                            sortDirection={
                              orderBy === column.id ? order : false
                            }
                          >
                            <Tooltip
                              title="Sort"
                              placement={
                                column.numeric ? 'bottom-end' : 'bottom-start'
                              }
                              enterDelay={300}
                            >
                              <TableSortLabel
                                active={orderBy === column.id}
                                direction={order}
                                onClick={() =>
                                  this.props.handleRequestSort(column.id)
                                }
                              >
                                {column.label}
                              </TableSortLabel>
                            </Tooltip>
                          </TableCell>
                        );
                      }, this)}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map(user => (
                      <TableRow key={user.id} hover>
                        <TableCell className={classes['table-cell']}>
                          {user.name}
                        </TableCell>
                        <TableCell className={classes['table-cell']} numeric>
                          {user.posts}
                        </TableCell>
                        <TableCell className={classes['table-cell']} numeric>
                          {user.ratio}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  handleRequestSort: PropTypes.func.isRequired,
  userState: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    userState: state.userState
  };
}

export default compose(
  // withRouter,
  // withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    fetchUsers,
    handleRequestSort
  })
)(Dashboard);

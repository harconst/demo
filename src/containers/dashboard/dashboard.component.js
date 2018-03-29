import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from 'material-ui/Table';

import LayoutLoader from '../../layouts/components/layout-loader/layout-loader.component';

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
                {!isFetching &&
                  users.length && (
                  <Table>
                    <TableHead>
                      <TableRow>
                        {columnData.map(column => (
                          <TableCell
                            className={classes['table-cell']}
                            key={column.id}
                            numeric={column.numeric}
                            padding={
                              column.disablePadding ? 'none' : 'default'
                            }
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
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map(user => (
                        <TableRow key={user.id} hover>
                          <TableCell className={classes['table-cell']}>
                            <Link to={`/details/${user.id}`}>
                              {user.name}
                            </Link>
                          </TableCell>
                          <TableCell
                            className={classes['table-cell']}
                            numeric
                          >
                            {user.posts}
                          </TableCell>
                          <TableCell
                            className={classes['table-cell']}
                            numeric
                          >
                            {user.ratio}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
                {isFetching && <LayoutLoader />}
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
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    fetchUsers,
    handleRequestSort
  })
)(Dashboard);

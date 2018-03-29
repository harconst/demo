import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import Drawer from 'material-ui/Drawer';
import withWidth from 'material-ui/utils/withWidth';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';


import themeStyles from './posts-list.style';

const PostsList = (props) => {
  const {
    classes,
    selectedPost,
    list,
    width,
    onSelect
  } = props;

  return (
    <Drawer
      variant="persistent"
      open={(width !== 'sm' && width !== 'xs') || selectedPost === null}
      classes={{
        paper: width === 'sm' || width === 'xs' ? classes.mobileMenuPaper : classes.desktopMenuPaper,
        docked: classes.fullHeight
      }}
      anchor="left"
      ModalProps={{
        keepMounted: true
      }}
    >
      <div className={classNames(classes.drawerInner, 'util-hide-scrollbars')}>
        <List component="nav" className={classes.list}>
          {list.map(post => ([
            <ListItem
              disableGutters
              title={post.title}
              key={`${post.id}a`}
              classes={{
                root: classNames(
                  classes['posts-list__item'],
                  post === selectedPost ? classes['posts-list__item--active'] : ''
                )
              }}
              onClick={onSelect(post)}
            >
              <ListItemText
                primary={post.title}
                secondary={post.body}
                classes={{
                  primary: classes['posts-list__item__text'],
                  secondary: classes['posts-list__item__text']
                }}
              />
            </ListItem>,
            <Divider key={`${post.id}b`} />
          ]))}
        </List>
      </div>
    </Drawer>
  );
};

PostsList.defaultProps = {
  selectedPost: null
};

PostsList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedPost: PropTypes.shape({}),
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelect: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(PostsList);

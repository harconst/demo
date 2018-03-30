import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import classNames from 'classnames';

import Drawer from 'material-ui/Drawer';
import withWidth from 'material-ui/utils/withWidth';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import PhoneIcon from 'material-ui-icons/Phone';
import EmailIcon from 'material-ui-icons/Email';
import LocationIcon from 'material-ui-icons/LocationOn';
import FaceIcon from 'material-ui-icons/Face';


import themeStyles from './posts-list.style';

const PostsList = (props) => {
  const {
    classes,
    selectedPost,
    list,
    user,
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
        {user &&
          <div>
            <List>
              <ListItem>
                <ListItemIcon>
                  <FaceIcon />
                </ListItemIcon>
                <ListItemText primary={user[0].name} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={user[0].email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary={user[0].phone} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationIcon />
                </ListItemIcon>
                <ListItemText primary={user[0].address.city} />
              </ListItem>
            </List>
            <Divider />
          </div>
        }
        <List component="nav" className={classes.list}>
          {list && list.map(post => ([
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
  selectedPost: null,
  list: null,
  user: null
};

PostsList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  selectedPost: PropTypes.shape({}),
  list: PropTypes.arrayOf(PropTypes.shape({})),
  onSelect: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  user: PropTypes.arrayOf(PropTypes.shape({}))
};

export default compose(withWidth(), withStyles(themeStyles, { withTheme: true }))(PostsList);

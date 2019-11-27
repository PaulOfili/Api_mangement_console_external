import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as alertActions from '../../store/actions';

const IOSSwitch = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '& + $track': {
            backgroundColor: '#D5D7DB',
            opacity: 1,
            border: 'none',
        },
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  function CustomizedSwitches({ liveKeys, showPreview }){
    // const [toggle, setState] = React.useState(false);

    const handleChange = event => {
        // setState(event.target.checked);
        showPreview()
      };

    return (
        <Typography component="div" >
            <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Sandbox</Grid>
            <Grid item>
                <IOSSwitch
                    checked={!!(liveKeys && liveKeys.clientId !== '')}
                    disabled={!!(liveKeys && liveKeys.clientId !== '')}
                    onChange={handleChange}
                    value=""
                />
            </Grid>
            <Grid item>Toggle to Go-Live</Grid>
            </Grid>
        </Typography>
    );
  }

const mapStateToProps = ({ credentials }) => {
  return {
    liveKeys: credentials.live_credentials.data
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    showPreview: alertActions.showPreview
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedSwitches)
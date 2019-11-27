import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import querystring from 'query-string';
import Header from '../components/Header';
import AppContext from '../../AppContext';
import systemConfig from '../../config/system';
import Toast from "../../components/Alerts/Toast";
import { accountLogin, logout } from '../../store/actions/user';

const styles = theme => ({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    content: {
        position: 'relative',
        display: 'flex',
        overflow: 'auto',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex: 2
    }
});

const dashboardRoutes = [];

class Layout extends React.Component {

    componentDidMount = () => {
        const { accountLogin, logout } = this.props;
        let hash;
        let query;
        try {
          hash = this.props.location.hash;
          query = this.props.location.search
        } catch (err) {
          if (process.env.NODE_ENV !== 'production') {
            /* eslint-disable no-console */
            console.error(err)
            /* eslint-enable no-console */
          }
        }
        if(hash){
          const response = querystring.parse(hash.substr(1))
          if (response.access_token) {
            accountLogin(response.access_token);
          } 
        
        }
        if(query){
          const parsed = querystring.parse(query);
          if(parsed.message === 'Logout successful'){
            logout()
          }
        }
    };
    
    render() {
        const {children, userData } = this.props;
        return (<AppContext.Consumer>
            {({routes}) => (
                <div>
                    {
                        userData && userData.client_id && <Redirect to="/overview"/>
                    }
                    <Header
                        color="dark"
                        routes={dashboardRoutes}
                        brand={systemConfig.imageBaseUrl}
                        fixed
                    />
                    {
                        renderRoutes(routes)
                    }
                    {children}
                    <Toast />
                </div>
            )}
        </AppContext.Consumer>)
    };
}


const mapStateToProps = (state) => {
    return {
        state: state,
        isLoggedIn: state.user.auth.isLoggedIn,
        isLoading: state.user.auth.loading,
        userData: state.user.auth.userData
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        accountLogin: accountLogin,
        logout: logout
    }, dispatch);
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout)));

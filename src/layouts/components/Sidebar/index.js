import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core';
import { Link }  from 'react-router-dom';
import styles from './styles';
// import logo from '../../../assets/images/interswitch_white.png';
import logo from '../../../assets/images/interswitch_black.svg';
import Select from '../../../components/Select/Select';
import * as alertActions from '../../../store/actions';
import { Button, Icon } from 'antd';
import {withRouter} from 'react-router-dom';

var DOC_URL = process.env.REACT_APP_DOC_URL;

if(process.env.NODE_ENV !== 'development'){
    DOC_URL = window._env_.REACT_APP_DOC_URL;
}

function Sidebar({ classes, project, projects, showCreate, location }){

    const [openList, setOpenList] = useState(false);
    const currentPageArray = location.pathname.split('/');
    const currentPage = currentPageArray[currentPageArray.length - 1];
    const toggleOpenList = () => {
        setOpenList(!openList);
    };
    return (
        <nav>
            <div className={classes.flex}>
                <div className={`${classes.aside} ${classes.jss405} ${classes.borderRight} ${classes.asideBg}`}>
                    <div className={classes.contentWrapper}>
                        <div className={classes.brand}>
                            <Link className={classes.brandLink} to="/">
                                <img src={logo}  className={classes.brandLogo} alt='Logo'/>
                            </Link>
                        </div>
                        <ul className={classes.sidePaths}>
                            <li className={`${classes.menuitem} ${currentPage === 'overview' ? classes.active : '' }`}>
                                <Link to='/overview' className={classes.menuitemchild}>
                                    <div className={classes.menuitemicon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.95712 8.4151L11.4786 3.81865C11.7987 3.62303 12.2014 3.62303 12.5215 3.81865L20.0429 8.4151C20.6374 8.77841 21 9.42493 21 10.1217V19.0001C21 20.1046 20.1046 21.0001 19 21.0001L5 21.0001C3.89543 21.0001 3 20.1046 3 19.0001L3.00002 10.1217C3.00002 9.42493 3.36261 8.77841 3.95712 8.4151ZM10 13C9.44773 13 9.00002 13.4477 9.00002 14V17C9.00002 17.5523 9.44773 18 10 18H14C14.5523 18 15 17.5523 15 17V14C15 13.4477 14.5523 13 14 13H10Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <div>
                                        Overview
                                    </div> 
                                </Link>
                            </li>
                            <li className={classes.menulabel}>Apps</li>
                            <li data-test="appsList" className={classes.menuitem}>
                                <Select classes={classes} openList={openList} toggleOpenList={toggleOpenList} projects={projects}/>  
                            </li>

                            <li className={`${classes.menuitem} ${currentPage === 'credentials' ? classes.active : '' }`}>
                                {
                                    project && project.id ?
                                    <Link to={`/apps/${project.id}/credentials`} className={classes.menuitemchild}>
                                        <div className={classes.menuitemicon}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3" d="M18.6225 9.75H18.75C19.9926 9.75 21 10.7574 21 12C21 13.2426 19.9926 14.25 18.75 14.25L18.6855 14.25C18.4912 14.2508 18.3159 14.3669 18.2394 14.5454C18.1557 14.7351 18.1943 14.9481 18.3278 15.0847L18.3725 15.1294C18.795 15.5514 19.0324 16.1241 19.0324 16.7213C19.0324 17.3184 18.795 17.8911 18.3731 18.3125C17.9511 18.735 17.3784 18.9724 16.7812 18.9724C16.1841 18.9724 15.6114 18.735 15.1897 18.3128L15.1506 18.2736C15.0081 18.1343 14.7951 18.0957 14.6054 18.1794C14.4269 18.2559 14.3108 18.4312 14.31 18.6225V18.75C14.31 19.9926 13.3026 21 12.06 21C10.8174 21 9.81 19.9926 9.81 18.75C9.80552 18.4999 9.67899 18.323 9.44718 18.2361C9.26485 18.1557 9.05191 18.1943 8.91533 18.3278L8.87062 18.3725C8.4486 18.795 7.87592 19.0324 7.27875 19.0324C6.68158 19.0324 6.1089 18.795 5.68747 18.3731C5.26497 17.9511 5.02757 17.3784 5.02757 16.7812C5.02757 16.1841 5.26497 15.6114 5.68717 15.1897L5.72635 15.1506C5.86571 15.0081 5.90432 14.7951 5.82065 14.6054C5.7441 14.4269 5.56881 14.3108 5.3775 14.31H5.25C4.00736 14.31 3 13.3026 3 12.06C3 10.8174 4.00736 9.81 5.25 9.81C5.50008 9.80552 5.677 9.67899 5.76385 9.44718C5.84432 9.26485 5.80571 9.05191 5.67217 8.91533L5.62746 8.87062C5.20497 8.4486 4.96757 7.87592 4.96757 7.27875C4.96757 6.68158 5.20497 6.1089 5.62687 5.68747C6.0489 5.26497 6.62158 5.02757 7.21875 5.02757C7.81592 5.02757 8.3886 5.26497 8.81033 5.68717L8.84945 5.72635C8.99191 5.86571 9.20485 5.90432 9.38718 5.82385L9.49485 5.80115C9.65041 5.71689 9.74929 5.55401 9.75 5.3775V5.25C9.75 4.00736 10.7574 3 12 3C13.2426 3 14.25 4.00736 14.25 5.25L14.25 5.31451C14.2508 5.50881 14.3669 5.6841 14.5528 5.76385C14.7351 5.84432 14.9481 5.80571 15.0847 5.67217L15.1294 5.62746C15.5514 5.20497 16.1241 4.96757 16.7213 4.96757C17.3184 4.96757 17.8911 5.20497 18.3125 5.62687C18.735 6.0489 18.9724 6.62158 18.9724 7.21875C18.9724 7.81592 18.735 8.3886 18.3128 8.81033L18.2736 8.84945C18.1343 8.99191 18.0957 9.20485 18.1761 9.38718L18.1989 9.49485C18.2831 9.65041 18.446 9.74929 18.6225 9.75Z" fill="black"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <div>
                                            Credentials
                                        </div> 
                                    </Link>
                                    :
                                    <Link className={classes.menuitemchild}
                                        to={{
                                            pathname: `/overview`,
                                            state: {
                                                redirectedFrom: true
                                        }}}>
                                        <div className={classes.menuitemicon}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3" d="M18.6225 9.75H18.75C19.9926 9.75 21 10.7574 21 12C21 13.2426 19.9926 14.25 18.75 14.25L18.6855 14.25C18.4912 14.2508 18.3159 14.3669 18.2394 14.5454C18.1557 14.7351 18.1943 14.9481 18.3278 15.0847L18.3725 15.1294C18.795 15.5514 19.0324 16.1241 19.0324 16.7213C19.0324 17.3184 18.795 17.8911 18.3731 18.3125C17.9511 18.735 17.3784 18.9724 16.7812 18.9724C16.1841 18.9724 15.6114 18.735 15.1897 18.3128L15.1506 18.2736C15.0081 18.1343 14.7951 18.0957 14.6054 18.1794C14.4269 18.2559 14.3108 18.4312 14.31 18.6225V18.75C14.31 19.9926 13.3026 21 12.06 21C10.8174 21 9.81 19.9926 9.81 18.75C9.80552 18.4999 9.67899 18.323 9.44718 18.2361C9.26485 18.1557 9.05191 18.1943 8.91533 18.3278L8.87062 18.3725C8.4486 18.795 7.87592 19.0324 7.27875 19.0324C6.68158 19.0324 6.1089 18.795 5.68747 18.3731C5.26497 17.9511 5.02757 17.3784 5.02757 16.7812C5.02757 16.1841 5.26497 15.6114 5.68717 15.1897L5.72635 15.1506C5.86571 15.0081 5.90432 14.7951 5.82065 14.6054C5.7441 14.4269 5.56881 14.3108 5.3775 14.31H5.25C4.00736 14.31 3 13.3026 3 12.06C3 10.8174 4.00736 9.81 5.25 9.81C5.50008 9.80552 5.677 9.67899 5.76385 9.44718C5.84432 9.26485 5.80571 9.05191 5.67217 8.91533L5.62746 8.87062C5.20497 8.4486 4.96757 7.87592 4.96757 7.27875C4.96757 6.68158 5.20497 6.1089 5.62687 5.68747C6.0489 5.26497 6.62158 5.02757 7.21875 5.02757C7.81592 5.02757 8.3886 5.26497 8.81033 5.68717L8.84945 5.72635C8.99191 5.86571 9.20485 5.90432 9.38718 5.82385L9.49485 5.80115C9.65041 5.71689 9.74929 5.55401 9.75 5.3775V5.25C9.75 4.00736 10.7574 3 12 3C13.2426 3 14.25 4.00736 14.25 5.25L14.25 5.31451C14.2508 5.50881 14.3669 5.6841 14.5528 5.76385C14.7351 5.84432 14.9481 5.80571 15.0847 5.67217L15.1294 5.62746C15.5514 5.20497 16.1241 4.96757 16.7213 4.96757C17.3184 4.96757 17.8911 5.20497 18.3125 5.62687C18.735 6.0489 18.9724 6.62158 18.9724 7.21875C18.9724 7.81592 18.735 8.3886 18.3128 8.81033L18.2736 8.84945C18.1343 8.99191 18.0957 9.20485 18.1761 9.38718L18.1989 9.49485C18.2831 9.65041 18.446 9.74929 18.6225 9.75Z" fill="black"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <div>
                                            Credentials
                                        </div> 
                                    </Link>
                                }
                            </li>
                    
                            <li className={`${classes.menuitem} ${currentPage === 'products' ? classes.active : '' }`}>
                                {
                                    project && project.id ?
                                    <Link data-test="resources" className={classes.menuitemchild} to={`/apps/${project.id}/products`}>
                                        <div className={classes.menuitemicon}>
                                            &nbsp;
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.85714 0H9.73641C10.0911 0 10.4343 0.125684 10.7051 0.35474L15.4687 4.38394C15.8057 4.66895 16 5.08788 16 5.5292V18.0833C16 19.8739 15.9796 20 14.1429 20H1.85714C0.020448 20 0 19.8739 0 18.0833V1.91667C0 0.126125 0.020448 0 1.85714 0ZM3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9H3ZM3 13C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H6C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13H3Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <div>
                                            &nbsp;Permissions
                                        </div> 
                                    </Link>
                                    :
                                    <Link data-test="resources" className={classes.menuitemchild}
                                        to={{
                                            pathname: '/overview',
                                            state: {
                                                redirectedFrom: true
                                            }}}
                                    >
                                        <div className={classes.menuitemicon}>
                                            &nbsp;      
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.85714 0H9.73641C10.0911 0 10.4343 0.125684 10.7051 0.35474L15.4687 4.38394C15.8057 4.66895 16 5.08788 16 5.5292V18.0833C16 19.8739 15.9796 20 14.1429 20H1.85714C0.020448 20 0 19.8739 0 18.0833V1.91667C0 0.126125 0.020448 0 1.85714 0ZM3 9C2.44772 9 2 9.44772 2 10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9H3ZM3 13C2.44772 13 2 13.4477 2 14C2 14.5523 2.44772 15 3 15H6C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13H3Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <div>
                                            &nbsp;Permissions
                                        </div> 
                                            
                                    </Link>
                                }
                                
                            </li>

                            <li className={`${classes.menuitem} ${currentPage === 'settings' ? classes.active : '' }`}>
                                {
                                    project && project.id ?
                                    <Link id="main-menu-security" className={classes.menuitemchild} to={`/apps/${project.id}/settings`}>
                                        <div className={classes.menuitemicon}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M4 4L11.6314 2.56911C11.875 2.52343 12.125 2.52343 12.3686 2.56911L20 4V13.283C20 16.2174 18.4883 18.9448 16 20.5L12.53 22.6687C12.2057 22.8714 11.7943 22.8714 11.47 22.6687L8 20.5C5.51165 18.9448 4 16.2174 4 13.283V4Z" fill="black"/>
                                                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11Z" fill="black"/>
                                                <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M7.00036 16.4995C7.2157 13.5166 9.36773 12 11.9907 12C14.6507 12 16.836 13.4332 16.9988 16.5C17.0053 16.6222 16.9988 17 16.5815 17C14.5228 17 11.4637 17 7.40417 17C7.26484 17 6.98863 16.662 7.00036 16.4995Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <div>
                                            Settings
                                        </div>
                                    </Link>
                                    :
                                    <Link id="main-menu-security"
                                        className={classes.menuitemchild}
                                        to={{
                                            pathname: `/overview`,
                                            state: {
                                                redirectedFrom: true
                                            }}}
                                    >
                                            <div className={classes.menuitemicon}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M4 4L11.6314 2.56911C11.875 2.52343 12.125 2.52343 12.3686 2.56911L20 4V13.283C20 16.2174 18.4883 18.9448 16 20.5L12.53 22.6687C12.2057 22.8714 11.7943 22.8714 11.47 22.6687L8 20.5C5.51165 18.9448 4 16.2174 4 13.283V4Z" fill="black"/>
                                                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11Z" fill="black"/>
                                                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M7.00036 16.4995C7.2157 13.5166 9.36773 12 11.9907 12C14.6507 12 16.836 13.4332 16.9988 16.5C17.0053 16.6222 16.9988 17 16.5815 17C14.5228 17 11.4637 17 7.40417 17C7.26484 17 6.98863 16.662 7.00036 16.4995Z" fill="black"/>
                                                </svg>
                                            </div>
                                            <div>
                                                Settings
                                            </div>                                            
                                    </Link>
                                }
                            </li>

                            <li className={classes.menulabel}>Support</li>
                            <li className={classes.menuitem}>
                                <a id="main-menu-security" className={classes.menuitemchild} href={`${DOC_URL}`} target='_blank' rel="noopener noreferrer">
                                    <div className={classes.menuitemicon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.6855 18.7082C15.9114 17.819 18.6829 17.2496 22 17C22 16.9325 22 13.1013 22 5.50631H22C22 5.23018 21.7761 5.00633 21.5 5.00633C21.4958 5.00633 21.4916 5.00639 21.4874 5.00649C18.6582 5.07812 15.8291 5.74262 13 7C13 7.0445 13 10.7925 13 18.2439H13C13 18.52 13.2239 18.7439 13.5 18.7439C13.5636 18.7439 13.6265 18.7318 13.6855 18.7082Z" fill="black"/>
                                            <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M10.3145 18.7082C8.08861 17.819 5.31712 17.2496 2 17C2 16.9325 2 13.1013 2 5.50631H2.00002C2.00002 5.23018 2.22387 5.00633 2.5 5.00633C2.50422 5.00633 2.50844 5.00639 2.51265 5.00649C5.34177 5.07812 8.17088 5.74262 11 7C11 7.0445 11 10.7925 11 18.2439H11C11 18.52 10.7762 18.7439 10.5 18.7439C10.4365 18.7439 10.3735 18.7318 10.3145 18.7082Z" fill="black"/>
                                        </svg>
                                    </div>
                                    Documentation
                                    <svg fontSize="xsmall" className={`${classes.externalicon} ${classes.externaliconposition}`} viewBox="0 0 20 20">
                                        <path d="M7.143 0v2.857H4.286c-.79 0-1.429.64-1.429 1.429v11.428c0 .79.64 1.429 1.429 1.429h11.428c.79 0 1.429-.64 1.429-1.429v-2.857H20v4.286A2.857 2.857 0 0 1 17.143 20H2.857A2.857 2.857 0 0 1 0 17.143V2.857A2.857 2.857 0 0 1 2.857 0h4.286z"></path>
                                        <path fillRule="nonzero" d="M17.176 2.83h-4.764c-.78 0-1.412-.633-1.412-1.415C11 .634 11.632 0 12.412 0h6.176C19.368 0 20 .634 20 1.415v6.17C20 8.366 19.368 9 18.588 9c-.78 0-1.412-.634-1.412-1.415V2.83z"></path>
                                        <path fillRule="nonzero" d="M17.494.43a1.468 1.468 0 1 1 2.076 2.076L12.506 9.57a1.468 1.468 0 1 1-2.076-2.076L17.494.43z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <Button
                            className={classes.sideBarCreateProjectButton}
                            style={{fontWeight: '600', textAlign: 'left', height: '3rem', backgroundColor: 'rgba(126, 128, 133, 0.3)'}}
                            onClick={showCreate}><Icon style={{verticalAlign: 0}} type="plus"/>CREATE PROJECT
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        showCreate: alertActions.showCreate
    }, dispatch);
};

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(withRouter(connect(null, mapDispatchToProps)(Sidebar)));

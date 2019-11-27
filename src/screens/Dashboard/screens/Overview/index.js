import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import { Card } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProjectCard from '../../../../components/ProjectCard/project-card.component';
import styles from './styles';
import Banner from '../../../../components/Banner/Banner';
import ipadImage from '../../../../assets/images/ipad.svg';
import macImage from '../../../../assets/images/mac.svg';
import welcome from '../../../../assets/images/welcome.svg';
import no_project from '../../../../assets/images/no_project.svg';
import * as projectsActions from '../../../../store/actions';
import * as alertActions from '../../../../store/actions';
import { Button, Input } from 'antd';

const { Search } = Input;

const onboardingCards = [
    {   
        key: 'asjfkjsaf',
        title: 'Documentation',
        text: 'Explore all of our APIs',
        image: ipadImage
    },
    {   
        key: 'asiuuabsdf',
        title: 'Build Your First App',
        text: 'Create, test, and implement your applications',
        image: macImage
    },
]
function Overview({ classes, user, projects, getAllProjects, showCreate, location, isLoading }){

    const [search, setSearch] = useState(false);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        getAllProjects()
    }, [user, getAllProjects])

    const handleSearch = () => {
        setSearch(true);
    }

    const handleChange = (e) => {
        setSearch(true);
        setSearchText(e.target.value);
    }


    if(isLoading){
        return <CircularProgress size={40} color='inherit'/>
    }
    if(location && location.state && location.state.redirectedFrom) {
            return (
                <div className={classes.no_project_container}>
                    <div>
                        <img src={no_project} alt='No project'/>
                        <h1 className={classes.header}>Oops!!</h1>
                        <p style={{fontSize: '1rem', lineHeight: '1.5rem'}}>You need to have an app to build with our products</p>
                        <br />
                        <Button style={{fontSize: '0.875rem', height: '2.875rem', backgroundColor: '#329EFA', color: 'white', lineHeight: '1.625rem'}} onClick={showCreate}>Add New Project</Button>
                    </div>                    
                </div>
            )
        }
        
    if (projects && projects.length > 0) {
        try {
            const searchRE = new RegExp(searchText, 'i');
        if(search){
            projects = projects.filter(
                (project) => {
                    return project.description.match(searchRE) 
                        || project.name.match(searchRE)
                }
            );
        }
    
    
        }
        catch(err){
    
        }
        return (
            <div className={classes.gridview}>
                <div className={classes.gridtoolbar}>
                    <div className={`ant-row ${classes.marginr45}`}>
                        <Button className={`ant-btn ant-btn-primary ${classes.addprojectbtn}`} onClick={showCreate}>Add New Project</Button>
                    </div>
                    <div className={`${classes.bottomalign} ${classes.marginr45}`}>
                        <div className={`ant-col ant-col-16 ${classes.overviewmsg}`}>
                            <h1 className={classes.overviewmsgh1}>Hello {user.firstName} {user.lastName}</h1>
                            <p className={classes.overviewmsgp}>You can create new projects, access existing projects, test our APIs in sandbox, request API/resources for Go Live and more.</p>
                        </div>
                        <div className={`ant-col ant-col-8 ${classes.overviewsearch}`}>
                            <Search placeholder="Search by project name or description" 
                                size="large" 
                                // style={{width: '15rem'}}
                                value={searchText} 
                                onSearch={handleSearch} 
                                onChange={handleChange} 
                                enterButton />
                        </div>
                    </div>
                </div>
                <div className='project-grid'>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))
                    }
                </div>
            </div>
        )
    }
    
    return (        
        <div id='overview' className={classes.overview}>
            <h1 className={classes.header}>Overview</h1>
            <div className={classes.onboarding}>
                <div className={classes.paper}>
                    <Banner
                        location={'overview'}
                        onShowCreate={showCreate} 
                        closeable
                        title={`Welcome ${user && user.firstName}`} 
                        img={welcome}
                        bgcolor='orange'
                        text="We have APIs for everything and you are one step away from an awesome experience. Click on 'Add New Project' to get started, or browse through or APIs on Documentation below."
                    />
                </div>
            </div>
            <div className={classes.gridlist}>
                {
                    onboardingCards.map(card => (
                        <Card className={`text-white ${classes.customcard}`} key={card.key}>
                            <Card.Img src={card.image} alt="Card image" />
                            <Card.ImgOverlay className={classes.imageoverlay}>
                                <Card.Title>{card.title}</Card.Title>
                                <Card.Text>
                                    {card.text}
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
    
}



Overview.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user, projects }) => {
    return {
        user: user.auth.userData,
        projects: projects.all.data,
        isLoading: projects.all.isLoading

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAllProjects: projectsActions.getAllProjects,
        showCreate: alertActions.showCreate
    }, dispatch);
};
export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Overview)));
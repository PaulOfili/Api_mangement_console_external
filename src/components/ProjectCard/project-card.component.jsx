import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Popover } from 'antd';
import { Badge} from 'react-bootstrap';
import './card.css';

const Content = ({ id }) => (
    <div className='more-content'>
        <span style={{ cursor: 'pointer'}} className='flex-p'>
                <Link to={`/account/${id}/settings`}><p>Modify</p></Link>
        </span>
        <span style={{ cursor: 'pointer'}} className='flex-p'>
                <p>Clone</p>
        </span>
        <span style={{ cursor: 'pointer'}} className='flex-p'>
                <p>Delete</p>
        </span>
    </div>
  );

const ProjectCard = ({ project }) => (
    <Link to={`apps/${project.id}/credentials`}>
        <Card extra={
            <Popover placement="bottomRight"  content={<Content id={project.id}/>} trigger="click">
                <Icon type="more" />
            </Popover>}
        >
            <div className='card-body'>
                {/* <Link to={`apps/${project.id}/credentials`}> */}
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                {/* </Link> */}
            </div>
            <div className='card-footer'>
                <Badge className={project.clients.LIVE ? 'prod-bg' : 'sandbox-bg'}>
                    <p>{project.clients.LIVE ? 'Production' : 'Sandbox'}  </p>   
                </Badge>
                <div style={{textAlign: 'right'}}>
                    <strong>Application Date</strong>
                    <p>{project.date ? project.date : 'None'}</p>
                </div>
            </div>
        </Card>
    </Link>
)

export default ProjectCard;
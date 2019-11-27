import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

function Error404(){

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to="/projects">Back Home</Link>}
        />
    )
}

export default Error404;
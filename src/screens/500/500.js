import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

function Error404(){

    return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, the server is down."
            extra={<Link to="/">Back Home</Link>}
        />
    )
}

export default Error404;
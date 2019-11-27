import React from 'react';
import CollapsibleComponent from '../Collapsible/CollapsibleComponent';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Empty} from "antd";
import emptyBoxSvg from '../../../src/assets/images/empty-box.svg'

function ResourcePermission({ resources, hasCheckbox, textToShowIfEmpty }){
    if(resources.isLoading){
        return <CircularProgress size={40} color='inherit'/>
    }
    else if (!resources.isLoading && resources.data && resources.data.length > 0) {
        return (
            <div>
                <CollapsibleComponent data={resources.data} hasCheckbox={hasCheckbox}/>
            </div>
        )
    }
    if (resources.data && resources.data.length === 0){
        return (
            <Empty
                image={emptyBoxSvg}
                imageStyle={{
                    height: '3rem',
                    width: '3rem',
                    margin: '12.4375rem auto 1.5rem'
                }}
                description={
                    <span>
                        <span style={{lineHeight: '1.75rem', fontSize: '1.5rem', display: 'block'}}>
                            <span>{textToShowIfEmpty.title}</span>
                        </span>
                        <span style={{lineHeight: '1.25rem', fontSize: '1rem', padding: '1rem',
                            width: '21.0625rem',
                            margin: '0 auto',
                            display: 'block'}}>
                            <span>{textToShowIfEmpty.message}</span>
                        </span>
                    </span>
                }
            >
            </Empty>)
    }
    return null;
}


export default ResourcePermission;

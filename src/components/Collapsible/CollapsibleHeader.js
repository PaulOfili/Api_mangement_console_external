import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'antd';

export const CollapsibleHeader = ({text, productResources, requestFor_resources, hasCheckbox}) => {

    const calculateBadgeCount = (productResourceList, globalResourceList) => {
        if (hasCheckbox) {
            let count = 0;
            let  globalResourceObject = {};
    
            for (let resource of globalResourceList) {
                globalResourceObject[resource] = (globalResourceObject[resource]) ? globalResourceObject[resource] + 1 : 1
            }
    
            for (let resource of productResourceList) {
                if (globalResourceObject[resource.id] > 0) {
                    count += 1;
                }
            }
            return count;
        }

        return productResourceList.length
    };

    return (
        <div>
            <span id='panel-heading'>{text}</span>
            <Badge
                offset={[0,-5]}
                count={calculateBadgeCount(productResources, requestFor_resources)}
                style={{ 
                    backgroundColor: 'rgba(85,107,218, 0.2)', 
                    color: '#3E55CC', 
                    marginLeft: '1.2rem',
                    transform: 'scale(1.2)'}}
            />            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        requestFor_resources: state.resources.requestFor_resources.data
    }
}

export default connect(mapStateToProps, null)(CollapsibleHeader);

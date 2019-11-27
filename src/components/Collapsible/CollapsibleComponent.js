import React from 'react';
import { Collapse, Checkbox, Icon } from 'antd';
import shortid from 'shortid';
import CustomCheckbox from './CustomCheckbox';
import CollapsibleHeader from './CollapsibleHeader';

const { Panel } = Collapse;

export class CollapsibleComponent extends React.PureComponent {
    
    
    render () {
        return (
            <Collapse
                bordered={false}
                accordion
                expandIconPosition={"right"}
                expandIcon={({ isActive }) => <Icon type={'down'} rotate={isActive ? 180 : 0} />}>
                {
                    this.props.data.map(item => (
                        <Panel header={<CollapsibleHeader text={item.name} productResources={item.resources} hasCheckbox={this.props.hasCheckbox}/>} key={shortid.generate()}>
                            <Checkbox.Group style={{ width: '100%' }}>
                            {
                                item.resources.map(resource => (
                                    <CustomCheckbox key={resource.id} resource={resource} hasCheckbox={this.props.hasCheckbox}/>
                                ))
                            }
                            </Checkbox.Group>
                        </Panel>
                    ))
                 }
            </Collapse>
        );
    }
};

export default CollapsibleComponent;
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import EditableTable from '../Editable/editable.component';

const { TabPane } = Tabs;

function Configs({ classes }) {

    return (
        <section className={classes.configview} id='config-view'>
            <Tabs type="card" animated={false}>
                <TabPane tab="Params" key="1">
                    <h3 className={classes.tabheaders}>Query Params</h3>
                    <EditableTable name="params"/>
                </TabPane>
                <TabPane tab="Authorization" key="2">
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                    <p>Content of Tab Pane 2</p>
                </TabPane>
                <TabPane tab="Headers" key="3">
                    <h3 className={classes.tabheaders}>Headers</h3>
                    <EditableTable name="header"/>
                </TabPane>
                <TabPane tab="Body" key="4">
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                    <p>Content of Tab Pane 3</p>
                </TabPane>
            </Tabs>
        </section>
    )
}

Configs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Configs);
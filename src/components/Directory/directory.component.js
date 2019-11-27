import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { Icon, Spin, Tree } from 'antd';
import styles from './styles';
import * as productActions from '../../store/actions';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const { TreeNode, DirectoryTree } = Tree;

function Directory({ getProducts, loading, products, classes }){

    useEffect(() => {
        getProducts()
    }, [getProducts])

    const onSelect = (keys, event) => {
        // console.log('Trigger Select', keys, event);
      };
    
    const onExpand = () => {
        // console.log('Trigger Expand');
      };
    return (
        <section className={classes.productdirectoryview}>
            {
                loading && <Spin indicator={antIcon} />
            }
            {
                products &&
                <div>
                    <nav className={classes.nav}><p className={classes.navp}>API GATEWAY</p></nav>
                    <div>
                        <DirectoryTree multiple onSelect={onSelect} onExpand={onExpand}>
                            {
                                products && products.map(product => {
                                    return (
                                        <TreeNode title={product.name} key={product.id}>
                                            {
                                                product.resources.map(resource => { 
                                                    if(resource !== null){
                                                        return (
                                                            <TreeNode icon={<span className={`method ${classes[resource.method.toLowerCase()]}`}>{resource.method === 'DELETE' ? 'DEL' : resource.method}</span>} title={resource.name} key={resource.id} isLeaf />
                                                        )
                                                    }
                                                    return null;
                                                }
                                                )
                                            }
                                        </TreeNode>
                                    )
                                })
                            }
                        </DirectoryTree>
                    </div>
                </div>
            }
        </section>
    )
}

const mapStateToProps = ({ products }) => {
    return {
        loading: products.all.isLoading,
        products: products.all.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getProducts: productActions.getAllProducts
    }, dispatch)
}

Directory.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProps)(Directory))
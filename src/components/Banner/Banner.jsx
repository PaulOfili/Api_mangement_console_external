import React, {useState} from 'react';
import PropTypes from "prop-types";
import {withStyles, Hidden} from '@material-ui/core';
import styles from './styles';
import { Button } from 'antd';

export function Banner({ classes, location, onShowCreate, closeable, title, text, img, bgcolor }){
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <div className={`${classes.hero} ${classes[bgcolor]}`}>
                <div className={classes.topbar}>
                    {
                        closeable &&
                        <button className={classes.hidebutton} tabIndex="0" type="button" data-test="HideButton">
                            <span className={classes.hidespan} onClick={() => setShow(false)}>
                                <svg width="17" height="17" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7953 2.04672L15.2053 0.397827L8.50032 7.35116L1.79532 0.397827L0.205322 2.04672L6.91032 9.00005L0.205322 15.9534L1.79532 17.6023L8.50032 10.6489L15.2053 17.6023L16.7953 15.9534L10.0903 9.00005L16.7953 2.04672Z" fill="white"/>
                                </svg>
                            </span>
                        </button>
                    }
                </div>
                <div className={classes.herocontent}>
                    <div className={classes.herobody}>
                        <div className={classes.herotext}>
                            <h2 className={classes.heading}>{title}</h2>
                            <p className={classes.text}>{text}</p>
                            <div className={classes.herotext_button_container}>
                                {
                                    location === 'overview' &&
                                    <Button 
                                        className={classes.herotext_button}
                                        onClick={onShowCreate}>Add New Project
                                    </Button>
                                }    
                            </div> 
                        </div>
                        <Hidden mdDown>
                            <img src={img} alt='Welcome'/>
                        </Hidden>
                    </div>  
                </div>
            </div>
        );
      }
    return null
}

Banner.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(Banner);
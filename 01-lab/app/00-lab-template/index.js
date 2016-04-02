import React, {Component} from 'react'
import config from './config.json'
import styles from  './index.less'

export default class extends Component {
    render() {
        return (
            <div className={styles.root} >
                {config.greetText}
            </div>
       );
    }
};


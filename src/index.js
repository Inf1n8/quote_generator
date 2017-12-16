import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Index extends Component {
    render() {
        console.log('hi');
        return (<App/>);
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));

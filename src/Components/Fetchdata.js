import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';

class FetchData extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    getdat() {
        axios.get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=' + new Date().getTime())
            .then(res => {
                const posts = res.data;
                this.setState({posts});
            });
    }


    componentDidMount() {
        console.log('called');
        this.getdat();
    }

    render() {

        return (<div className="quoteCard">
                {
                    this.state.posts.map(obj => {
                        return <div key={obj.ID}>
                            <ul>
                                <li>{ReactHtmlParser(obj.content)}</li>
                                <div className="fixed-action-btn">
                                    <a className="btn-floating btn-large red" id="add_btn" onClick={event => {
                                        this.getdat();
                                        console.log('clicked');
                                    }}>
                                        <i className="material-icons">add</i>
                                    </a>
                                </div>
                            </ul>

                        </div>;
                    })}
            </div>
        );
    }
}

export default FetchData;
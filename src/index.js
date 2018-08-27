import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA6fVi2Fv8qsbj63es9bFS0z3h-CWyN_o4';



// create a new component. this component should produce some HTML

class App extends Component  {

    constructor(props) {
        super(props);

        this.state = { videos: [] };


        YTSearch({key: API_KEY, term: '2fact3'}, (videos) => {
            this.setState({ videos }); //ES6 syntax
            // this.setState( { videos: videos }); //ES5 syntax
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail  video = {this.state.videos[0]} />
                <VideoList  videos={ this.state.videos} />
            </div>
        );
    }
    
}


// Take this component's generated HTML and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
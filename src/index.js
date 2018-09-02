import _ from 'lodash';
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

        this.state = { 
            
            videos: [] ,
            selectedVideo: null
        
        };

        this.videoSearch('surfboards');
       
    }

    videoSearch(term) {

        YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({ videos }); //ES6 syntax
              this.setState({ 
                  videos: videos,
                  selectedVideo: videos[0]
                  }); //ES5 syntax
         });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300 );

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail  video = {this.state.selectedVideo} />
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={ this.state.videos} />
            </div>
        );
    }
    
}


// Take this component's generated HTML and put it on the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
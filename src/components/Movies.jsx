import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie } from '../actions/movie.actions'
import {Tabs, Tab} from 'material-ui/Tabs';
import Movie from './Movie.jsx'
import LinearProgress from 'material-ui/LinearProgress';

export default class Movies extends React.Component {
  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
          <div>
             { moviesFetching &&
               <div>
                 <LinearProgress mode="indeterminate" />
               </div>
             } {!moviesFetching && moviesFetched &&
               <div style={{display:'flex',
                          flexDirection:'row',
                          flexWrap: 'wrap',
                          justifyContent:'center'}}>
                 { movies.results.map((movie) => {
                    return (<Movie key={movie.id} {...movie}/>);
                  })
                 }
             </div>
             }
         </div>
    );
  }
}
import React from 'react';
import { connect } from 'react-redux';
import { fetchNowPlayingMovie } from '../actions/movie.actions'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Movie from './Movie.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

/*
  connect(a,b)
  - a is for getting store values as prop (store >> props for this component)
  - b
*/
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    movies: store.movie.data.data,
    moviesFetching: store.movie.fetching,
    moviesFetched: store.movie.fetched
  }
})

export default class App extends React.Component {
  componentWillMount() {
    injectTapEventPlugin();
    this.props.dispatch(fetchNowPlayingMovie())
    this.handleChange()
  }

  handleChange(value) {
    console.log('hello');
  }

  render() {
    const { user, movies, userFetched, moviesFetching, moviesFetched} = this.props;
    return (
      <MuiThemeProvider>
      <Tabs>
        <Tab label="Item One" >
          {/* <div style={{textAlign: 'center'}}>
            <h1>Hello</h1>
            <h3>Current User</h3>
            <div>{JSON.stringify(user)}</div>
             { moviesFetching &&
               <div>loading... </div>
             } {!moviesFetching && moviesFetched &&
               <div>
                 <h3>Movies</h3>

                 <div>
                   {
                     movies.results.map((movie) => {
                       return (<div key={movie.id}>{movie.original_title}</div>);
                     })
                   }
                 </div>
               </div>
             }
         </div> */}
         <Movie/>
        </Tab>
        <Tab label="Item Two" >
          <div>
            <h2 style={styles.headline}>Tab Two</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
        <Tab
          label="onActive"
          data-route="/home"
        >
          <div>
            <h2 style={styles.headline}>Tab Three</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
    </Tabs>
  </MuiThemeProvider>
    );
  }
}

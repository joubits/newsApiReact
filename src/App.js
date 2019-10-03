import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Listnews from './components/Listnews';
import Form from './components/Form';

class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    this.getNewsApi();
  }

  async getNewsApi (category='general'){
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${ category }&apiKey=481122d76acf43d1a29976bd60d70554`

    const resp = await fetch(url);
    const datanews = await resp.json();

    this.setState({
      news: datanews.articles
    });

    //console.log(this.state.news);
  }

  render() {
    return (
      <Fragment>
        <Header title="News API in ReactJS" />
        <div className="container white contenedor-noticias">
          <Form searchnews={this.getNewsApi.bind(this)}  /> 
          <Listnews listnews={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
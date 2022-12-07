import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title="UpComing" fetachURL={requests.requestUpcoming} />
      <Row rowID='2' title="Popular" fetachURL={requests.requestPopular} />
      <Row rowID='3' title="Trending" fetachURL={requests.requestTrending} />
      <Row rowID='4' title="Top Rated" fetachURL={requests.requestTopRated} />
      <Row rowID='5' title="Horror" fetachURL={requests.requestHorror} />
    </div>
  )
}

export default Home
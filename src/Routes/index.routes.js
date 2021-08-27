import {Switch, Route} from 'react-router-dom'
import Detail from 'pages/Detail'
import GifResult from 'pages/GifResult'
import Home from 'pages/Home'
import Trends from 'pages/Trends'

export default function IndexRoutes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/search/:keyword' component={GifResult} />
      <Route exact path='/search/gif/:id' component={Detail} />
      <Route exact path='/trends' component={Trends} />
    </Switch>
  )
}

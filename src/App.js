import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import AlbumsListContainer from './components/AlbumsListContainer'
import AlbumDetailsContainer from './components/AlbumDetailsContainer'
import { Route } from 'react-router-dom'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <Route
          path='/'
          component={AlbumsListContainer}
          exact
        />
        <Route
          path={`/album/:id`}
          component={AlbumDetailsContainer}
        />
      </div>
    </Provider>
  )
}

export default App

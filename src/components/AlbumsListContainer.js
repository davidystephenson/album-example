import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { addAlbum, setAlbums } from '../actions/album'

class AlbumsListContainer extends React.Component {
  componentDidMount () {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        console.log(
          'response test:',
          response
        )

        const { body } = response

        this
          .props
          .setAlbums(body)
      })
  }

  render () {
    if (!this.props.albums) return 'Loading...'

    console.log(
      'this.props.albums',
      this.props.albums
    )

    return <AlbumsList
      albums={this.props.albums}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(
  mapStateToProps,
  { addAlbum, setAlbums }
)(AlbumsListContainer)

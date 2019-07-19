import * as React from 'react'

export default class AlbumsDetailsContainer extends React.Component {
  render () {
    console.log('this.props.match test:', this.props.match)
    return `album details for ${this.props.match.params.id} go here`
  }
}

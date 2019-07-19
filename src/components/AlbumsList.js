import * as React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumsList (props) {
  return (<div>
    <h1>All Albums</h1>

    <ul>
      {
        props.albums.map(album =>
          <Link
            to={`/album/${album.id}`}
            key={album.id}
          >
            <li>
              {album.title} ({album.id})
            </li>
          </Link>
        )}
    </ul>
  </div>)
}

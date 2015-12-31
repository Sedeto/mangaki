import React from 'react'

import _ from 'lodash'

export class AnimeInfo extends React.Component {
  static propTypes = {
    anime: React.PropTypes.shape({
      nb_episodes: React.PropTypes.string.isRequired,
      director: React.PropTypes.string.isRequired,
      composer: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired,
      editor: React.PropTypes.string.isRequired,
      origin: React.PropTypes.string.isRequired,
      genre: React.PropTypes.array.isRequired,
      anime_type: React.PropTypes.string.isRequired
    })
  }

  render () {
    const {anime} = this.props

    const informations = {
      'Nombre d\'épisodes': (<span>{anime.nb_episodes}</span>),
      'Réalisateur': (<span>{anime.director}</span>),
      'Compositeur': (<span>{anime.composer}</span>),
      'Auteur': (<span>{anime.author}</span>),
      'Éditeur': (<span>{anime.editor}</span>),
      'Origine': (<span>{anime.origin}</span>),
      'Genres': (<span>{anime.genre.join(', ')}</span>),
      'Type': (<span>{anime.anime_type}</span>)
    }

    return (
      <div className='col-sm-6 col-md-3'>
        {_.map(informations, (node, key) => {
          return (
            <p>{key}{' : '}{node}</p>
          )
        })}
      </div>
    )
  }
}

export default AnimeInfo

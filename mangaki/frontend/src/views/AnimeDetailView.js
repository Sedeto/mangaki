import React from 'react'

import AnimePoster from 'components/AnimePoster'
import AnimeInfo from 'components/AnimeInfo'
import AnimeStats from 'components/AnimeStats'

import Spinner from 'react-spinkit'

import classNames from 'classnames'

import styles from './AnimeDetailView.scss'

import { connect } from 'react-redux'
import { actions as animeActions } from 'redux/modules/anime'

// FIXME: Rating are missing ;(
const mapStateToProps = (state, props) => {
  const {params: {id}} = props
  return {
    anime: state.anime[id],
    isFetching: state.anime.isFetching,
    animeId: +id
  }
}

export class AnimeDetailView extends React.Component {
  static propTypes = {
    fetchAnime: React.PropTypes.func.isRequired,
    anime: React.PropTypes.object,
    animeId: React.PropTypes.number.isRequired,
    isFetching: React.PropTypes.bool.isRequired
  }

  componentDidMount () {
    const {fetchAnime, animeId} = this.props
    fetchAnime(animeId)
  }

  renderAnime () {
    const {anime} = this.props

    return (
      <div className={classNames('row', styles['manga-list'])}>
        <div className='col-md-12'>
          <h1>{anime.title}</h1>
        </div>
        <AnimePoster anime={anime} />
        <AnimeInfo anime={anime} />
        <AnimeStats anime={anime} />
        {anime.synopsis && <div className='well'>{anime.synopsis}</div>}
      </div>
    )
  }

  render () {
    const {isFetching} = this.props
    if (isFetching) {
      return (
        <Spinner spinnerName='cube-grid' />
      )
    } else {
      return this.renderAnime()
    }
  }
}

export default connect(mapStateToProps, animeActions)(AnimeDetailView)

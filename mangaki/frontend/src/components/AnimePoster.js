import React from 'react'
import classNames from 'classnames'

import _ from 'lodash'

export class AnimePoster extends React.Component {
  static propTypes = {
    anime: React.PropTypes.object.isRequired,
    rating: React.PropTypes.string
  }

  renderImage () {
    const {anime} = this.props

    return (
      <div className='col-md-10 col-sm-9 col-xs-8 manga-snapshot'>
        <div className='manga-snapshot-image' style={{backgroundImage: `url(${anime.poster})`}} />
      </div>
    )
  }

  renderButtons () {
    const {rating} = this.props
    const baseClasses = ['btn', 'btn-block']
    const buttons = {
      'favorite': {
        extraClasses: 'btn-favorite',
        icon: 'glyphicon-star'
      },
      'like': {
        extraClasses: 'btn-success',
        icon: 'glyphicon-thumbs-up'
      },
      'neutral': {
        extraClasses: 'btn-warning',
        icon: 'glyphicon-adjust'
      },
      'dislike': {
        extraClasses: 'btn-danger',
        icon: 'glyphicon-thumbs-down'
      },
      'willsee': {
        extraClasses: 'btn-primary',
        icon: 'glyphicon-eye-open'
      },
      'wontsee': {
        extraClasses: 'btn-info',
        icon: 'glyphicon-eye-close'
      }
    }

    return (
      <div className='col-md-2 col-sm-3 col-xs-2 manga-votes'>
        {_.map(buttons, (button, type) => {
          return (
            <a className={classNames(baseClasses, button.extraClasses, rating !== type && 'not-chosen')}>
              <span className={classNames('glyphicon', button.icon)} />
            </a>
          )
        })}
      </div>
    )
  }

  render () {
    const {anime} = this.props

    return (
      <div className='col-sm-6 col-md-4 manga-sheet'>
        <div className='thumbnail data' data-category='anime' data-id={anime.id}>
          <div className='row'>
            {this.renderImage()}
            {this.props.rating && this.renderButtons()}
          </div>
        </div>
      </div>
    )
  }
}

export default AnimePoster

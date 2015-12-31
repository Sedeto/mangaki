import React from 'react'
import Chart from 'chart.js'

import _ from 'lodash'

import styles from './AnimeStats.scss'

export class AnimeStats extends React.Component {
  static propTypes = {
    stats: React.PropTypes.array.isRequired
  }

  componentDidMount () {
    const {stats} = this.props
    const doughnutData = _.map(stats, stat => {
      return {
        value: stat.value,
        color: stat.colors.normal,
        highlight: stat.colors.highlight,
        label: stat.label
      }
    })

    const ctx = document.getElementById('stats').getContext('2d')
    this.chart = new Chart(ctx).Doughnut(doughnutData, {
      responsive: true
    })
  }

  componentWillUnmount () {
    if (this.chart) {
      this.chart.destroy()
    }
  }

  render () {
    return (
      <div className='col-sm-6 col-md-6'>
        <h3>Statistiques</h3>
        <div className={styles['anime-stats']}>
          <canvas id='stats' />
        </div>
        {/* TODO: Add references **/}
      </div>
    )
  }
}

export default AnimeStats

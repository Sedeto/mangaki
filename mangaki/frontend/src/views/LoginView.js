import React from 'react'
import LoginForm from 'components/LoginForm'

import { connect } from 'react-redux'
import { actions as loginActions } from 'redux/modules/auth'

const mapStateToProps = state => state

export class LoginView extends React.Component {
  static propTypes = {
    logIn: React.PropTypes.func.isRequired
  }

  logIn (model) {
    this.props.logIn(model.username, model.password)
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='page-header'>
            <h1>Se connecter</h1>
          </div>
          <LoginForm onSubmit={::this.logIn} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, loginActions)(LoginView)

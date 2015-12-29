import React from 'react'
import Formsy from 'formsy-react'
import { Input, Row } from 'formsy-react-components'

export class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  }

  render () {
    const sharedProps = {
      layout: 'horizontal'
    }

    return (
      <Formsy.Form onSubmit={this.props.onSubmit}>
        <Input
          {...sharedProps}
          name='username'
          type='text'
          label="Votre nom d'utilisateur"
          required
        />
        <Input
          {...sharedProps}
          name='password'
          type='password'
          label='Votre mot de passe'
          required
        />
        <Row layout='horizontal'>
          <input className='btn btn-primary' formNoValidate type='submit' defaultValue='Connexion' />
        </Row>
      </Formsy.Form>
    )
  }
}

export default LoginForm

import React, { PureComponent } from 'react'
import { Button, Col, Form, Icon, Input, Row } from 'antd'
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale'
import styles from './styles.less'
import Link from 'umi/link'
import { checkPassword } from '../../services/userLogin'

@Form.create()
class Login extends PureComponent {
  handleOk = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        checkPassword(values.username, values.password)
          .then(resp => {
            console.log(resp)
            if (null != resp && 200 == resp.code) {
              document.getElementById('loginForm').submit()
            }
          })
      }
    })
  }

  oauth = (app) => {
    sessionStorage.removeItem('oauthCallback')
    window.location = `/oauth/login/${app}`
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form

    return (
      <Row justify="space-around" type="flex" className={styles.main}>
        <Col xs={16} sm={12} md={8} lg={6} xl={4}>
          <Form id="loginForm" action="/login" method="post">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'user.login.usernameOrEmail.errorMessage' }),
                  },
                ],
              })(
                <Input
                  name="username"
                  suffix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                  onPressEnter={this.handleOk}
                  placeholder={formatMessage({ id: 'user.login.usernameOrEmail' })}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'user.login.password.errorMessage' }),
                  },
                ],
              })(
                <Input.Password
                  name="password"
                  type="password"
                  autoComplete="false"
                  allowClear
                  suffix={<Icon type="eye-invisible" style={{ opacity: 0.5 }}/>}
                  onPressEnter={this.handleOk}
                  placeholder={formatMessage({ id: 'user.login.password' })}
                />,
              )}
            </Form.Item>
            <Row>
              <Button type="primary" className={styles.button} onClick={this.handleOk}>
                {<FormattedMessage id={'user.login.signIn'}></FormattedMessage>}
              </Button>
            </Row>
            <Row>
              <Col span={12} style={{
                textAlign: 'left',
              }}>
                <Link to="/user/reset">
                  <Button type="link" style={{ padding: '0' }}>
                    <FormattedMessage id={'user.register.forgetPassword'}/>
                  </Button>
                </Link>
              </Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Link to="/user/register">
                  <Button type="link" style={{ padding: '0' }}>
                    <FormattedMessage id={'user.login.toRegister'}/>&gt;&gt;
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row justify="space-between" type="flex">
                  <span>
                    {<FormattedMessage id={'user.login.username.forTest'}></FormattedMessage>}: test
                  </span>
              <span>
                    {<FormattedMessage id={'user.login.Password'}></FormattedMessage>}: 123456
                  </span>
            </Row>
            <div className={styles.other}>
              <FormattedMessage id="user.login.oauth"/>
              <Icon key="oauth.github" type="github" className={styles.icon} theme="outlined"
                    onClick={this.oauth.bind(this, 'github')}/>
              <Icon key="oauth.alipay" type="alipay-circle" className={styles.icon} theme="outlined"
                    onClick={this.oauth.bind(this, 'alipay')}/>
            </div>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Login

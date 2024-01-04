import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../store/actions';

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isShowPassword: false,
      errMessage: '',
    };
  }
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: '',
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        // eslint-disable-next-line no-undef
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.handleLogin();
    }
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12  text-login">
              <h1>Đăng Nhập</h1>
            </div>
            <div className="col-12 form-group login-input">
              <h3>Tài khoản: </h3>
              <input
                type="text"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
                className="form-control"
                placeholder="Nhập tên tài khoản"
              ></input>
            </div>
            <div className="col-12 form-group login-input">
              <h3>
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
                <span class="material-symbols-outlined"></span>
                Mật khẩu:
              </h3>
              <div className="custom-input-password">
                <input
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  type={this.state.isShowPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={(event) => {
                    this.handleOnChangePassword(event);
                  }}
                  onKeyDown={(event) => this.handleKeyDown(event)}
                ></input>
                <span
                  onClick={() => {
                    this.handleShowHidePassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? 'far fa-eye'
                        : 'far fa-eye-slash'
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: 'red' }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Đăng Nhập
              </button>
            </div>{' '}
            <div className="col-12">
              <span className="forgot-password">
                <h5>Quên mật khẩu? </h5>
              </span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">
                <h5> Đăng nhập với:</h5>
              </span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>{' '}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.adminLoginFail()),
    userLoginSuccess: (userInfor) =>
      dispatch(actions.userLoginSuccess(userInfor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

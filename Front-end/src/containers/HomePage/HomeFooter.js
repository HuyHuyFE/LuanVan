/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss';

class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <img src="../assets/images/logoHuyVu.png" alt="" />
              <div class="col-sm-12 col-md-6">
                <h1>HuyVu MEDI</h1>
                <p class="text-justify">
                  {' '}
                  <h3>Trường Đại Học Công Nghệ Sài Gòn STU</h3>
                </p>
                <p class="text-justify">
                  Trụ sở: 180 Cao Lỗ, Phường 4, Quận 8, tp Hồ Chí Minh
                </p>
                <p class="text-justify">
                  Trụ sở: VP Hồ Chí Minh: Tầng 1, 256 Nguyễn Thị Minh Khai, p.
                  Võ Thị Sáu, q.3, Tp. HCM
                </p>
              </div>

              <div class="col-xs-6 col-md-3">
                <h6>Hỗ trợ khách hàng</h6>
                <ul class="footer-links">
                  <li>
                    <a href="http://scanfcode.com/category/c-language/">
                      Số Điện Thoại: 09754766624
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/front-end-development/">
                      Phản Hồi: 0642153364
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/back-end-development/">
                      Góp ý: gunntml122@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-xs-6 col-md-3">
                <h6>Chính sách dịch vụ</h6>
                <ul class="footer-links">
                  <li>
                    <a href="http://scanfcode.com/about/">Về chúng tôi</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contact/">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contribute-at-scanfcode/">
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/privacy-policy/">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/sitemap/">
                      Điều khoản sử dụng
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">
                  Copyright &copy; 2023 Đức Huy - Hoàng Vũ
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                {/* <ul class="social-icons">
                  <li>
                    <a class="facebook" href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a class="twitter" href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="dribbble" href="#">
                      <i class="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a class="linkedin" href="#">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

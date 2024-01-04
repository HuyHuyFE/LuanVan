import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
import './DetailDoctor.scss';
import { getDetailInforDoctor } from '../../../services/userService';
import { LANGUAGES } from '../../../utils';
import DoctorSchedule from './DoctorSchedule';
import DoctorExtraInfor from './DoctorExtraInfor';

class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: [],
      currentDoctorId: -1,
    };
  }

  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      this.setState({
        currentDoctorId: id,
      });

      let res = await getDetailInforDoctor(id);
      if (res && res.errCode === 0) {
        this.setState({
          detailDoctor: res.data,
        });
      }
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let { language } = this.props;

    let { detailDoctor } = this.state;
    let nameVi = '',
      nameEn = '';
    if (detailDoctor && detailDoctor.positionData) {
      nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
      nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
    }

    return (
      <>
        <HomeHeader isShowBanner={false} />
        <div className="doctor-detail-container">
          <div className="intro-doctor">
            <div
              className="content-left"
              style={{
                backgroundImage: `url(${
                  detailDoctor && detailDoctor.image ? detailDoctor.image : ''
                })`,
              }}
            ></div>
            <div className="content-right">
              <div className="up">
                {language === LANGUAGES.VI ? nameVi : nameEn}
              </div>
              <div className="down">
                {detailDoctor &&
                  detailDoctor.Markdown &&
                  detailDoctor.Markdown.description && (
                    <span>{detailDoctor.Markdown.description}</span>
                  )}
              </div>
            </div>
          </div>
          <div className="schedule-doctor">
            <div className="content-left">
              <DoctorSchedule doctorIdFromParent={this.state.currentDoctorId} />
            </div>
            <div className="content-right">
              <DoctorExtraInfor
                doctorIdFromParent={this.state.currentDoctorId}
              />
            </div>
          </div>
          <div className="detail-infor-doctor">
            {detailDoctor &&
              detailDoctor.Markdown &&
              detailDoctor.Markdown.contentHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailDoctor.Markdown.contentHTML,
                  }}
                ></div>
              )}
          </div>
          <div className="comment-doctor">
            <section>
              <div class="container my-5 py-5">
                <div class="row d-flex justify-content-center">
                  <div class="col-md-12 col-lg-10 col-xl-8">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex flex-start align-items-center">
                          <img
                            class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            alt="avatar"
                            width="60"
                            height="60"
                            padding-left="200"
                          />
                          <div>
                            <h6 class="fw-bold text-primary mb-1">
                              &nbsp;&nbsp;&nbsp; Yến Vy
                            </h6>
                            <p class="text-muted small mb-0">
                              Chia sẻ - Dec 2023
                            </p>
                          </div>
                        </div>

                        <p class="mt-3 mb-4 pb-2">
                          Tôi đã khám bác sĩ Nghĩa nhiều và tôi thấy rất hài
                          lòng
                        </p>

                        <div class="small d-flex justify-content-start">
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="far fa-thumbs-up me-2"></i>
                            <p class="mb-0">Thích</p>
                          </a>
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="far fa-comment-dots me-2"></i>
                            <p class="mb-0">Comment</p>
                          </a>
                          <a href="#!" class="d-flex align-items-center me-3">
                            <i class="fas fa-share me-2"></i>
                            <p class="mb-0">Chia Sẻ</p>
                          </a>
                        </div>
                      </div>
                      <div class="card-footer py-3 border-0">
                        <div class="d-flex flex-start w-100">
                          <img
                            class="rounded-circle shadow-1-strong me-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                            alt="avatar"
                            width="40"
                            height="40"
                          />
                          &nbsp;&nbsp;
                          <div class="form-outline w-100">
                            <textarea
                              class="form-control"
                              id="textAreaExample"
                              rows="4"
                            ></textarea>
                            <label class="form-label" for="textAreaExample">
                              Bình Luận
                            </label>
                          </div>
                        </div>
                        <div class="float-end mt-2 pt-1">
                          <button type="button" class="btn btn-primary btn-sm">
                            Đăng
                          </button>
                          &nbsp;&nbsp;&nbsp;
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm"
                          >
                            Hủy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);

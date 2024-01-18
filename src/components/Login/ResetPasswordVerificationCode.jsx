import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logoartist.png";
import arrowleft from "../../assets/images/arrow-left.png";
import deviceImg from "../../assets/images/verify-code.png";
import { message } from "antd";
import { fontStyles } from "../../styles/fonts";
import routes from "../../constants/routes";
import ReactCodeInput from 'react-verification-code-input';
import { useSelector } from "react-redux";
import authService from "../../services/auth";
import { useState } from "react";
import { Box } from '../../styles/custom.js'

function ResetPasswordVerificationCode () {
  const history = useHistory()
  const email = useSelector((state) => state.auth.email);
  const [verificationCode, setVerificationCode] = useState(null);

  const verifyCode = () => {
    authService
      .passwordVerifyOtp(verificationCode, email)
      .then((response) => {
        if (response.success) {
          message.success("Verified!!!");
          history.push(routes.RESET_PASSWORD);
        } else {
          const error = response.error || "Something went wrong!!!";
          message.error(error);
        }
      })
      .catch((error) => {
        message.error("Something went wrong!!!");
      });
  }

  const resendCode = () => {
    authService
      .requestNewPassword(email)
      .then((response) => {
        if (response.success) {
          message.success("Verification code sent. Check your email!!!");
        } else {
          const error = response.error || "Something went wrong. Please try again later!!!";
          message.error(error);
        }
      })
      .catch((error) => {
        message.error("Something went wrong!!!");
      });
  }

  return (
    <div className="codeVerification">
      <div className="codeVerification_container">
        <div className="codeVerification_container_header">
          <img
            className="codeVerification_container_header_logo"
            src={logo}
            alt="logo"
          />
          <Link
            to={routes.FORGOT_PASSWORD}
            className="codeVerification_container_header_back"
          >
            <img
              className="codeVerification_container_header_back_arrowLeft"
              src={arrowleft}
              alt="back arrow"
            />
            <div
              className="login-header-back-text"
              style={fontStyles.mediumRegular}
            >
              Back
            </div>
          </Link>
        </div>
        <div className="codeVerification_container_main">
          <div className="codeVerification_conatiner_main_device">
            <img src={deviceImg} alt="device img" />
          </div>
          <div className="codeVerification_container_main_textField">
            <p style={fontStyles.mediumSemiBold}>
              Enter code sent to your Email
            </p>
            <p style={fontStyles.smallRegular}>
              A conformation code has sent to your email address
            </p>
          </div>
          <ReactCodeInput onComplete={(val) => setVerificationCode(val)} fields={6} />
        </div>
        <Box padding="20px 10%">
          <div
            className="codeVerification_container_footer_textField"
            style={fontStyles.smallRegular}
          >
            <div>It may take a minute to receive your code</div>
            <div>
              Haven't received it? <a onClick={resendCode}>Resend a new code.</a>
            </div>
          </div>
          <a
            className="codeVerification_container_footer_submitBtn"
            style={fontStyles.smallRegular}
            onClick={verifyCode}
          >
            Submit
          </a>
        </Box>
      </div>
    </div>
  );
}

export default ResetPasswordVerificationCode;

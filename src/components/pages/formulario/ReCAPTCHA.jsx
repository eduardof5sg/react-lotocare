
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaComponent = ({ onChange, required }) => {
  return (
    <ReCAPTCHA
      sitekey="6LeWMlwpAAAAAJXX7q67Iqez_ai67ooInk9vw_LF"
      onChange={onChange}
      required={required}
    />
  );
};

export default ReCaptchaComponent;

import { FunctionComponent } from "react";
import styles from "./LogInEnterNumber.module.css";

const LogInEnterNumber: FunctionComponent = () => {
  return (
    <div className={styles.logInEnterNumber}>
      <div className={styles.background}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <img className={styles.backgroundChild} alt="" src="/ellipse-7.svg" />
      </div>
      <img
        className={styles.bookMyShowLogoIcon}
        alt=""
        src="/book-my-show-logo@2x.png"
      />
      <div className={styles.logInEnterNumberChild} />
      <div className={styles.logInEnterNumberItem} />
      <div className={styles.pleaseEnterYourContainer}>
        <p
          className={styles.pleaseEnterYour}
        >{`Please enter your mobile number or `}</p>
        <p className={styles.pleaseEnterYour}>email address for verification</p>
      </div>
      <div className={styles.enterMobileNumber}>Enter mobile number</div>
      <div className={styles.enterEmailAddress}>Enter email address</div>
      <div className={styles.or}>or</div>
      <div className={styles.logInEnterNumberInner} />
      <b className={styles.sendVerificationCode}>Send Verification Code</b>
    </div>
  );
};

export default LogInEnterNumber;

import { feedbackSectionStyle } from "./feedback-section.css";

export function FeedbackSection() {
  return (
    <section className={feedbackSectionStyle.section}>
      <h3 className={feedbackSectionStyle.title}>Client testimonials</h3>
      <div className={feedbackSectionStyle.flexBox}>
        <div className={feedbackSectionStyle.feedbackBox}>
          <div className={feedbackSectionStyle.emilyProfileImage} />
          <p className={feedbackSectionStyle.feedbackText}>
            {`We put our trust in Sunnyside and they\ndelivered, making sure our needs were met\nand deadlines were always hit.`}
          </p>
          <h4 className={feedbackSectionStyle.feedbackName}>Emily R.</h4>
          <span className={feedbackSectionStyle.feebackJob}>
            Marketing Director
          </span>
        </div>

        <div className={feedbackSectionStyle.feedbackBox}>
          <div className={feedbackSectionStyle.thomasProfileImage} />
          <p className={feedbackSectionStyle.feedbackText}>
            {`Sunnyside’s enthusiasm coupled with their\nkeen interest in our brand’s success made it\na satisfying and enjoyable experience.`}
          </p>
          <h4 className={feedbackSectionStyle.feedbackName}>Thomas S.</h4>
          <span className={feedbackSectionStyle.feebackJob}>
            Chief Operating Officer
          </span>
        </div>

        <div className={feedbackSectionStyle.feedbackBox}>
          <div className={feedbackSectionStyle.jennieProfileImage} />
          <p className={feedbackSectionStyle.feedbackText}>
            {`Incredible end result! Our sales increased\nover 400% when we worked with Sunnyside.\nHighly recommended!`}
          </p>
          <h4 className={feedbackSectionStyle.feedbackName}>
            Thomas S.Jennie F.
          </h4>
          <span className={feedbackSectionStyle.feebackJob}>
            Business Owner
          </span>
        </div>
      </div>
    </section>
  );
}

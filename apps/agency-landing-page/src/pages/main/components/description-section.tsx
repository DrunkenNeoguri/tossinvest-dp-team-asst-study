import { descriptionSectionStyle } from "./description-section.css";

export function DescriptionSection() {
  return (
    <section className={descriptionSectionStyle.section}>
      <div className={descriptionSectionStyle.flexBox}>
        <div className={descriptionSectionStyle.descBox}>
          <h2 className={descriptionSectionStyle.descTitle}>
            Transform your brand
          </h2>
          <p className={descriptionSectionStyle.descText}>
            {`We are a full-service creative agency specializing in\nhelping brands grow fast. Engage your clients through\ncompelling visuals that do most of the marketing for you.`}
          </p>
          <a className={descriptionSectionStyle.learnMoreText}>Learn more</a>
        </div>
        <div className={descriptionSectionStyle.transformImage} />
      </div>

      <div className={descriptionSectionStyle.flexBox}>
        <div className={descriptionSectionStyle.standOutImage} />

        <div className={descriptionSectionStyle.descBox}>
          <h2 className={descriptionSectionStyle.descTitle}>
            Stand out to the right audience
          </h2>
          <p className={descriptionSectionStyle.descText}>
            {`Using a collaborative formula of designers, researchers,\nphotographers, videographers, and copywriters, we’ll\nbuild and extend your brand in digital places.`}
          </p>
          <a className={descriptionSectionStyle.learnMoreText}>Learn more</a>
        </div>
      </div>

      <div className={descriptionSectionStyle.flexBox}>
        <div className={descriptionSectionStyle.graphicDesignImage}>
          <div className={descriptionSectionStyle.bottomBlockBox}>
            <h2 className={descriptionSectionStyle.graphicDesignTitle}>
              Graphic design
            </h2>
            <p className={descriptionSectionStyle.graphicDesignText}>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className={descriptionSectionStyle.photographyImage}>
          <div className={descriptionSectionStyle.bottomBlockBox}>
            <h2 className={descriptionSectionStyle.graphicDesignTitle}>
              Photography
            </h2>
            <p className={descriptionSectionStyle.graphicDesignText}>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

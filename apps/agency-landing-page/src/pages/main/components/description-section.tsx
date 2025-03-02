export function DescriptionSection() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a>Learn more</a>
          </div>
          <div>
            <img />
          </div>
        </div>

        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <div>
            <img />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a>Learn more</a>
          </div>
        </div>

        <div style={{ display: "flex", width: "100%", height: "100%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <img />
            <h2>Graphic design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <img />
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

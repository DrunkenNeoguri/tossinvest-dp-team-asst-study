export function FeedbackSection() {
  return (
    <section style={{ display: "flex", flexDirection: "column" }}>
      <h3>Client testimonials</h3>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <span>Marketing Director</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <span>Chief Operating Officer</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <span>Business Owner</span>
        </div>
      </div>
    </section>
  );
}

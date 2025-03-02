export function Footer() {
  return (
    <footer>
      <div>
        <img />
      </div>
      <div>
        <a>Services</a>
        <a>Projects</a>
        <a>Contact</a>
      </div>
      <div>
        <img /> // facebook
        <img /> // instagram
        <img /> // twitter
        <img /> // pinterest
      </div>

      <div>
        <div style={{ fontSize: "11px", textAlign: "center" }}>
          Challenge by
          <a
            style={{ color: "hsl(228, 45%, 44%)" }}
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a style={{ color: "hsl(228, 45%, 44%)" }} href="#">
            @DrunkenNeoguri
          </a>
          .
        </div>
      </div>
    </footer>
  );
}

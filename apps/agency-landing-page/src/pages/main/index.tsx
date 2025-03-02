import {
  DescriptionSection,
  FeedbackSection,
  Footer,
  MainSection,
  NavBar,
} from "./components";

export default function Main() {
  console.log("Main");
  return (
    <main>
      <NavBar />
      <MainSection />
      <DescriptionSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}

// *MEMO: component -> style 순으로 한 파일에서 구현함.

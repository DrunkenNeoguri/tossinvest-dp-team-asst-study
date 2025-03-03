import {
  DescriptionSection,
  FeedbackSection,
  Footer,
  MainSection,
} from "./components";

export default function Main() {
  return (
    <main>
      <MainSection />
      <DescriptionSection />
      <FeedbackSection />
      <Footer />
    </main>
  );
}

// *MEMO: component -> style 순으로 한 파일에서 구현함.

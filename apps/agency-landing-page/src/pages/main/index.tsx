import {
  DescriptionSection,
  FeedbackSection,
  Footer,
  ImageSection,
  MainSection,
} from "./components";
import { mainStyle } from "./main.css";

export default function Main() {
  return (
    <main className={mainStyle}>
      <MainSection />
      <DescriptionSection />
      <FeedbackSection />
      <ImageSection />
      <Footer />
    </main>
  );
}

// *MEMO: component -> style 순으로 한 파일에서 구현함.

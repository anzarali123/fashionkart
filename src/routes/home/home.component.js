import Directory from "../../components/directory/directory.component";
import Slider from "../../components/Slider/slider.component";
import Newsletter from "../../components/Newsletter/newsletter.component";
const Home = () => {
  return (
    <>
      <Slider />
      <Directory />;
      <Newsletter />
    </>
  );
};

export default Home;

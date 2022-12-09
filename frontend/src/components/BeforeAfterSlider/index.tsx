import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const BeforeAfterSlider = ({
  imgBefor,
  imgAfter,
}: {
  imgBefor: string;
  imgAfter: string;
}) => {
  const delimiterIconStyles = {
    width: "45px",
    height: "45px",
    backgroundSize: "cover",
    borderRadius: "none",
    backgroundImage: "url('/assets/img/beforeafter-element-one-icon.png')",
  };
  return (
    <div className="w-full z-10">
      <ReactBeforeSliderComponent
        firstImage={{ imageUrl: imgAfter }}
        secondImage={{ imageUrl: imgBefor }}
        delimiterIconStyles={delimiterIconStyles}
      />
    </div>
  );
};

export default BeforeAfterSlider;

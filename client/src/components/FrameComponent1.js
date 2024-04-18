import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="homepage-inner">
      <div className="frame-parent7">
        <div className="nearby-restaurants-parent">
          <h3 className="nearby-restaurants">Nearby Restaurants</h3>
          <div className="group-div">
            <div className="frame-parent8">
              <FrameComponent3
                rectangle26="/rectangle-26@2x.png"
                davidAndEmilysPatisserie="David and Emily’s Patisserie"
                frenchPatisserie="French patisserie"
                prop="4.2"
                mins="15 mins"
                prop1="$$"
                offer="15% off"
              />
              <FrameComponent3
                rectangle26="/rectangle-26-1@2x.png"
                davidAndEmilysPatisserie="Swap - Diet Meal Box"
                frenchPatisserie="healthy food, salads"
                prop="3.2"
                mins="40 Mins"
                prop1="$"
                propWidth="251px"
                propMinWidth="96px"
                propTextTransform="lowercase"
                propMinWidth1="21px"
                offer="$5 off"
              />
            </div>
            <div className="frame-parent10">
              <FrameComponent3
                rectangle26="/image-5@2x.png"
                davidAndEmilysPatisserie="Dilac Vegan Vietnamese Cuisine"
                frenchPatisserie="vietnamese"
                prop="4.7"
                mins="20 Mins"
                prop1="$$"
                propWidth="251px"
                propMinWidth="96px"
                propTextTransform="lowercase"
                propMinWidth1="21px"
                offer="10% off"
              />
              <FrameComponent3
                rectangle26="/rectangle-26-2@2x.png"
                davidAndEmilysPatisserie="The Good Bowl - Traditional Bowls"
                frenchPatisserie="North Indian, Punjabi"
                prop="4.8"
                mins="25 Mins"
                prop1="$$$"
                propWidth="256px"
                propMinWidth="unset"
                propTextTransform="lowercase"
                propMinWidth1="32px"
                offer="No Deals"
              />
            </div>
          </div>
        </div>
        <div className="recommended-food-items-parent">
          <h3 className="recommended-food-items">Recommended Food Items</h3>
          <div className="group-div">
            <div className="frame-parent12">
              <FrameComponent2
                rectangle26="/rectangle-26-3@2x.png"
                notYourMothersFalafel="Paneer Tikka Rice Bowl"
                faasosWrapsRolls={`the good bowl`}
                prop="$10 off"
                mins="20 Mins"
                rating="4.1"
                cost="$$"
              />
              <FrameComponent2
                rectangle26="/rectangle-26-4@2x.png"
                notYourMothersFalafel="Not your mother’s falafel"
                faasosWrapsRolls={`Faasos - Wraps & Rolls`}
                prop="15% off"
                mins="20 Mins"
                rating="4.0"
                cost="$$"
              />
            </div>
            <div className="frame-parent13">
              <FrameComponent2
                rectangle26="/rectangle-26-5@2x.png"
                notYourMothersFalafel="Veggie Delite Loaded Burrito"
                faasosWrapsRolls="Lunch Box"
                prop="5% off"
                mins="25 Mins"
                rating="4.3"
                cost="$$"
              />
              <FrameComponent2
                rectangle26="/rectangle-26-6@2x.png"
                notYourMothersFalafel="Thai Tea - Boba Bulb"
                faasosWrapsRolls="boba bar"
                prop="$5 off"
                mins="15 Mins"
                rating="3.8"
                cost="$$"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

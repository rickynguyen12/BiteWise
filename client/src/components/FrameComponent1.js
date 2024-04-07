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
              />
              <div className="frame-wrapper4">
                <div className="rectangle-parent1">
                  <img
                    className="frame-child2"
                    alt=""
                    src="/rectangle-26-1@2x.png"
                  />
                  <div className="swap-diet-container">
                    <p className="swap-diet">{`Swap - Diet Meal `}</p>
                    <p className="box">Box</p>
                  </div>
                  <div className="healthy-food-salads-parent">
                    <div className="healthy-food-salads">
                      Healthy Food, Salads
                    </div>
                    <div className="vector-group">
                      <img
                        className="vector-icon3"
                        alt=""
                        src="/vector-4.svg"
                      />
                      <div className="div3">3.2</div>
                    </div>
                  </div>
                  <div className="frame-parent9">
                    <div className="group-container">
                      <img className="group-icon2" alt="" src="/group.svg" />
                      <div className="mins2">40 Mins</div>
                    </div>
                    <div className="vector-container">
                      <img
                        className="vector-icon4"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <div className="div4">$</div>
                    </div>
                  </div>
                </div>
              </div>
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
              />
              <FrameComponent3
                rectangle26="/rectangle-26-2@2x.png"
                davidAndEmilysPatisserie="The Good Bowl
- Traditional Bowls"
                frenchPatisserie="North Indian, Punjabi"
                prop="4.8"
                mins="25 Mins"
                prop1="$$$"
                propWidth="256px"
                propMinWidth="unset"
                propTextTransform="lowercase"
                propMinWidth1="32px"
              />
            </div>
          </div>
        </div>
        <div className="recommended-food-items-parent">
          <h3 className="recommended-food-items">Recommended Food Items</h3>
          <div className="frame-parent11">
            <div className="frame-parent12">
              <div className="customer-details-parent">
                <img
                  className="customer-details-icon"
                  alt=""
                  src="/rectangle-26-3@2x.png"
                />
                <div className="paneer-tikka-rice-container">
                  <p className="paneer-tikka-rice">{`Paneer Tikka Rice `}</p>
                  <p className="bowl">Bowl</p>
                </div>
                <div className="shanxi-china">
                  <div className="the-good-bowl">The Good Bowl</div>
                </div>
                <div className="kim-young-jou-parent">
                  <div className="kim-young-jou">
                    <img
                      className="seoul-south-korea"
                      alt=""
                      src="/vector-10.svg"
                    />
                    <div className="div5">$11</div>
                  </div>
                  <div className="group-parent1">
                    <img className="group-icon3" alt="" src="/group.svg" />
                    <div className="mins3">20 Mins</div>
                  </div>
                </div>
              </div>
              <FrameComponent2
                rectangle26="/rectangle-26-4@2x.png"
                notYourMothersFalafel="Not your mother’s falafel"
                faasosWrapsRolls={`Faasos - Wraps & Rolls`}
                prop="$10"
                mins="20 Mins"
              />
            </div>
            <div className="frame-parent13">
              <FrameComponent2
                rectangle26="/rectangle-26-5@2x.png"
                notYourMothersFalafel="Veggie Delite Loaded Burrito"
                faasosWrapsRolls="Lunch Box"
                prop="$14"
                mins="25 Mins"
                propAlignSelf="stretch"
                propWidth="unset"
                propPadding="36px 62px 25px"
                propAlignSelf1="stretch"
                propHeight="unset"
                propMinWidth="79px"
                propMinWidth1="27px"
              />
              <FrameComponent2
                rectangle26="/rectangle-26-6@2x.png"
                notYourMothersFalafel="Thai Tea - Boba Bulb"
                faasosWrapsRolls="boba bar"
                prop="$6"
                mins="15 Mins"
                propAlignSelf="stretch"
                propWidth="unset"
                propPadding="36px 62px 25px"
                propAlignSelf1="stretch"
                propHeight="unset"
                propMinWidth="75px"
                propMinWidth1="21px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

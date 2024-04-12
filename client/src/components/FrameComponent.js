import FrameComponent2 from "./FrameComponent2";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="homepage-child">
      <div className="frame-parent14">
        <div className="whats-on-your-mind-parent">
          <h3 className="whats-on-your">What’s on your mind?</h3>
          <div className="frame-parent15">
            <div className="ellipse-parent">
              <img
                className="ellipse-icon"
                loading="lazy"
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className="sandwich">Sandwich</div>
            </div>
            <div className="lorem-ipsum-is-simply">
              <img
                className="lorem-ipsum-is-simply1"
                alt=""
                src="/ellipse-1-1@2x.png"
              />
              <div className="north-indian-thali">North Indian Thali</div>
            </div>
            <div className="ellipse-group">
              <img className="frame-child4" alt="" src="/ellipse-1-2@2x.png" />
              <div className="egg-breakfast">Egg BreakFast</div>
            </div>
            <div className="ellipse-container">
              <img className="frame-child5" alt="" src="/ellipse-1-3@2x.png" />
              <div className="wraps">Wraps</div>
            </div>
            <div className="ellipse-parent1">
              <img className="frame-child6" alt="" src="/ellipse-1-4@2x.png" />
              <div className="salads">Salads</div>
            </div>
            <div className="ellipse-parent2">
              <img className="frame-child7" alt="" src="/ellipse-1-5@2x.png" />
              <div className="burrito-bowls">{`Burrito & Bowls`}</div>
            </div>
          </div>
        </div>
        <div className="personalized-recommendations-parent">
          <h3 className="personalized-recommendations">
            Personalized recommendations
          </h3>
          <div className="frame-parent16">
            <FrameComponent2
              rectangle26="/rectangle-26-7@2x.png"
              notYourMothersFalafel="Baked Pizza Wrap - Vegetarian"
              faasosWrapsRolls={`Faasos - Wraps & Rolls`}
              prop="10% off"
              mins="20 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="var(--padding-6xl) var(--padding-5xl)"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="unset"
              propMinWidth1="21px"
              rating="4.1"
              cost="$"
            />
            <FrameComponent2
              rectangle26="/rectangle-26-8@2x.png"
              notYourMothersFalafel="Butter Chicken Pizza - 8 serve"
              faasosWrapsRolls="Suren Pastries
"
              prop="$10 off"
              mins="30 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="var(--padding-6xl) var(--padding-5xl)"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="119px"
              propMinWidth1="27px"
              rating="3.4"
              cost="$$"
            />
            <FrameComponent2
              rectangle26="/rectangle-26-9@2x.png"
              notYourMothersFalafel="Mexican Signature Wraps"
              faasosWrapsRolls="Subway"
              prop="No Deals"
              mins="32 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="36px 27px 25px"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="119px"
              propMinWidth1="27px"
              rating="4.3"
              cost="$"
            />
            <FrameComponent2
              rectangle26="/rectangle-26-10@2x.png"
              notYourMothersFalafel="Southwest Chicken Salad"
              faasosWrapsRolls="Burgerito"
              prop="20% off"
              mins="41 Mins"
              propAlignSelf="unset"
              propWidth="307px"
              propPadding="var(--padding-6xl) var(--padding-5xl)"
              propAlignSelf1="stretch"
              propHeight="unset"
              propMinWidth="75px"
              propMinWidth1="25px"
              rating="4.5"
              cost="$$"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;

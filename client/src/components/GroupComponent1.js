import { useMemo } from "react";
import { Button } from "@mui/material";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  line5,
  propPadding,
  propPadding1,
  propPadding2,
  propPadding3,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const dataMergerStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const connectionManagerStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const iconSetStyle = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  return (
    <div className="rectangle-containers" style={groupDivStyle}>
      <div className="frame-child2s" />
      <div className="data-mergers" style={dataMergerStyle}>
        <div className="signal-emitters">
          <div className="pattern-matchers">
            <div className="connection-handlers">
              <img
                className="distribution-dome-icons"
                loading="lazy"
                alt=""
                src="/david-circle.png"
              />
            </div>
            <div className="data-receivers">
              <h3 className="david-and-emilys1s">
                David and Emily’s Patisserie
              </h3>
              <div className="value-comparators">
                <div className="tree-pruners">
                  <img
                    className="tree-pruner-childs"
                    loading="lazy"
                    alt=""
                    src="/group-98.png"
                  />
                  <img
                    className="tree-pruner-items"
                    loading="lazy"
                    alt=""
                    src="/group-95.png"
                  />
                </div>
                <div className="mi1s">2.04 mi</div>
              </div>
            </div>
          </div>
          <div className="logic-networks">
            <div className="sequential-processors">
              <div className="contrast-containers">
                <div className="french1s">French</div>
              </div>
              <div className="adjustment-apparatuss">
                <div className="bakery1s">Bakery</div>
              </div>
              <div className="filter-factorys">
                <div className="good-for-breakfast1s">Good for Breakfast</div>
              </div>
              <div className="local-eats-wrappers">
                <div className="local-eats1s">Local Eats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="error-correction-networks">
        <div className="value-extractors">
          <img
            className="value-extractor-childs"
            loading="lazy"
            alt=""
            src={line5}
          />
        </div>
        <div className="connection-managers" style={connectionManagerStyle}>
          <div className="rule-applier-networks">
            <div className="data-exporters">
              <img
                className="group-icon1s"
                loading="lazy"
                alt=""
                src="/pickup-black.png"
              />
              <div className="value-transformer-networks">
                <h1 className="uber-eats1s">Uber Eats</h1>
                <div className="data-aggregator1s">
                  <h3 className="best-deal1s">Best Deal</h3>
                </div>
              </div>
            </div>
            <div className="function-chains">
              <div className="shape-sets">
                <div className="input-outputs">
                  <div className="input-filters">$0.49</div>
                  <div className="est-fee1s">Est. Fee</div>
                </div>
                <div className="label-lists">
                  <div className="min1s">35 min</div>
                  <div className="est-time1s">Est. Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon-sets" style={iconSetStyle}>
          <div className="table-layouts">
            <Button
              className="sequencers"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#3b9566",
                borderRadius: "10px",
                width: "200px",
                "&:hover": { background: "#3b9566" },
                height: 43,
              }}
            >
              Place Order
            </Button>
            <div className="list-views">
              <div className="view-all-deals1s">View All Deals (5)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;

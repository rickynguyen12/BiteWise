import {
    Button,
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    InputAdornment,
  } from "@mui/material";
  import "./GroupComponent2.css";
  
  const GroupComponent2 = () => {
    return (
      <div className="rectangle-groups">
        <div className="rectangle-divs" />
        <div className="frame-parent5s">
          <Button
            className="frame-buttons"
            startIcon={<img width="20px" height="20px" src="/svg.svg" />}
            disableElevation={true}
            variant="text"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              borderRadius: "0px 0px 0px 0px",
              height: 45,
            }}
          >
            Delivery
          </Button>
          <Button
            className="buttons"
            startIcon={<img width="20px" height="20px" src="/svg-1.svg" />}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#404040",
              fontSize: "16",
              borderColor: "#3b9566",
              borderRadius: "10px",
              "&:hover": { borderColor: "#3b9566" },
              height: 43,
            }}
          >
            Pickup
          </Button>
        </div>
        <div className="frame-wrapper3s">
          <div className="cart-size-affectss">
            Cart Size (affects service fees)
          </div>
          <FormControl
            className="drop-down-boxs"
            variant="standard"
            sx={{
              borderColor: "#8a8a8a",
              borderStyle: "SOLID",
              borderTopWidth: "2px",
              borderRightWidth: "2px",
              borderBottomWidth: "2px",
              borderLeftWidth: "2px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              width: "72.36842105263158%",
              height: "48px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "48px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "48px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#737373",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Roboto",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "16px",
              },
            }}
          >
            <InputLabel color="secondary" />
            <Select
              color="secondary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="24px"
                  height="24px"
                  src="/caret-down.svg"
                  style={{ marginRight: "8px" }}
                />
              )}
            >
              <MenuItem>Select a cart size</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="frame-wrapper4s">
          <div className="ratings-parent">
            <div className="ratings">Rating</div>
            <div className="frame-wrapper5s">
              <img
                className="frame-child1s"
                loading="lazy"
                alt=""
                src="/group-93.svg"
              />
            </div>
          </div>
        </div>
        <div className="data-aggregators">
          <div className="logic-gates">
            <div className="prices">Price</div>
            <img
              className="logic-gate-childs"
              loading="lazy"
              alt=""
              src="/group-94.svg"
            />
          </div>
        </div>
        <div className="output-containers">
          <div className="preferred-delivery-services">
            Preferred Delivery Service
          </div>
        </div>
        <div className="frame-wrapper6s">
          <div className="button-parents">
            <Button
              className="button1s"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#3b9566",
                borderRadius: "10px",
                "&:hover": { background: "#3b9566" },
                height: 43,
              }}
            >
              Uber Eats
            </Button>
            <Button
              className="button2s"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#404040",
                fontSize: "16",
                borderColor: "#3b9566",
                borderRadius: "10px",
                "&:hover": { borderColor: "#3b9566" },
                height: 43,
              }}
            >
              Doordash
            </Button>
          </div>
        </div>
        <div className="frame-wrapper7s">
          <div className="button-groups">
            <Button
              className="button3s"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#404040",
                fontSize: "16",
                borderColor: "#3b9566",
                borderRadius: "10px",
                "&:hover": { borderColor: "#3b9566" },
                height: 43,
              }}
            >
              Postmates
            </Button>
            <Button
              className="button4s"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#404040",
                fontSize: "16",
                borderColor: "#3b9566",
                borderRadius: "10px",
                "&:hover": { borderColor: "#3b9566" },
                height: 43,
              }}
            >
              Grubhub
            </Button>
          </div>
        </div>
        <div className="tree-structures">
          <Button
            className="button5s"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#404040",
              fontSize: "16",
              borderColor: "#3b9566",
              borderRadius: "10px",
              "&:hover": { borderColor: "#3b9566" },
            }}
          >
            None
          </Button>
        </div>
        <div className="condition-checkers">
          <div className="data-splitters">
            <div className="checkboxs" />
            <div className="error-handlers">
              <div className="available-nows">Available Now</div>
            </div>
          </div>
        </div>
      </div>
    );
    };

export default GroupComponent2;
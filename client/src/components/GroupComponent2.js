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
import React, { useState } from "react";

const GroupComponent2 = () => {
  const [deliverySelected, setDeliverySelected] = useState(false);
  const [pickupSelected, setPickupSelected] = useState(false);
  const [uberEatsSelected, setUberEatsSelected] = useState(false);
  const [doordashSelected, setDoordashSelected] = useState(false);
  const [postmatesSelected, setPostmatesSelected] = useState(false);
  const [grubhubSelected, setGrubhubSelected] = useState(false);
  const [noneSelected, setNoneSelected] = useState(false);

  const handleDeliveryClick = () => {
    setDeliverySelected(!deliverySelected);
  };
  const handlePickupClick = () => {
    setPickupSelected(!pickupSelected);
  };
  const handleUberEatsClick = () => {
    setUberEatsSelected(!uberEatsSelected);
  };
  const handleDoordashClick = () => {
    setDoordashSelected(!doordashSelected);
  };
  const handlePostmatesClick = () => {
    setPostmatesSelected(!postmatesSelected);
  };
  const handleGrubhubClick = () => {
    setGrubhubSelected(!grubhubSelected);
  };
  const handleNoneClick = () => {
    setNoneSelected(!noneSelected);
  };

  return (
    <div className="rectangle-groups">
      <div className="rectangle-divs" />
      <div className="frame-parent5s">
        <Button
          className={`button ${deliverySelected ? "selected" : "unselected"}`}
          startIcon={
            <img
              width="20px"
              height="20px"
              src={deliverySelected ? "/delivery.png" : "/pickup-black.png"}
            />
          }
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            fontSize: "16px",
            width: "150px",
            borderColor: "#3b9566",
            borderRadius: "10px",
            backgroundColor: deliverySelected ? "#3B9566" : "#C7C7C7",
            color: deliverySelected ? "#fff" : "#404040",
            "&:hover": {
              backgroundColor: "#C7C7C7",
              borderColor: "#8A8A8A",
              fontColor: "#fff",
              color: deliverySelected ? "#fff" : "#fff",
            },
            borderStyle: "dashed",
            height: "45px",
            marginLeft: "10px",
          }}
          onClick={handleDeliveryClick}
        >
          Delivery
        </Button>
        <Button
          className={`button ${pickupSelected ? "selected" : "unselected"}`}
          startIcon={
            <img
              width="20px"
              height="20px"
              src={pickupSelected ? "/pickup-white.png" : "/pickup.png"}
            />
          }
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            fontSize: "16px",
            width: "150px",
            borderColor: "#3b9566",
            borderRadius: "10px",
            backgroundColor: pickupSelected ? "#3B9566" : "#C7C7C7",
            color: pickupSelected ? "#fff" : "#404040",
            "&:hover": {
              backgroundColor: "#C7C7C7",
              borderColor: "#8A8A8A",
              fontColor: "#fff",
              color: pickupSelected ? "#fff" : "#fff",
            },
            borderStyle: "dashed",
            height: "45px",
            marginLeft: "10px",
          }}
          onClick={handlePickupClick}
        >
          Pickup
        </Button>
      </div>
      <div className="frame-wrapper3s">
        <div className="cart-size-affectss">
          Cart Size (affects service fees)
        </div>
        <div className="form-control-wrapper">
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
                  src="/caret_down.png"
                  style={{ marginRight: "8px" }}
                />
              )}
            >
              <MenuItem>Select a cart size</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
      <div className="frame-wrapper4s">
        <div className="ratings-parent">
          <div className="ratings">Rating</div>
          <div className="frame-wrapper5s">
            <img
              className="frame-child1s"
              loading="lazy"
              alt=""
              src="/rating.png"
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
            src="/price.png"
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
            className={`button ${uberEatsSelected ? "selected" : "unselected"}`}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: uberEatsSelected ? "#3B9566" : "#C7C7C7",
              color: uberEatsSelected ? "#fff" : "#404040",
              fontSize: "16",
              width: "150px",
              borderColor: "#3b9566",
              borderRadius: "10px",
              "&:hover": { borderColor: "#3B9566" },
              height: 43,
            }}
            onClick={handleUberEatsClick}
          >
            Uber Eats
          </Button>
          <Button
            className={`button ${doordashSelected ? "selected" : "unselected"}`}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: doordashSelected ? "#3B9566" : "#C7C7C7",
              color: doordashSelected ? "#fff" : "#404040",
              fontSize: "16",
              width: "150px",
              borderColor: "#3b9566",
              borderRadius: "10px",
              "&:hover": { borderColor: "#3B9566" },
              height: 43,
            }}
            onClick={handleDoordashClick}
          >
            Doordash
          </Button>
        </div>
      </div>
      <div className="frame-wrapper7s">
        <div className="button-groups">
          <Button
            className={`button ${
              postmatesSelected ? "selected" : "unselected"
            }`}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: postmatesSelected ? "#3B9566" : "#C7C7C7",
              color: postmatesSelected ? "#fff" : "#404040",
              fontSize: "16",
              width: "150px",
              borderColor: "#3b9566",
              borderRadius: "10px",
              "&:hover": { borderColor: "#3B9566" },
              height: 43,
            }}
            onClick={handlePostmatesClick}
          >
            Postmates
          </Button>
          <Button
            className={`button ${grubhubSelected ? "selected" : "unselected"}`}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              backgroundColor: grubhubSelected ? "#3B9566" : "#C7C7C7",
              color: grubhubSelected ? "#fff" : "#404040",
              fontSize: "16",
              width: "150px",
              borderColor: "#3b9566",
              borderRadius: "10px",
              "&:hover": { borderColor: "#3B9566" },
              height: 43,
            }}
            onClick={handleGrubhubClick}
          >
            Grubhub
          </Button>
        </div>
      </div>
      <div className="tree-structures">
        <Button
          className={`button ${noneSelected ? "selected" : "unselected"}`}
          disableElevation={true}
          variant="outlined"
          sx={{
            textTransform: "none",
            backgroundColor: noneSelected ? "#3B9566" : "#C7C7C7",
            color: noneSelected ? "#fff" : "#404040",
            fontSize: "16",
            width: "150px",
            borderColor: "#3b9566",
            borderRadius: "10px",
            "&:hover": { borderColor: "#3B9566" },
            height: 43,
          }}
          onClick={handleNoneClick}
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

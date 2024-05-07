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
  const defaultRating = localStorage.getItem("starRating");

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
          Sort by
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
              value = "default"
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="price-low-to-high">Price: Low to High</MenuItem>
              <MenuItem value="price-high-to-low">Price: High to Low</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;

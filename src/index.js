import React from "react";
import "./styles.css";
import ButtonSizes from "./Button/ButtonSizes";
import ContainedButtons from "./Button/ContainedButtons";
import FloatingActionButtons from "./Button/FloatingActionButtons";
import IconButtons from "./Button/IconButtons";
import IconLabelButtons from "./Button/IconLabelButtons";
import OutlinedButtons from "./Button/OutlinedButtons";
import TextButtons from "./Button/TextButtons";

const MyComponent = () => (
  <div>
    {/* <Button />
    <Button1 /> */}
    <ButtonSizes />
    <ContainedButtons />
    <FloatingActionButtons />
    <IconButtons />
    <IconLabelButtons />
    <OutlinedButtons />
    <TextButtons />

  </div>
);
export default MyComponent;

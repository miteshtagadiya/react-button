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
    <div>
      <h3>Text Buttons</h3>
      <TextButtons />
    </div>
    <div>
      <h3>Outlined Buttons</h3>
      <OutlinedButtons />
    </div>
    <div>
      <h3>Contained Buttons</h3>
      <ContainedButtons />
    </div>
    <div>
      <h3>Floating Action Buttons</h3>
      <FloatingActionButtons />
    </div>

    <div>
      <h3>Sizes</h3>
      <ButtonSizes />
    </div>
    <div>
      <h3>Icon Buttons</h3>
      <IconButtons />
    </div>

    <div>
      <h3>Icon Label Buttons</h3>
      <IconLabelButtons />
    </div>
  </div>
);
export default MyComponent;

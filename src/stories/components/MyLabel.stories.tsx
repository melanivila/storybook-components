import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: "UI/MyLabel",
  component: MyLabel,
  argTypes: {
    color: { control: "select" },
    fontColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const ColorPicker = Template.bind({});
ColorPicker.args = {
  size: "h1",
  fontColor: "#3d0eac",
};

export const BackgroundColorPicker = Template.bind({});
BackgroundColorPicker.args = {
  size: "h1",
  backgroundColor: "#3d0eac",
};

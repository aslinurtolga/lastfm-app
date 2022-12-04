import { Switch } from "../components/Switch";
import React from "react";

export default {
  title: "Switch",
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Tertiary = Template.bind({});
Tertiary.args = {};

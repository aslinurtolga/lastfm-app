import { Header } from "../components/Header";
import React from "react";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Tertiary = Template.bind({});
Tertiary.args = {};

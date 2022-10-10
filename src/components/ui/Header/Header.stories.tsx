import { Header } from "./Header";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Header",
  component: Header,
};

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Standard = Template.bind({});

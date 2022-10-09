import { Button } from "./Button";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Demo Button",
  },
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Standard = Template.bind({});

import { Page } from "./Page";
import { ComponentStory } from "@storybook/react";

export default {
  title: "Page",
  component: Page,
};

const Template: ComponentStory<typeof Page> = () => (
  <Page>
    <p>Inner</p>
  </Page>
);

export const Standard = Template.bind({});

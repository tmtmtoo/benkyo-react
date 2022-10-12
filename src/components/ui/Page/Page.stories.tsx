import { Page } from "./Page";
import { ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Page",
  component: Page,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>
    <p>Inner</p>
  </Page>
);

export const Standard = Template.bind({});

export const WithFooter = Template.bind({});
WithFooter.args = {
  showFooter: true,
};

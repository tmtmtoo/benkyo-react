import { Markdown } from "./Markdown";
import { ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Markdown",
  component: Markdown,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template: ComponentStory<typeof Markdown> = (args) => (
  <Markdown {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  content: "# h1",
};

export const Table = Template.bind({});
Table.args = {
  content: `
|AAAAA|BBBBB|CCCCC|
|--|--|--|
|えー|びー|しー|
`,
};

export const Link = Template.bind({});
Link.args = {
  content: `
- [React Router Link](/other)
- [Anchor](http://example.com)
`,
};

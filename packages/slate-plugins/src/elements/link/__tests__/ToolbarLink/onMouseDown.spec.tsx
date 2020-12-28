import { fireEvent, render } from "@testing-library/react";
import {
  ELEMENT_LINK,
  pipe,
  withInlineVoid,
} from "@udecode/slate-plugins-common";
import * as React from "react";
import * as SlateReact from "slate-react";
import { withReact } from "slate-react";
import { ToolbarLink } from "../../components/ToolbarLink";
import { withLink } from "../../withLink";
import { input, output } from "./onMouseDown.fixture";

it("should render", () => {
  const editor = pipe(
    input,
    withReact,
    withLink(),
    withInlineVoid({ inlineTypes: [ELEMENT_LINK] })
  );

  jest.spyOn(SlateReact, "useSlate").mockReturnValue(editor as any);
  jest
    .spyOn(window, "prompt")
    .mockReturnValue("https://i.imgur.com/removed.png");

  const { getByTestId } = render(<ToolbarLink icon={null} />);

  const element = getByTestId("ToolbarButton");
  fireEvent.mouseDown(element);

  expect(editor.children).toEqual(output.children);
});

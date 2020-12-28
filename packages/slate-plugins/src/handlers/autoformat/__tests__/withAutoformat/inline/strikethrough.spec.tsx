/** @jsx jsx */

import { jsx } from "@udecode/slate-plugins-test-utils";
import { withReact } from "slate-react";
import { autoformatRulesFixtures } from "../../../../../__fixtures__/autoformat.fixtures";
import { withAutoformat } from "../../../withAutoformat";

const input = (
  <editor>
    <hp>
      ~~hello~~
      <cursor />
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hp>
      <htext strikethrough>hello</htext>{" "}
    </hp>
  </editor>
) as any;

it("should autoformat", () => {
  const editor = withAutoformat({ rules: autoformatRulesFixtures })(
    withReact(input)
  );

  editor.insertText(" ");

  expect(input.children).toEqual(output.children);
});

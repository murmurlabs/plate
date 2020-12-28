import {
  getNodeDeserializer,
  setDefaults,
} from "@udecode/slate-plugins-common";
import { DeserializeHtml } from "@udecode/slate-plugins-core";
import { DEFAULTS_LINK } from "./defaults";
import { LinkDeserializeOptions } from "./types";

export const deserializeLink = (
  options?: LinkDeserializeOptions
): DeserializeHtml => {
  const { link } = setDefaults(options, DEFAULTS_LINK);

  return {
    element: getNodeDeserializer({
      type: link.type,
      node: (el) => ({
        type: link.type,
        url: el.getAttribute("href"),
      }),
      rules: [{ nodeNames: "A" }],
      ...options?.link?.deserialize,
    }),
  };
};

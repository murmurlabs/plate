import {
  getLeafDeserializer,
  setDefaults,
} from "@udecode/slate-plugins-common";
import { DeserializeHtml } from "@udecode/slate-plugins-core";
import { DEFAULTS_UNDERLINE } from "./defaults";
import { UnderlineDeserializeOptions } from "./types";

export const deserializeUnderline = (
  options?: UnderlineDeserializeOptions
): DeserializeHtml => {
  const { underline } = setDefaults(options, DEFAULTS_UNDERLINE);

  return {
    leaf: getLeafDeserializer({
      type: underline.type,
      rules: [
        { nodeNames: ["U"] },
        {
          style: {
            textDecoration: "underline",
          },
        },
      ],
      ...options?.underline?.deserialize,
    }),
  };
};

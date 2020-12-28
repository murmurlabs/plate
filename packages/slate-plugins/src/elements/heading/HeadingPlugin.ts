import { getOnHotkeyToggleNodeTypeDefault } from "@udecode/slate-plugins-common";
import { SlatePlugin } from "@udecode/slate-plugins-core";
import { DEFAULTS_HEADING } from "./defaults";
import { deserializeHeading } from "./deserializeHeading";
import { renderElementHeading } from "./renderElementHeading";
import { HeadingPluginOptions } from "./types";

/**
 * Enables support for headings with configurable levels
 * (from 1 to 6).
 */
export const HeadingPlugin = (options?: HeadingPluginOptions): SlatePlugin => ({
  renderElement: renderElementHeading(options),
  deserialize: deserializeHeading(options),
  onKeyDown: getOnHotkeyToggleNodeTypeDefault({
    key: "h1",
    defaultOptions: DEFAULTS_HEADING,
    options,
  }),
});

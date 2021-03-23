/** @jsx jsx */

import { isBlockAboveEmpty } from '@udecode/slate-plugins-common';
import { jsx } from '@udecode/slate-plugins-test-utils';
import * as isHotkey from 'is-hotkey';
import { Editor } from 'slate';
import { options } from '../../../../stories/config/pluginOptions';
import { ELEMENT_CODE_BLOCK } from '../../../elements/code-block/src/defaults';
import { onKeyDownResetNode } from '../onKeyDownResetNode';

const input = ((
  <editor>
    <hcode>
      <htext />
      <cursor />
    </hcode>
  </editor>
) as any) as Editor;

const output = (
  <editor>
    <hp>
      <htext />
      <cursor />
    </hp>
  </editor>
) as any;

it('should render', () => {
  jest.spyOn(isHotkey, 'default').mockReturnValue(true);

  onKeyDownResetNode({
    rules: [
      {
        types: [ELEMENT_CODE_BLOCK],
        defaultType: options.p.type,
        hotkey: 'Enter',
        predicate: isBlockAboveEmpty,
      },
    ],
  })(input)(new KeyboardEvent('keydown'));

  expect(input.children).toEqual(output.children);
});
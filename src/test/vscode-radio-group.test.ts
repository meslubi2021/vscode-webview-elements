import {VscodeRadioGroup} from '../vscode-radio-group';
import {expect} from '@open-wc/testing';

describe('vscode-radio-group', () => {
  it('is defined', () => {
    const el = document.createElement('vscode-radio-group');
    expect(el).to.instanceOf(VscodeRadioGroup);
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Column from './index';

const findByTestAttr = (wrapper, attrVal) => {
  return wrapper.find(`[data-test='${attrVal}']`);
};

describe('GridUI Column', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Column>
      <div data-test="child" />
    </Column>);
  });

  it('Should render without errors', () => {
    const column = findByTestAttr(wrapper, 'column');
    expect(column.length).to.equal(1);
  });

  it('Should render children', () => {
    const child = findByTestAttr(wrapper, 'child');
    expect(child.length).to.equal(1);
  });
});

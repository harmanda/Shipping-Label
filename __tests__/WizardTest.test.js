/* global describe, beforeEach, it, expect */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ShippingInfoWizard from 'core/components/wizard/ShippingInfoWizard';


let shallowWrapper;
let mountWrapper;

const props = {wizardContext:{},
steps:{}, onComplete : () => {} };

describe('<ShippingInfoWizard Test Suite />', () => {
 
  beforeEach(() => {
    shallowWrapper = shallow(<ShippingInfoWizard {...props} />);
  
  });

  it('renders without exploding', () => {
    expect(shallowWrapper.length).toEqual(1);
  });

 
  // it('Contains Grommet Component', () => {
  //   expect(shallowWrapper.find('Box').length).toBe(1);
  //   expect(shallowWrapper.find('Heading').length).toBe(1);
  //  // expect(shallowWrapper.find('Button').length).toBe(1);
  // });
});

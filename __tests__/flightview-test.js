/* eslint-disable no-unused-vars */

jest.unmock('../components/FlightViewer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import FlightViewer from '../components/FlightViewer';


describe('FlightViewer', () => {
     
  const output = TestUtils.renderIntoDocument(
    <FlightViewer apiSource="http://ejtestbed.herokuapp.com/flights" />
  );

  const theNode = ReactDOM.findDOMNode(output); 

    
  it('Has the correct text', () => {
    var textNode = [].slice.call(theNode.querySelectorAll('h2')).map(h => h.textContent);
    expect(textNode).toEqual(['Our Latest Cheapest Flights']);
  });



});
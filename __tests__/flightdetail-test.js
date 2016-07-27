/* eslint-disable no-unused-vars */

jest.unmock('../components/DetailFlightInfo');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import DetailFlightInfo from '../components/DetailFlightInfo';

let theData = {
    "id": "testId",
    "localDepartureTime": "2016-06-30T06:40:00",
    "localArrivalTime": "2016-06-30T09:35:00",
    "prices": {
      "adult": { "value": 46.99, "valueWithDebitCard": 59.99, "valueWithCreditCard": 61.19 },
      "child": { "value": 46.99, "valueWithDebitCard": 59.99, "valueWithCreditCard": 61.19 },
      "infant": null
    }
  };

     
  const output = TestUtils.renderIntoDocument(
    <DetailFlightInfo data={theData} />
  );

  const theNode = ReactDOM.findDOMNode(output); 


describe('DetailFlightInfo', () => {

  it('Has the correct book & close text', () => {
    var textNode = [].slice.call(theNode.querySelectorAll('.button')).map(h => h.textContent);
    expect(textNode).toEqual(['Book Now', 'Close']);
  });

  it('Has the correct values', () => {
    var textNode = [].slice.call(theNode.querySelectorAll('.flight--arrival-time')).map(h => h.textContent);
     expect(textNode).toEqual(['Arriving: 10:35 30/6/2016']); //BST
   });


});
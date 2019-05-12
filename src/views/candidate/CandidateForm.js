// This is an uncontrolled React form, which is way simpler than
// the normal React controlled form
// https://reactjs.org/docs/uncontrolled-components.html
//
// You can use browser form validation these days, and just
// get the values from the form on submit.

import React from 'react';

import { FormRow, FormLabel, TextInput } from '../../ui-elements';
import { GiftSelect } from '../common';

class CandidateForm extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      firstGift,
      secondGift,
      thirdGift,
    } = event.target.elements;
    const values = {
      firstName: firstName.value,
      lastName: lastName.value,
      gifts: [firstGift.value, secondGift.value, thirdGift.value],
    };
    this.props.onSubmit(values);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormRow>
          <FormLabel for="firstName">First name</FormLabel>
          <TextInput type="text" name="firstName" required />
        </FormRow>
        <FormRow>
          <FormLabel for="lastName">Last name</FormLabel>
          <TextInput type="text" name="lastName" required />
        </FormRow>
        <FormRow>
          <FormLabel for="firstGift">First gift</FormLabel>
          <GiftSelect name="firstGift" />
        </FormRow>
        <FormRow>
          <FormLabel for="secondGift">Second gift</FormLabel>
          <GiftSelect name="secondGift" />
        </FormRow>
        <FormRow>
          <FormLabel for="thirdGift">Third gift</FormLabel>
          <GiftSelect name="thirdGift" />
        </FormRow>
        <button type="submit">Save candidate</button>
      </form>
    );
  }
}

export default CandidateForm;

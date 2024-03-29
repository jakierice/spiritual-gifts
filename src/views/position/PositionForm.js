// This is an uncontrolled React form, which is way simpler than
// the normal React controlled form
// https://reactjs.org/docs/uncontrolled-components.html
//
// You can use browser form validation these days, and just
// get the values from the form on submit.

import React from 'react';

import { Button, FormRow, FormLabel, TextInput } from '../../ui-elements';
import { GiftSelect } from '../common';

class PositionForm extends React.Component {
  onSubmit = event => {
    event.preventDefault();
    const { title, firstGift, secondGift, thirdGift } = event.target.elements;
    const values = {
      title: title.value,
      gifts: [firstGift.value, secondGift.value, thirdGift.value],
    };
    this.props.onSubmit(values);
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormRow>
          <FormLabel for="title">Position Title</FormLabel>
          <TextInput
            type="text"
            name="title"
            defaultValue={this.props.post ? this.props.post.title : ''}
            required
          />
        </FormRow>
        <FormRow>
          <FormLabel for="title">First gift</FormLabel>
          <GiftSelect name="firstGift" />
        </FormRow>
        <FormRow>
          <FormLabel for="title">Second gift</FormLabel>
          <GiftSelect name="secondGift" />
        </FormRow>
        <FormRow>
          <FormLabel for="title">Third gift</FormLabel>
          <GiftSelect name="thirdGift" />
        </FormRow>
        <Button type="submit">Save position</Button>
      </form>
    );
  }
}

export default PositionForm;

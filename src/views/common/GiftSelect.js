import React from 'react';
import { Select } from '../../ui-elements';

function PositionSelect({ name }) {
  return (
    <Select name={name}>
      <option value="administration">Administration</option>
      <option value="apostleship">Apostleship</option>
      <option value="discernment">Discernment</option>
      <option value="evangelism">Evangelism</option>
      <option value="exhortation">Exhortation</option>
      <option value="faith">Faith</option>
      <option value="giving">Giving</option>
      <option value="healing">Healing</option>
      <option value="interpretationOfTongues">Interpretation of Tongues</option>
      <option value="knowledge">Knowledge</option>
      <option value="leadership">Leadership</option>
      <option value="mercy">Mercy</option>
      <option value="miracles">Miracles</option>
      <option value="pastorShepherd">Pastor/Shepherd</option>
      <option value="prophecy">Prophecy</option>
      <option value="servingMinistering">Serving/Ministering</option>
      <option value="teaching">Teaching</option>
      <option value="tongues">Tongues</option>
      <option value="wisdom">Wisdom</option>
    </Select>
  );
}

export default PositionSelect;

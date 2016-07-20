// 点击次数组件

import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import Counts from '../api/collections.js';

const CountView = ({count}) => <p>点击次数: {count}</p>

export default CountContainer = createContainer(({ params }) => {
  const handle = Meteor.subscribe('counts.public'); // 订阅数据
  if (handle.ready()) {
    return {
      count: Counts.findOne({ fieldName: "countTest"}).count
    }
  }
  return {count: 0}
}, CountView);

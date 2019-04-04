import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});


//this test originally uses react-test-renderer. It allows us to virtually render our components inside of just regular javascript code and then we can assert something about what got rendered. react-test-renderer is a react library created by the react team.

//There are to main ways to test react component. One is called shallow rendering, and the other is called full DOM rendering. (full DOM rendering is more suitable if user interaction and lifecycle events are of concern.)

//import ReactShallowRenderer from 'react-test-renderer/shallow';

// test('should render Header correctly',()=>{
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header />);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });


//Later on, we switched to enzyme for better DOM testing. Enzyme is provided by Airbnb. Enzyme gives us a much more full featured user friendly API

//We also installed enzyme-to-json. This allows us to just test the rendered output of our react components. Without this, our snapshot will included all the stuff related to the internals library of Enzyme. This is not ideal, since if Enzyme internal stuff changes, or updates, then all of our test snapshot will fail. 


//Instead of having to  import enzyme-to-json for every test suite and wrap our wrapper like such toJson(wrapper):- 

//import toJson from 'enzyme-to-json'

// test('should render Header correctly',()=>{
//   const wrapper = shallow(<Header />)
//   expect(toJson(wrapper)).toMatchSnapshot();
// });

//we will tweak our jest.config.json, and add a serializer command. 

//Now our test suite will run toJson automatically. See below:
// test('should render Header correctly',()=>{
//   const wrapper = shallow(<Header />)
//   expect(wrapper).toMatchSnapshot();
// });

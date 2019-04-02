import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

Enzyme.configure({
  adapter: new Adapter()
});

DotEnv.config({
  path: '.env.test'
});
//check section 12 lecture 119


//This file is  a set up test file in our project and this is going to be something that allows us to configure our test environment.

//This is where we're going to be able to set up the enzyme adapter and we'll just do it once in the setup file as opposed to doing it every single time we use enzyme to get that done.

//we're going to do is import enzyme, enzyme adapter and we're going to call a single method to actually wire up enzyme to work with the adapter.

//Now "enzyme.configure" can take all sorts of attributes. We are going to pass in as the first and only argument:- an object.

// And on this object we can specify various configuration properties adapter's pretty much the only one you're ever actually going to use.

//So that would be new adapter calling it with no arguments and there we have it.

//This is all we need for these set up tests file.

//More info on this at airbnb.io/enzyme/

//This file will be used in conjunction with JEST setup files, i.e. jest.config.json. Please go there and have a look.

//Lastly, we edited package.json and edited our test script with:- "jest --config=jest.config.json"
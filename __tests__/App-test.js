/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Cards from '../src/components/Cards';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyModal from '../src/components/MyModal';
import HomeScreen from '../src/screens/HomeScreen';
import { shallow } from 'enzyme';

test('renders correctly', () => {
  const tree = renderer.create(<MyModal />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Shallow test', () => {
  it('App should have ten <Cards /> components', () => {
    const app = shallow(<HomeScreen />);
    expect(app.find('Cards')).to.have.length(3);
  });
});

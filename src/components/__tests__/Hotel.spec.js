import React from 'react';
import {shallow} from 'enzyme';
import Hotel from '../Hotel';
import {BrowserRouter as Router} from 'react-router-dom';


const mockedProps ={
    element: {
id: 87,
title: 'Test hotel',
image: 'https://r-cf.bstatic.com/images/hotel/max1024x768/167/167741036.jpg',
price: 100,
location: 'Test location',
    },
    removable: true
}

describe('<Hotel />', () => {
let component;

beforeAll(()=>{
    component = shallow(<Hotel {...mockedProps} />)
})

it('should render hotel title', ()=>{


expect(component.find('.hotel-name').text()).toBe(mockedProps.element.title);
});
});
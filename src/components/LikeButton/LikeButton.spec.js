import React from 'react';
import {shallow} from 'enzyme';
import {LikeButton} from './LikeButton';

const mockedProps = {
hotel: {
    id: 86,
},
addToFavourites: jest.fn(),
favourites: []
};

describe('<LikeButton />', () => {

let component;

beforeEach(() => {
component = shallow(<LikeButton {...mockedProps}/>)
})

    it('should render button', () => {
        expect(component.find('.fav-button').exists()).toBeTruthy()
    })

    it('should click the button',() => {
        component.find('fav-button').simulate('click');
        const instance = component.instance();
        expect(instance.handleClick).toHaveBeenCalled();
    })
})

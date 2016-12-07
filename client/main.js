import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.Gallery.onCreated(function() {
    Session.set('selectedImage', 'house');
});
Template.Menu.helpers({
    isSelected(item) {
        return Session.equals('selectedImage', item) ? 'selected' : '';
    }
})

Template.Gallery.helpers({
    getImage() {
        switch(Session.get('selectedImage')) {
            case 'house':
                return 'house.jpg'
                break;
            case 'car':
                return 'car.jpg'
                break;
            case 'lamp':
                return 'lamp.jpg'
                break;
            case 'horse':
                return 'horse.jpg'
                break;
            case 'stone':
                return 'stone.jpg'
                break;
        }
    }
});

Template.Menu.events({
    'click #house'(event) {
        event.preventDefault();
        Session.set('selectedImage', 'house');
    },
    'click #car'(event) {
        Session.set('selectedImage', 'car');
    },
    'click #lamp'(event) {
        Session.set('selectedImage', 'lamp');
    },
    'click #horse'(event) {
        Session.set('selectedImage', 'horse');
    },
    'click #stone'(event) {
        Session.set('selectedImage', 'stone');
    }
});

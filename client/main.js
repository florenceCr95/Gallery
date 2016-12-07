import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.Menu.helpers({
    isSelected(item) {
        return Session.equals('selectedImage', item) ? 'selected' : '';
    },
    menuClass(item) {
        switch(Session.get('selectedImage')) {
            case 'house':
                return item == 'car' || item == 'lamp' || item == 'horse' || item == 'stone' ? 'right' : 'left';
                break;
            case 'car':
                return item == 'lamp' || item == 'horse' || item == 'stone' ? 'right' : 'left';
                break;
            case 'lamp':
                return item == 'horse' || item == 'stone' ? 'right' : 'left';
                break;
            case 'horse':
                return item == 'stone' ? 'right' : 'left';
                break;
            case 'stone':
                return item !== 'stone' ? 'left' : 'right';
                break;
        }
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

Template.Gallery.events({
    'click .arrow-left'(event) {
        switch(Session.get('selectedImage')) {
            case 'house':
                Session.set('selectedImage', 'stone');
                break;
            case 'car':
                Session.set('selectedImage', 'house');
                break;
            case 'lamp':
                Session.set('selectedImage', 'car');
                break;
            case 'horse':
                Session.set('selectedImage', 'lamp');
                break;
            case 'stone':
                Session.set('selectedImage', 'horse');
                break;
        }
    },
    'click .arrow-right'(event) {
        switch(Session.get('selectedImage')) {
            case 'house':
                Session.set('selectedImage', 'car');
                break;
            case 'car':
                Session.set('selectedImage', 'lamp');
                break;
            case 'lamp':
                Session.set('selectedImage', 'horse');
                break;
            case 'horse':
                Session.set('selectedImage', 'stone');
                break;
            case 'stone':
                Session.set('selectedImage', 'house');
                break;
        }
    }
});

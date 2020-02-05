import {NativeModules} from 'react-native';

const date = new Date();

const CalendarManager = NativeModules.CalendarManager;

function calendarEvent() {
  CalendarManager.addEvent('Birthday Party', {
    location: '4 Privet Drive, Surrey',
    time: date.toISOString(),
    description: '...',
  });
}

export {calendarEvent};

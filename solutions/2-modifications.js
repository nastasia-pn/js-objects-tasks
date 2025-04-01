import _ from 'lodash';

// BEGIN
export default function normalize(lesson) {
  lesson.name = lesson.name.charAt(0).toUpperCase() + lesson.name.slice(1).toLowerCase();
  lesson.description = lesson.description.toLowerCase();
}
  // END
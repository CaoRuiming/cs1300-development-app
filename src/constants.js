import cs1230 from './thumbnails/cs1230.jpg';
import cs1250 from './thumbnails/cs1250.jpg';
import cs1290 from './thumbnails/cs1290.jpg';
import cs1300 from './thumbnails/cs1300.jpg';
import cs1410 from './thumbnails/cs1410.jpg';
import cs1420 from './thumbnails/cs1420.jpg';
import cs1430 from './thumbnails/cs1430.jpg';
import cs1470 from './thumbnails/cs1470.jpg';
import cs1570 from './thumbnails/cs1570.jpg';
import cs1730 from './thumbnails/cs1730.jpg';
import cs1950y from './thumbnails/cs1950y.jpg';
import cs1951a from './thumbnails/cs1951a.jpg';

export const TRACK = Object.freeze({
  ALL: 'All',
  VISUAL: 'Visual Computing',
  AI: 'Artificial Intelligence',
  PRINCIPLES: 'Software Principles',
});

export const SEMESTER = Object.freeze({
  ALL: 'All',
  FALL: 'Fall',
  SPRING: 'Spring',
});

export const SORT = Object.freeze({
  DEFAULT: 'Default',
  HOURS_ASC: 'Weekly Hours (Acending)',
  HOURS_DESC: 'Weekly Hours (Decending)',
});

const ITEMS = [
  {
    id: 'cs1230',
    image: cs1230,
    name: 'Introduction to Computer Graphics',
    courseCode: 'CSCI 1230',
    weeklyHours: 15.07,
    semester: SEMESTER.FALL,
    track: TRACK.VISUAL,
  },
  {
    id: 'cs1250',
    image: cs1250,
    name: 'Computer Animation',
    courseCode: 'CSCI 1250',
    weeklyHours: 12.6,
    semester: SEMESTER.FALL,
    track: TRACK.VISUAL,
  },
  {
    id: 'cs1290',
    image: cs1290,
    name: 'Computational Photography',
    courseCode: 'CSCI 1290',
    weeklyHours: 6.85,
    semester: SEMESTER.FALL,
    track: TRACK.VISUAL,
  },
  {
    id: 'cs1300',
    image: cs1300,
    name: 'User Interfaces and User Experience',
    courseCode: 'CSCI 1300',
    weeklyHours: 5,
    semester: SEMESTER.FALL,
    track: TRACK.VISUAL,
  },
  {
    id: 'cs1410',
    image: cs1410,
    name: 'Artificial Intelligence',
    courseCode: 'CSCI 1410',
    weeklyHours: 6.3,
    semester: SEMESTER.FALL,
    track: TRACK.AI,
  },
  {
    id: 'cs1420',
    image: cs1420,
    name: 'Machine Learning',
    courseCode: 'CSCI 1420',
    weeklyHours: 7.73,
    semester: SEMESTER.SPRING,
    track: TRACK.AI,
  },
  {
    id: 'cs1430',
    image: cs1430,
    name: 'Computer Vision',
    courseCode: 'CSCI 1430',
    weeklyHours: 8.15,
    semester: SEMESTER.SPRING,
    track: TRACK.AI,
  },
  {
    id: 'cs1470',
    image: cs1470,
    name: 'Deep Learning',
    courseCode: 'CSCI 1470',
    weeklyHours: 7.44,
    semester: SEMESTER.FALL,
    track: TRACK.AI,
  },
  {
    id: 'cs1570',
    image: cs1570,
    name: 'Algorithms',
    courseCode: 'CSCI 1570',
    weeklyHours: 16.18,
    semester: SEMESTER.FALL,
    track: TRACK.PRINCIPLES,
  },
  {
    id: 'cs1730',
    image: cs1730,
    name: 'Programming Languages',
    courseCode: 'CSCI 1730',
    weeklyHours: 6.45,
    semester: SEMESTER.FALL,
    track: TRACK.PRINCIPLES,
  },
  {
    id: 'cs1950y',
    image: cs1950y,
    name: 'Logic for Systems',
    courseCode: 'CSCI 1950Y',
    weeklyHours: 5.86,
    semester: SEMESTER.SPRING,
    track: TRACK.PRINCIPLES,
  },
  {
    id: 'cs1951a',
    image: cs1951a,
    name: 'Data Science',
    courseCode: 'CSCI 1951A',
    weeklyHours: 8.37,
    semester: SEMESTER.SPRING,
    track: TRACK.AI,
  },
];

export default ITEMS;

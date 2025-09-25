import type { Chronology } from './types';

export const chronology: Chronology = [
  {
    month: 'Enero',
    events: [
      { id: 'enero-3-raw', type: 'RAW', day: 3, date: '3 de enero, 2000', location: 'Miami, FL', matches: [], venue: 'AmericanAirlines Arena' },
      { id: 'enero-6-smackdown', type: 'SmackDown', day: 6, date: '6 de enero, 2000', location: 'Orlando, FL', matches: [], venue: 'Orlando Arena' },
      { id: 'enero-10-raw', type: 'RAW', day: 10, date: '10 de enero, 2000', location: 'St. Louis, MO', matches: [], venue: 'Kiel Center' },
      { id: 'enero-13-smackdown', type: 'SmackDown', day: 13, date: '13 de enero, 2000', location: 'Chicago, IL', matches: [], venue: 'United Center' },
      { id: 'enero-17-raw', type: 'RAW', day: 17, date: '17 de enero, 2000', location: 'New Haven, CT', matches: [], venue: 'New Haven Coliseum' },
      { id: 'enero-20-smackdown', type: 'SmackDown', day: 20, date: '20 de enero, 2000', location: 'Providence, RI', matches: [], venue: 'Providence Civic Center' },
      {
        id: 'enero-23-ppv',
        type: 'PPV',
        name: 'Royal Rumble',
        day: 23,
        date: '23 de enero, 2000',
        location: 'New York, NY',
        venue: 'Madison Square Garden',
        matches: [
          { participants: ['Tazz', 'Kurt Angle'] },
          { participants: ['The Hardy Boyz', 'The Dudley Boyz'], stipulation: 'Tables Match' },
          { participants: ['Triple H', 'Cactus Jack'], title: 'WWF Championship', stipulation: 'Street Fight' },
          { participants: ['30-Man Royal Rumble Match'], title: 'Winner gets a WWF Championship match at WrestleMania' },
        ],
      },
      { id: 'enero-24-raw', type: 'RAW', day: 24, date: '24 de enero, 2000', location: 'Philadelphia, PA', matches: [], venue: 'First Union Center' },
      { id: 'enero-27-smackdown', type: 'SmackDown', day: 27, date: '27 de enero, 2000', location: 'Baltimore, MD', matches: [], venue: 'Baltimore Arena' },
      { id: 'enero-31-raw', type: 'RAW', day: 31, date: '31 de enero, 2000', location: 'Pittsburgh, PA', matches: [], venue: 'Civic Arena' },
    ],
  },
  {
    month: 'Febrero',
    events: [
      { id: 'febrero-3-smackdown', type: 'SmackDown', day: 3, date: '3 de febrero, 2000', location: 'Detroit, MI', matches: [], venue: 'Joe Louis Arena' },
      { id: 'febrero-7-raw', type: 'RAW', day: 7, date: '7 de febrero, 2000', location: 'Dallas, TX', matches: [], venue: 'Reunion Arena' },
      { id: 'febrero-10-smackdown', type: 'SmackDown', day: 10, date: '10 de febrero, 2000', location: 'Austin, TX', matches: [], venue: 'Frank Erwin Center' },
      { id: 'febrero-14-raw', type: 'RAW', day: 14, date: '14 de febrero, 2000', location: 'San Jose, CA', matches: [], venue: 'San Jose Arena' },
      { id: 'febrero-17-smackdown', type: 'SmackDown', day: 17, date: '17 de febrero, 2000', location: 'Fresno, CA', matches: [], venue: 'Selland Arena' },
      { id: 'febrero-21-raw', type: 'RAW', day: 21, date: '21 de febrero, 2000', location: 'Atlanta, GA', matches: [], venue: 'Georgia Dome' },
      { id: 'febrero-24-smackdown', type: 'SmackDown', day: 24, date: '24 de febrero, 2000', location: 'Nashville, TN', matches: [], venue: 'Gaylord Entertainment Center' },
      { id: 'febrero-27-ppv', type: 'PPV', name: 'No Way Out', day: 27, date: '27 de febrero, 2000', location: 'Hartford, CT', venue: 'Hartford Civic Center', matches: [] },
      { id: 'febrero-28-raw', type: 'RAW', day: 28, date: '28 de febrero, 2000', location: 'Hartford, CT', matches: [], venue: 'Hartford Civic Center' },
    ],
  },
  {
    month: 'Marzo',
    events: [
        { id: 'marzo-2-smackdown', type: 'SmackDown', day: 2, date: '2 de marzo, 2000', location: 'Trenton, NJ', matches: [], venue: 'Sovereign Bank Arena' },
        { id: 'marzo-6-raw', type: 'RAW', day: 6, date: '6 de marzo, 2000', location: 'Springfield, MA', matches: [], venue: 'Springfield Civic Center' },
        { id: 'marzo-9-smackdown', type: 'SmackDown', day: 9, date: '9 de marzo, 2000', location: 'Boston, MA', matches: [], venue: 'FleetCenter' },
        { id: 'marzo-13-raw', type: 'RAW', day: 13, date: '13 de marzo, 2000', location: 'East Rutherford, NJ', matches: [], venue: 'Continental Airlines Arena' },
        { id: 'marzo-16-smackdown', type: 'SmackDown', day: 16, date: '16 de marzo, 2000', location: 'Uniondale, NY', matches: [], venue: 'Nassau Coliseum' },
        { id: 'marzo-20-raw', type: 'RAW', day: 20, date: '20 de marzo, 2000', location: 'Chicago, IL', matches: [], venue: 'Allstate Arena' },
        { id: 'marzo-23-smackdown', type: 'SmackDown', day: 23, date: '23 de marzo, 2000', location: 'Milwaukee, WI', matches: [], venue: 'Bradley Center' },
        { id: 'marzo-27-raw', type: 'RAW', day: 27, date: '27 de marzo, 2000', location: 'Houston, TX', matches: [], venue: 'Compaq Center' },
        { id: 'marzo-30-smackdown', type: 'SmackDown', day: 30, date: '30 de marzo, 2000', location: 'San Antonio, TX', matches: [], venue: 'Alamodome' },
    ]
  },
  {
      month: 'Abril',
      events: [
        {
            id: 'abril-2-ppv',
            type: 'PPV',
            name: 'WrestleMania 2000',
            day: 2,
            date: '2 de abril, 2000',
            location: 'Anaheim, CA',
            venue: 'Arrowhead Pond',
            matches: [
                { participants: ['Edge & Christian', 'The Hardy Boyz', 'The Dudley Boyz'], title: 'WWF Tag Team Championship', stipulation: 'Triangle Ladder Match' },
                { participants: ['Triple H', 'The Rock', 'Mick Foley', 'Big Show'], title: 'WWF Championship', stipulation: 'Fatal Four-Way Elimination Match' }
            ],
        },
        { id: 'abril-3-raw', type: 'RAW', day: 3, date: '3 de abril, 2000', location: 'Los Angeles, CA', matches: [], venue: 'Staples Center' },
        { id: 'abril-6-smackdown', type: 'SmackDown', day: 6, date: '6 de abril, 2000', location: 'San Jose, CA', matches: [], venue: 'San Jose Arena' },
        { id: 'abril-10-raw', type: 'RAW', day: 10, date: '10 de abril, 2000', location: 'Fort Lauderdale, FL', matches: [], venue: 'National Car Rental Center' },
        { id: 'abril-13-smackdown', type: 'SmackDown', day: 13, date: '13 de abril, 2000', location: 'Tampa, FL', matches: [], venue: 'Ice Palace' },
        { id: 'abril-17-raw', type: 'RAW', day: 17, date: '17 de abril, 2000', location: 'State College, PA', matches: [], venue: 'Bryce Jordan Center' },
        { id: 'abril-20-smackdown', type: 'SmackDown', day: 20, date: '20 de abril, 2000', location: 'Philadelphia, PA', matches: [], venue: 'First Union Center' },
        { id: 'abril-24-raw', type: 'RAW', day: 24, date: '24 de abril, 2000', location: 'Raleigh, NC', matches: [], venue: 'Raleigh Entertainment & Sports Arena' },
        { id: 'abril-27-smackdown', type: 'SmackDown', day: 27, date: '27 de abril, 2000', location: 'Charlotte, NC', matches: [], venue: 'Charlotte Coliseum' },
        { id: 'abril-30-ppv', type: 'PPV', name: 'Backlash', day: 30, date: '30 de abril, 2000', location: 'Washington, D.C.', venue: 'MCI Center', matches: [] },
      ]
  },
  {
      month: 'Mayo',
      events: [
        { id: 'mayo-1-raw', type: 'RAW', day: 1, date: '1 de mayo, 2000', location: 'Baltimore, MD', matches: [], venue: 'Baltimore Arena' },
        { id: 'mayo-4-smackdown', type: 'SmackDown', day: 4, date: '4 de mayo, 2000', location: 'Richmond, VA', matches: [], venue: 'Richmond Coliseum' },
        { id: 'mayo-6-ppv', type: 'PPV', name: 'Insurrextion', day: 6, date: '6 de mayo, 2000', location: 'London, England', venue: 'Earls Court', matches: [] },
        { id: 'mayo-8-raw', type: 'RAW', day: 8, date: '8 de mayo, 2000', location: 'Uniondale, NY', matches: [], venue: 'Nassau Coliseum' },
        { id: 'mayo-11-smackdown', type: 'SmackDown', day: 11, date: '11 de mayo, 2000', location: 'New Haven, CT', matches: [], venue: 'New Haven Coliseum' },
        { id: 'mayo-15-raw', type: 'RAW', day: 15, date: '15 de mayo, 2000', location: 'Cleveland, OH', matches: [], venue: 'Gund Arena' },
        { id: 'mayo-18-smackdown', type: 'SmackDown', day: 18, date: '18 de mayo, 2000', location: 'Detroit, MI', matches: [], venue: 'Joe Louis Arena' },
        { id: 'mayo-21-ppv', type: 'PPV', name: 'Judgment Day', day: 21, date: '21 de mayo, 2000', location: 'Louisville, KY', venue: 'Freedom Hall', matches: [] },
        { id: 'mayo-22-raw', type: 'RAW', day: 22, date: '22 de mayo, 2000', location: 'Indianapolis, IN', matches: [], venue: 'Conseco Fieldhouse' },
        { id: 'mayo-25-smackdown', type: 'SmackDown', day: 25, date: '25 de mayo, 2000', location: 'Evansville, IN', matches: [], venue: 'Roberts Municipal Stadium' },
        { id: 'mayo-29-raw', type: 'RAW', day: 29, date: '29 de mayo, 2000', location: 'Vancouver, BC, Canada', matches: [], venue: 'General Motors Place' },
      ]
  },
  {
      month: 'Junio',
      events: [
        { id: 'junio-1-smackdown', type: 'SmackDown', day: 1, date: '1 de junio, 2000', location: 'Tacoma, WA', matches: [], venue: 'Tacoma Dome' },
        { id: 'junio-5-raw', type: 'RAW', day: 5, date: '5 de junio, 2000', location: 'St. Louis, MO', matches: [], venue: 'Kiel Center' },
        { id: 'junio-8-smackdown', type: 'SmackDown', day: 8, date: '8 de junio, 2000', location: 'Buffalo, NY', matches: [], venue: 'HSBC Arena' },
        { id: 'junio-12-raw', type: 'RAW', day: 12, date: '12 de junio, 2000', location: 'Chicago, IL', matches: [], venue: 'United Center' },
        { id: 'junio-15-smackdown', type: 'SmackDown', day: 15, date: '15 de junio, 2000', location: 'Chicago, IL', matches: [], venue: 'United Center' },
        { id: 'junio-19-raw', type: 'RAW', day: 19, date: '19 de junio, 2000', location: 'Nashville, TN', matches: [], venue: 'Gaylord Entertainment Center' },
        { id: 'junio-22-smackdown', type: 'SmackDown', day: 22, date: '22 de junio, 2000', location: 'Memphis, TN', matches: [], venue: 'Pyramid Arena' },
        { id: 'junio-25-ppv', type: 'PPV', name: 'King of the Ring', day: 25, date: '25 de junio, 2000', location: 'Boston, MA', venue: 'FleetCenter', matches: [] },
        { id: 'junio-26-raw', type: 'RAW', day: 26, date: '26 de junio, 2000', location: 'Worcester, MA', matches: [], venue: 'Worcester Centrum' },
        { id: 'junio-29-smackdown', type: 'SmackDown', day: 29, date: '29 de junio, 2000', location: 'Hartford, CT', matches: [], venue: 'Hartford Civic Center' },
      ]
  },
  {
      month: 'Julio',
      events: [
        { id: 'julio-3-raw', type: 'RAW', day: 3, date: '3 de julio, 2000', location: 'Fort Lauderdale, FL', matches: [], venue: 'National Car Rental Center' },
        { id: 'julio-6-smackdown', type: 'SmackDown', day: 6, date: '6 de julio, 2000', location: 'Orlando, FL', matches: [], venue: 'TD Waterhouse Centre' },
        { id: 'julio-10-raw', type: 'RAW', day: 10, date: '10 de julio, 2000', location: 'San Antonio, TX', matches: [], venue: 'Alamodome' },
        { id: 'julio-13-smackdown', type: 'SmackDown', day: 13, date: '13 de julio, 2000', location: 'Oakland, CA', matches: [], venue: 'The Arena in Oakland' },
        { id: 'julio-17-raw', type: 'RAW', day: 17, date: '17 de julio, 2000', location: 'Albany, NY', matches: [], venue: 'Pepsi Arena' },
        { id: 'julio-20-smackdown', type: 'SmackDown', day: 20, date: '20 de julio, 2000', location: 'Albany, NY', matches: [], venue: 'Pepsi Arena' },
        { id: 'julio-23-ppv', type: 'PPV', name: 'Fully Loaded', day: 23, date: '23 de julio, 2000', location: 'Dallas, TX', venue: 'Reunion Arena', matches: [] },
        { id: 'julio-24-raw', type: 'RAW', day: 24, date: '24 de julio, 2000', location: 'Austin, TX', matches: [], venue: 'Frank Erwin Center' },
        { id: 'julio-27-smackdown', type: 'SmackDown', day: 27, date: '27 de julio, 2000', location: 'Providence, RI', matches: [], venue: 'Providence Civic Center' },
        { id: 'julio-31-raw', type: 'RAW', day: 31, date: '31 de julio, 2000', location: 'Atlanta, GA', matches: [], venue: 'Philips Arena' },
      ]
  },
  {
      month: 'Agosto',
      events: [
        { id: 'agosto-3-smackdown', type: 'SmackDown', day: 3, date: '3 de agosto, 2000', location: 'Birmingham, AL', matches: [], venue: 'Birmingham-Jefferson Civic Center' },
        { id: 'agosto-7-raw', type: 'RAW', day: 7, date: '7 de agosto, 2000', location: 'New York, NY', matches: [], venue: 'Madison Square Garden' },
        { id: 'agosto-10-smackdown', type: 'SmackDown', day: 10, date: '10 de agosto, 2000', location: 'Chicago, IL', matches: [], venue: 'United Center' },
        { id: 'agosto-14-raw', type: 'RAW', day: 14, date: '14 de agosto, 2000', location: 'East Rutherford, NJ', matches: [], venue: 'Continental Airlines Arena' },
        { id: 'agosto-17-smackdown', type: 'SmackDown', day: 17, date: '17 de agosto, 2000', location: 'Sacramento, CA', matches: [], venue: 'ARCO Arena' },
        { id: 'agosto-21-raw', type: 'RAW', day: 21, date: '21 de agosto, 2000', location: 'Lafayette, LA', matches: [], venue: 'Cajundome' },
        { id: 'agosto-24-smackdown', type: 'SmackDown', day: 24, date: '24 de agosto, 2000', location: 'Fayetteville, NC', matches: [], venue: 'Cumberland County Crown Coliseum' },
        { id: 'agosto-27-ppv', type: 'PPV', name: 'SummerSlam', day: 27, date: '27 de agosto, 2000', location: 'Raleigh, NC', venue: 'Raleigh Entertainment & Sports Arena', matches: [] },
        { id: 'agosto-28-raw', type: 'RAW', day: 28, date: '28 de agosto, 2000', location: 'Greensboro, NC', matches: [], venue: 'Greensboro Coliseum' },
        { id: 'agosto-31-smackdown', type: 'SmackDown', day: 31, date: '31 de agosto, 2000', location: 'Hartford, CT', matches: [], venue: 'Hartford Civic Center' },
      ]
  },
  {
      month: 'Septiembre',
      events: [
        { id: 'septiembre-4-raw', type: 'RAW', day: 4, date: '4 de septiembre, 2000', location: 'Lexington, KY', matches: [], venue: 'Rupp Arena' },
        { id: 'septiembre-7-smackdown', type: 'SmackDown', day: 7, date: '7 de septiembre, 2000', location: 'Louisville, KY', matches: [], venue: 'Freedom Hall' },
        { id: 'septiembre-11-raw', type: 'RAW', day: 11, date: '11 de septiembre, 2000', location: 'Phoenix, AZ', matches: [], venue: 'America West Arena' },
        { id: 'septiembre-14-smackdown', type: 'SmackDown', day: 14, date: '14 de septiembre, 2000', location: 'Las Vegas, NV', matches: [], venue: 'Thomas & Mack Center' },
        { id: 'septiembre-18-raw', type: 'RAW', day: 18, date: '18 de septiembre, 2000', location: 'Detroit, MI', matches: [], venue: 'Joe Louis Arena' },
        { id: 'septiembre-21-smackdown', type: 'SmackDown', day: 21, date: '21 de septiembre, 2000', location: 'Nashville, TN', matches: [], venue: 'Gaylord Entertainment Center' },
        { id: 'septiembre-24-ppv', type: 'PPV', name: 'Unforgiven', day: 24, date: '24 de septiembre, 2000', location: 'Philadelphia, PA', venue: 'First Union Center', matches: [] },
        { id: 'septiembre-25-raw', type: 'RAW', day: 25, date: '25 de septiembre, 2000', location: 'State College, PA', matches: [], venue: 'Bryce Jordan Center' },
        { id: 'septiembre-28-smackdown', type: 'SmackDown', day: 28, date: '28 de septiembre, 2000', location: 'Pittsburgh, PA', matches: [], venue: 'Mellon Arena' },
      ]
  },
  {
      month: 'Octubre',
      events: [
        { id: 'octubre-2-raw', type: 'RAW', day: 2, date: '2 de octubre, 2000', location: 'Washington D.C.', matches: [], venue: 'MCI Center' },
        { id: 'octubre-5-smackdown', type: 'SmackDown', day: 5, date: '5 de octubre, 2000', location: 'Baltimore, MD', matches: [], venue: 'Baltimore Arena' },
        { id: 'octubre-9-raw', type: 'RAW', day: 9, date: '9 de octubre, 2000', location: 'Anaheim, CA', matches: [], venue: 'Arrowhead Pond' },
        { id: 'octubre-12-smackdown', type: 'SmackDown', day: 12, date: '12 de octubre, 2000', location: 'Los Angeles, CA', matches: [], venue: 'Staples Center' },
        { id: 'octubre-16-raw', type: 'RAW', day: 16, date: '16 de octubre, 2000', location: 'Detroit, MI', matches: [], venue: 'Joe Louis Arena' },
        { id: 'octubre-19-smackdown', type: 'SmackDown', day: 19, date: '19 de octubre, 2000', location: 'Cleveland, OH', matches: [], venue: 'Gund Arena' },
        { id: 'octubre-22-ppv', type: 'PPV', name: 'No Mercy', day: 22, date: '22 de octubre, 2000', location: 'Albany, NY', venue: 'Pepsi Arena', matches: [] },
        { id: 'octubre-23-raw', type: 'RAW', day: 23, date: '23 de octubre, 2000', location: 'Hartford, CT', matches: [], venue: 'Hartford Civic Center' },
        { id: 'octubre-26-smackdown', type: 'SmackDown', day: 26, date: '26 de octubre, 2000', location: 'Albany, NY', matches: [], venue: 'Pepsi Arena' },
        { id: 'octubre-30-raw', type: 'RAW', day: 30, date: '30 de octubre, 2000', location: 'Boston, MA', matches: [], venue: 'FleetCenter' },
      ]
  },
  {
      month: 'Noviembre',
      events: [
        { id: 'noviembre-2-smackdown', type: 'SmackDown', day: 2, date: '2 de noviembre, 2000', location: 'Rochester, NY', matches: [], venue: 'Blue Cross Arena' },
        { id: 'noviembre-6-raw', type: 'RAW', day: 6, date: '6 de noviembre, 2000', location: 'Houston, TX', matches: [], venue: 'Compaq Center' },
        { id: 'noviembre-9-smackdown', type: 'SmackDown', day: 9, date: '9 de noviembre, 2000', location: 'Chicago, IL', matches: [], venue: 'Allstate Arena' },
        { id: 'noviembre-13-raw', type: 'RAW', day: 13, date: '13 de noviembre, 2000', location: 'Columbus, OH', matches: [], venue: 'Schottenstein Center' },
        { id: 'noviembre-16-smackdown', type: 'SmackDown', day: 16, date: '16 de noviembre, 2000', location: 'Indianapolis, IN', matches: [], venue: 'Conseco Fieldhouse' },
        { id: 'noviembre-19-ppv', type: 'PPV', name: 'Survivor Series', day: 19, date: '19 de noviembre, 2000', location: 'Tampa, FL', venue: 'Ice Palace', matches: [] },
        { id: 'noviembre-20-raw', type: 'RAW', day: 20, date: '20 de noviembre, 2000', location: 'Orlando, FL', matches: [], venue: 'TD Waterhouse Centre' },
        { id: 'noviembre-23-smackdown', type: 'SmackDown', day: 23, date: '23 de noviembre, 2000', location: 'Tampa, FL', matches: [], venue: 'Ice Palace' },
        { id: 'noviembre-27-raw', type: 'RAW', day: 27, date: '27 de noviembre, 2000', location: 'Raleigh, NC', matches: [], venue: 'Raleigh Entertainment & Sports Arena' },
        { id: 'noviembre-30-smackdown', type: 'SmackDown', day: 30, date: '30 de noviembre, 2000', location: 'Charlotte, NC', matches: [], venue: 'Charlotte Coliseum' },
      ]
  },
  {
      month: 'Diciembre',
      events: [
        { id: 'diciembre-2-ppv', type: 'PPV', name: 'Rebellion', day: 2, date: '2 de diciembre, 2000', location: 'Sheffield, England', venue: 'Sheffield Arena', matches: [] },
        { id: 'diciembre-4-raw', type: 'RAW', day: 4, date: '4 de diciembre, 2000', location: 'East Rutherford, NJ', matches: [], venue: 'Continental Airlines Arena' },
        { id: 'diciembre-7-smackdown', type: 'SmackDown', day: 7, date: '7 de diciembre, 2000', location: 'San Jose, CA', matches: [], venue: 'San Jose Arena' },
        { id: 'diciembre-10-ppv', type: 'PPV', name: 'Armageddon', day: 10, date: '10 de diciembre, 2000', location: 'Birmingham, AL', venue: 'Birmingham-Jefferson Civic Center', matches: [] },
        { id: 'diciembre-11-raw', type: 'RAW', day: 11, date: '11 de diciembre, 2000', location: 'Memphis, TN', matches: [], venue: 'Pyramid Arena' },
        { id: 'diciembre-14-smackdown', type: 'SmackDown', day: 14, date: '14 de diciembre, 2000', location: 'Little Rock, AR', matches: [], venue: 'Alltel Arena' },
        { id: 'diciembre-18-raw', type: 'RAW', day: 18, date: '18 de diciembre, 2000', location: 'Greenville, SC', matches: [], venue: 'BI-LO Center' },
        { id: 'diciembre-21-smackdown', type: 'SmackDown', day: 21, date: '21 de diciembre, 2000', location: 'Durham, NC', matches: [], venue: 'Dean Smith Center' },
        { id: 'diciembre-25-raw', type: 'RAW', day: 25, date: '25 de diciembre, 2000', location: 'Chattanooga, TN', matches: [], venue: 'McKenzie Arena' },
        { id: 'diciembre-28-smackdown', type: 'SmackDown', day: 28, date: '28 de diciembre, 2000', location: 'San Antonio, TX', matches: [], venue: 'Alamodome' },
      ]
  }
].map(month => ({
    ...month,
    events: month.events.sort((a, b) => a.day - b.day)
}));

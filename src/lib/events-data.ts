
import type { Chronology } from './types';

export const chronology: Chronology = [
  {
    month: 'Enero',
    events: [
      { id: 'enero-3-raw', type: 'Raw', day: 3, date: '3 de enero, 2000', location: 'Miami, FL', venue: 'AmericanAirlines Arena', matches: [
          { participants: ['Triple H', 'Big Show'], title: 'WWF Championship' },
          { participants: ['Jeff Hardy', 'Al Snow'] },
          { participants: ['The Hollys', 'Chris Jericho & Chyna'] },
          { participants: ['The Rock', 'The New Age Outlaws & X-Pac'], stipulation: 'No DQ Handicap Match' },
        ]
      },
      { id: 'enero-6-smackdown', type: 'SmackDown', day: 6, date: '6 de enero, 2000', location: 'Orlando, FL', venue: 'Orlando Arena', matches: [
          { participants: ['The Rock', 'Triple H'], stipulation: 'WWF Title on the line in a Lumberjack match' },
          { participants: ['The Hollys', 'Chris Jericho & Chyna'], title: 'WWF Intercontinental Title' },
          { participants: ['Edge, Christian, and Jeff Hardy', 'The Dudley Boyz and Al Snow'] },
          { participants: ['Kurt Angle', 'Kane'] },
        ]
      },
      { id: 'enero-10-raw', type: 'Raw', day: 10, date: '10 de enero, 2000', location: 'St. Louis, MO', venue: 'Kiel Center', matches: [
          { participants: ['The Rock & The Acolytes', 'Triple H, X-Pac & The New Age Outlaws'] },
          { participants: ['The Hardy Boyz', 'The Dudley Boyz'] },
          { participants: ['Kurt Angle', 'Steve Blackman'] },
          { participants: ['Mankind', 'Big Show'], stipulation: 'Loser Leaves Town' }
        ]
      },
      { id: 'enero-13-smackdown', type: 'SmackDown', day: 13, date: '13 de enero, 2000', location: 'Chicago, IL', venue: 'United Center', matches: [
          { participants: ['The Rock & The Acolytes', 'The New Age Outlaws & X-Pac'] },
          { participants: ['Triple H', 'Big Show', 'The Rock', 'Kane'], stipulation: '4-Way Over The Top Rope Lumberjack Match' },
          { participants: ['Mankind', 'Al Snow'] },
          { participants: ['Edge & Christian', 'The Dudley Boyz'] }
        ]
      },
      { id: 'enero-17-raw', type: 'Raw', day: 17, date: '17 de enero, 2000', location: 'New Haven, CT', venue: 'New Haven Coliseum', matches: [
          { participants: ['The Rock', 'Rikishi'], stipulation: 'Over The Top Rope Challenge' },
          { participants: ['Triple H', 'Test'] },
          { participants: ['Chris Jericho', 'Hardcore Holly'], title: 'WWF Intercontinental Championship' },
          { participants: ['The New Age Outlaws', 'The Acolytes'] },
        ]
      },
      { id: 'enero-20-smackdown', type: 'SmackDown', day: 20, date: '20 de enero, 2000', location: 'Providence, RI', venue: 'Providence Civic Center', matches: [
          { participants: ['The Rock', 'Rikishi'], stipulation: 'No Holds Barred' },
          { participants: ['Triple H', 'The Godfather'] },
          { participants: ['The Hardy Boyz', 'The New Age Outlaws'] },
          { participants: ['Chris Jericho', 'Crash Holly'], title: 'WWF Intercontinental Title' }
        ]
      },
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
      { id: 'enero-24-raw', type: 'Raw', day: 24, date: '24 de enero, 2000', location: 'Philadelphia, PA', venue: 'First Union Center', matches: [
          { participants: ['The Rock', 'Big Show'], title: 'Winner is in the Royal Rumble' },
          { participants: ['Triple H', 'Cactus Jack'] },
          { participants: ['The Hardy Boyz', 'The New Age Outlaws'] },
          { participants: ['Chris Benoit', 'Test'] }
        ]
      },
      { id: 'enero-27-smackdown', type: 'SmackDown', day: 27, date: '27 de enero, 2000', location: 'Baltimore, MD', venue: 'Baltimore Arena', matches: [
          { participants: ['The Rock', 'Rikishi', 'Kane'], stipulation: 'Triple Threat Match' },
          { participants: ['Chris Benoit', 'Test'] },
          { participants: ['The Hardy Boyz', 'The Dudley Boyz'] },
          { participants: ['Triple H', 'Al Snow'] }
        ]
      },
      { id: 'enero-31-raw', type: 'Raw', day: 31, date: '31 de enero, 2000', location: 'Pittsburgh, PA', venue: 'Civic Arena', matches: [
          { participants: ['The Rock & Rikishi', 'Big Show & Chris Benoit'] },
          { participants: ['Triple H', 'Bubba Ray Dudley'] },
          { participants: ['Cactus Jack', 'Al Snow'] },
          { participants: ['Chris Jericho', 'Perry Saturn'] }
        ]
      },
    ],
  },
  {
    month: 'Febrero',
    events: [
      { id: 'febrero-3-smackdown', type: 'SmackDown', day: 3, date: '3 de febrero, 2000', location: 'Detroit, MI', venue: 'Joe Louis Arena', matches: [
          { participants: ['The Radicalz (Chris Benoit, Dean Malenko, Perry Saturn)', 'Too Cool & Rikishi'] },
          { participants: ['The Rock', 'Kurt Angle'] },
          { participants: ['Triple H & X-Pac', 'Cactus Jack & Kane'] }
        ]
      },
      { id: 'febrero-7-raw', type: 'Raw', day: 7, date: '7 de febrero, 2000', location: 'Dallas, TX', venue: 'Reunion Arena', matches: [
          { participants: ['Triple H, X-Pac & The Radicalz', 'Cactus Jack, The Rock, Rikishi & Too Cool'] },
          { participants: ['Kurt Angle', 'The Rock'] },
          { participants: ['The Dudley Boyz', 'The Hollys'] }
        ]
      },
      { id: 'febrero-10-smackdown', type: 'SmackDown', day: 10, date: '10 de febrero, 2000', location: 'Austin, TX', venue: 'Frank Erwin Center', matches: [
          { participants: ['The Rock & Cactus Jack', 'New Age Outlaws'] },
          { participants: ['Triple H', 'Rikishi'] },
          { participants: ['The Radicalz', 'The Hardy Boyz & Chris Jericho'] }
        ]
      },
      { id: 'febrero-14-raw', type: 'Raw', day: 14, date: '14 de febrero, 2000', location: 'San Jose, CA', venue: 'San Jose Arena', matches: [
          { participants: ['The Rock', 'Triple H'] },
          { participants: ['Cactus Jack', 'X-Pac'] },
          { participants: ['The Radicalz', 'The Hardy Boyz & The Dudley Boyz'] }
        ]
      },
      { id: 'febrero-17-smackdown', type: 'SmackDown', day: 17, date: '17 de febrero, 2000', location: 'Fresno, CA', venue: 'Selland Arena', matches: [
          { participants: ['The Rock, Cactus Jack & Kane', 'Triple H, X-Pac & Chris Benoit'] },
          { participants: ['Edge & Christian', 'The Dudley Boyz'] },
          { participants: ['Kurt Angle', 'Chyna'] }
        ]
      },
      { id: 'febrero-21-raw', type: 'Raw', day: 21, date: '21 de febrero, 2000', location: 'Atlanta, GA', venue: 'Georgia Dome', matches: [
          { participants: ['The Rock & Big Show', 'Triple H & X-Pac'] },
          { participants: ['Kurt Angle & The British Bulldog', 'Chris Jericho & Chyna'] },
          { participants: ['The Radicalz', 'Too Cool & Rikishi'] }
        ]
      },
      { id: 'febrero-24-smackdown', type: 'SmackDown', day: 24, date: '24 de febrero, 2000', location: 'Nashville, TN', venue: 'Gaylord Entertainment Center', matches: [
          { participants: ['The Rock', 'Big Show'], stipulation: 'No DQ Match' },
          { participants: ['Triple H', 'Cactus Jack'] },
          { participants: ['Kurt Angle', 'Test'] }
        ]
      },
      {
        id: 'febrero-27-ppv',
        type: 'PPV',
        name: 'No Way Out',
        day: 27,
        date: '27 de febrero, 2000',
        location: 'Hartford, CT',
        venue: 'Hartford Civic Center',
        matches: [
          { participants: ['Kurt Angle', 'Chris Jericho'], title: 'WWF Intercontinental Championship' },
          { participants: ['The Dudley Boyz', 'New Age Outlaws'], title: 'WWF Tag Team Championship' },
          { participants: ['Edge & Christian', 'The Hardy Boyz'] },
          { participants: ['Triple H', 'Cactus Jack'], title: 'WWF Championship', stipulation: 'Hell in a Cell Match' },
        ],
      },
      { id: 'febrero-28-raw', type: 'Raw', day: 28, date: '28 de febrero, 2000', location: 'Hartford, CT', venue: 'Hartford Civic Center', matches: [
          { participants: ['The Rock', 'Triple H'], title: 'WWF Championship' },
          { participants: ['The Hardy Boyz', 'The Acolytes'] },
          { participants: ['The Radicalz', 'Too Cool & Rikishi'] }
        ]
      },
    ],
  },
  {
    month: 'Marzo',
    events: [
        { id: 'marzo-2-smackdown', type: 'SmackDown', day: 2, date: '2 de marzo, 2000', location: 'Trenton, NJ', venue: 'Sovereign Bank Arena', matches: [
            { participants: ['The Rock', 'Chris Benoit'] },
            { participants: ['Triple H', 'The Godfather'] },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
        { id: 'marzo-6-raw', type: 'Raw', day: 6, date: '6 de marzo, 2000', location: 'Springfield, MA', venue: 'Springfield Civic Center', matches: [
            { participants: ['The Rock', 'Chris Benoit & Perry Saturn'], stipulation: 'Handicap Match' },
            { participants: ['Triple H', 'Kane'] },
            { participants: ['The Dudley Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'marzo-9-smackdown', type: 'SmackDown', day: 9, date: '9 de marzo, 2000', location: 'Boston, MA', venue: 'FleetCenter', matches: [
            { participants: ['The Rock', 'Triple H'], stipulation: 'Steel Cage Match' },
            { participants: ['Kurt Angle', 'Chris Jericho'] },
            { participants: ['The Hardy Boyz', 'The Radicalz'] }
          ]
        },
        { id: 'marzo-13-raw', type: 'Raw', day: 13, date: '13 de marzo, 2000', location: 'East Rutherford, NJ', venue: 'Continental Airlines Arena', matches: [
            { participants: ['The Rock', 'The Dudley Boyz'], stipulation: 'Handicap Tables Match' },
            { participants: ['Triple H', 'Big Show & The Brooklyn Brawler'], stipulation: 'Handicap Match' },
            { participants: ['Kurt Angle', 'Kane'] }
          ]
        },
        { id: 'marzo-16-smackdown', type: 'SmackDown', day: 16, date: '16 de marzo, 2000', location: 'Uniondale, NY', venue: 'Nassau Coliseum', matches: [
            { participants: ['The Rock & Big Show', 'Triple H & Kurt Angle'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] },
            { participants: ['Dean Malenko & Perry Saturn', 'The Dudley Boyz'] }
          ]
        },
        { id: 'marzo-20-raw', type: 'Raw', day: 20, date: '20 de marzo, 2000', location: 'Chicago, IL', venue: 'Allstate Arena', matches: [
            { participants: ['The Rock', 'Big Show'], stipulation: 'Lumberjack Match' },
            { participants: ['Triple H', 'The Hardy Boyz'], stipulation: 'Handicap Match' },
            { participants: ['The Dudley Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'marzo-23-smackdown', type: 'SmackDown', day: 23, date: '23 de marzo, 2000', location: 'Milwaukee, WI', venue: 'Bradley Center', matches: [
            { participants: ['The Rock & Mick Foley', 'Big Show & Triple H'] },
            { participants: ['The Hardy Boyz & The Dudley Boyz', 'Edge, Christian, T & A'] },
            { participants: ['Kurt Angle', 'Chris Jericho'] }
          ]
        },
        { id: 'marzo-27-raw', type: 'Raw', day: 27, date: '27 de marzo, 2000', location: 'Houston, TX', venue: 'Compaq Center', matches: [
            { participants: ['The Rock', 'Triple H'] },
            { participants: ['The Hardy Boyz', 'The Acolytes'] },
            { participants: ['Kane', 'Bull Buchanan'] }
          ]
        },
        { id: 'marzo-30-smackdown', type: 'SmackDown', day: 30, date: '30 de marzo, 2000', location: 'San Antonio, TX', venue: 'Alamodome', matches: [
            { participants: ['The Rock', 'Kurt Angle'] },
            { participants: ['Triple H & Big Show', 'Mick Foley & The Rock'] },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
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
                { participants: ['Chris Benoit', 'Kurt Angle', 'Chris Jericho'], title: 'Two-Fall Triple Threat Match for the Intercontinental and European Championships'},
                { participants: ['Triple H', 'The Rock', 'Mick Foley', 'Big Show'], title: 'WWF Championship', stipulation: 'Fatal Four-Way Elimination Match' }
            ],
        },
        { id: 'abril-3-raw', type: 'Raw', day: 3, date: '3 de abril, 2000', location: 'Los Angeles, CA', venue: 'Staples Center', matches: [
            { participants: ['The Rock', 'Triple H'], title: 'WWF Championship' },
            { participants: ['Kane', 'Bull Buchanan'] },
            { participants: ['The Radicalz', 'Too Cool & Rikishi'] }
          ]
        },
        { id: 'abril-6-smackdown', type: 'SmackDown', day: 6, date: '6 de abril, 2000', location: 'San Jose, CA', venue: 'San Jose Arena', matches: [
            { participants: ['The Rock', 'Edge & Christian'], stipulation: 'Handicap Match' },
            { participants: ['Triple H', 'Taka Michinoku'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'abril-10-raw', type: 'Raw', day: 10, date: '10 de abril, 2000', location: 'Fort Lauderdale, FL', venue: 'National Car Rental Center', matches: [
            { participants: ['The Rock & The Acolytes', 'Triple H, Edge & Christian'] },
            { participants: ['Kurt Angle', 'Big Show'] },
            { participants: ['The Dudley Boyz', 'Bull Buchanan & Big Boss Man'] }
          ]
        },
        { id: 'abril-13-smackdown', type: 'SmackDown', day: 13, date: '13 de abril, 2000', location: 'Tampa, FL', venue: 'Ice Palace', matches: [
            { participants: ['The Rock', 'Triple H'], stipulation: 'Lumberjack Match for WWF Championship' },
            { participants: ['Edge & Christian', 'Kurt Angle & Big Show'] },
            { participants: ['The Hardy Boyz', 'T & A'] }
          ]
        },
        { id: 'abril-17-raw', type: 'Raw', day: 17, date: '17 de abril, 2000', location: 'State College, PA', venue: 'Bryce Jordan Center', matches: [
            { participants: ['The Rock & Chris Jericho', 'Triple H & Chris Benoit'] },
            { participants: ['Edge & Christian', 'The Dudley Boyz'] },
            { participants: ['Kurt Angle', 'Rikishi'] }
          ]
        },
        { id: 'abril-20-smackdown', type: 'SmackDown', day: 20, date: '20 de abril, 2000', location: 'Philadelphia, PA', venue: 'First Union Center', matches: [
            { participants: ['The Rock', 'Chris Benoit'], stipulation: 'Non-Title Match' },
            { participants: ['Triple H', 'T & A'], stipulation: 'Handicap Match' },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
        { id: 'abril-24-raw', type: 'Raw', day: 24, date: '24 de abril, 2000', location: 'Raleigh, NC', venue: 'Raleigh Entertainment & Sports Arena', matches: [
            { participants: ['The Rock & The Dudley Boyz', 'Triple H, Edge & Christian'] },
            { participants: ['Chris Benoit', 'Kurt Angle'] },
            { participants: ['The Hardy Boyz', 'Bull Buchanan & Big Boss Man'] }
          ]
        },
        { id: 'abril-27-smackdown', type: 'SmackDown', day: 27, date: '27 de abril, 2000', location: 'Charlotte, NC', venue: 'Charlotte Coliseum', matches: [
            { participants: ['The Rock', 'Christian'] },
            { participants: ['Chris Benoit', 'Hardcore Holly'], title: 'WWF Intercontinental Championship' },
            { participants: ['The Dudley Boyz', 'Edge & X-Pac'], title: 'WWF Tag Team Championship' }
          ]
        },
        {
          id: 'abril-30-ppv',
          type: 'PPV',
          name: 'Backlash',
          day: 30,
          date: '30 de abril, 2000',
          location: 'Washington, D.C.',
          venue: 'MCI Center',
          matches: [
            { participants: ['The Rock', 'Triple H'], title: 'WWF Championship' },
            { participants: ['Chris Benoit', 'Chris Jericho'], title: 'WWF Intercontinental Championship' },
            { participants: ['Dean Malenko', 'Scotty 2 Hotty'], title: 'WWF Light Heavyweight Championship' },
            { participants: ['Edge & Christian', 'X-Pac & Road Dogg'], title: 'WWF Tag Team Championship' },
          ],
        },
      ]
  },
  {
      month: 'Mayo',
      events: [
        { id: 'mayo-1-raw', type: 'Raw', day: 1, date: '1 de mayo, 2000', location: 'Baltimore, MD', venue: 'Baltimore Arena', matches: [
            { participants: ['The Rock', 'Shane McMahon'], stipulation: 'Steel Cage Match for WWF Championship' },
            { participants: ['Chris Jericho', 'Chris Benoit'], title: 'WWF Intercontinental Championship' },
            { participants: ['The Hardy Boyz', 'T & A'] }
          ]
        },
        { id: 'mayo-4-smackdown', type: 'SmackDown', day: 4, date: '4 de mayo, 2000', location: 'Richmond, VA', venue: 'Richmond Coliseum', matches: [
            { participants: ['The Rock & Earl Hebner', 'Triple H, X-Pac & Road Dogg'], stipulation: 'Handicap Match' },
            { participants: ['Chris Jericho', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        {
          id: 'mayo-6-ppv',
          type: 'PPV',
          name: 'Insurrextion',
          day: 6,
          date: '6 de mayo, 2000',
          location: 'London, England',
          venue: 'Earls Court',
          matches: [
            { participants: ['The Rock', 'Triple H', 'Shane McMahon'], title: 'WWF Championship' },
            { participants: ['The Hardy Boyz', 'Edge & Christian'], title: 'WWF Tag Team Championship' },
            { participants: ['Kurt Angle', 'Chris Jericho'] },
            { participants: ['Bull Buchanan', 'The Godfather'] },
            { participants: ['Eddie Guerrero', 'Chris Jericho'], title: 'WWF European Championship' }
          ],
        },
        { id: 'mayo-8-raw', type: 'Raw', day: 8, date: '8 de mayo, 2000', location: 'Uniondale, NY', venue: 'Nassau Coliseum', matches: [
            { participants: ['Chris Jericho', 'Kurt Angle', 'Big Show'], stipulation: 'Triple Threat #1 Contender Match' },
            { participants: ['The Rock', 'The Dudley Boyz'], stipulation: 'Handicap Tables Match' },
            { participants: ['Chris Benoit', 'Triple H'] }
          ]
        },
        { id: 'mayo-11-smackdown', type: 'SmackDown', day: 11, date: '11 de mayo, 2000', location: 'New Haven, CT', venue: 'New Haven Coliseum', matches: [
            { participants: ['The Rock', 'Chris Benoit'] },
            { participants: ['Triple H', 'The Dudley Boyz'], stipulation: 'Handicap Match' },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
        { id: 'mayo-15-raw', type: 'Raw', day: 15, date: '15 de mayo, 2000', location: 'Cleveland, OH', venue: 'Gund Arena', matches: [
            { participants: ['The Rock', 'Chris Benoit'] },
            { participants: ['Triple H', 'Big Show'] },
            { participants: ['The Hardy Boyz & The Dudley Boyz', 'Edge, Christian, T & A'] }
          ]
        },
        { id: 'mayo-18-smackdown', type: 'SmackDown', day: 18, date: '18 de mayo, 2000', location: 'Detroit, MI', venue: 'Joe Louis Arena', matches: [
            { participants: ['The Rock', 'Triple H'], stipulation: 'No DQ, No Count-out, Falls Count Anywhere' },
            { participants: ['The Dudley Boyz', 'X-Pac & Road Dogg'] },
            { participants: ['Chris Benoit', 'Val Venis'] }
          ]
        },
        {
          id: 'mayo-21-ppv',
          type: 'PPV',
          name: 'Judgment Day',
          day: 21,
          date: '21 de mayo, 2000',
          location: 'Louisville, KY',
          venue: 'Freedom Hall',
          matches: [
            { participants: ['The Rock', 'Triple H'], title: 'WWF Championship', stipulation: 'Iron Man Match' },
            { participants: ['Chris Benoit', 'Chris Jericho'], stipulation: 'Submission Match' },
            { participants: ['Shane McMahon', 'Big Show'], stipulation: 'Falls Count Anywhere' },
            { participants: ['Rikishi', 'Kurt Angle', 'Eddie Guerrero'] },
            { participants: ['Edge & Christian', 'The Acolytes', 'The Hardy Boyz'] }
          ],
        },
        { id: 'mayo-22-raw', type: 'Raw', day: 22, date: '22 de mayo, 2000', location: 'Indianapolis, IN', venue: 'Conseco Fieldhouse', matches: [
            { participants: ['Triple H', 'The Rock'], title: 'WWF Championship' },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'], stipulation: 'Tables Match' },
            { participants: ['Eddie Guerrero', 'Kurt Angle'] }
          ]
        },
        { id: 'mayo-25-smackdown', type: 'SmackDown', day: 25, date: '25 de mayo, 2000', location: 'Evansville, IN', venue: 'Roberts Municipal Stadium', matches: [
            { participants: ['The Rock & The Undertaker', 'Triple H & Shane McMahon'] },
            { participants: ['Kurt Angle', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'T & A'] }
          ]
        },
        { id: 'mayo-29-raw', type: 'Raw', day: 29, date: '29 de mayo, 2000', location: 'Vancouver, BC, Canada', venue: 'General Motors Place', matches: [
            { participants: ['The Rock & The Undertaker', 'Edge, Christian & Kurt Angle'] },
            { participants: ['Triple H', 'Scotty 2 Hotty'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
      ]
  },
  {
      month: 'Junio',
      events: [
        { id: 'junio-1-smackdown', type: 'SmackDown', day: 1, date: '1 de junio, 2000', location: 'Tacoma, WA', venue: 'Tacoma Dome', matches: [
            { participants: ['The Rock & The Undertaker', 'Triple H & The McMahon-Helmsley Faction'] },
            { participants: ['Kurt Angle', 'Chris Jericho'] },
            { participants: ['The Hardy Boyz', 'Too Cool'] }
          ]
        },
        { id: 'junio-5-raw', type: 'Raw', day: 5, date: '5 de junio, 2000', location: 'St. Louis, MO', venue: 'Kiel Center', matches: [
            { participants: ['The Rock', 'Triple H'], title: 'WWF Championship' },
            { participants: ['Kane', 'Lita'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'junio-8-smackdown', type: 'SmackDown', day: 8, date: '8 de junio, 2000', location: 'Buffalo, NY', venue: 'HSBC Arena', matches: [
            { participants: ['The Rock, The Undertaker & Kane', 'Triple H, Road Dogg & X-Pac'] },
            { participants: ['Kurt Angle', 'Chris Benoit'] },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
        { id: 'junio-12-raw', type: 'Raw', day: 12, date: '12 de junio, 2000', location: 'Chicago, IL', venue: 'United Center', matches: [
            { participants: ['The Rock', 'Triple H'], stipulation: 'King of the Ring Qualifying Match' },
            { participants: ['Kane', 'The Hardy Boyz'], stipulation: 'Handicap Match' },
            { participants: ['The Dudley Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'junio-15-smackdown', type: 'SmackDown', day: 15, date: '15 de junio, 2000', location: 'Chicago, IL', venue: 'United Center', matches: [
            { participants: ['The Rock', 'Kane'], stipulation: 'No Holds Barred' },
            { participants: ['Triple H', 'Hardcore Holly'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'junio-19-raw', type: 'Raw', day: 19, date: '19 de junio, 2000', location: 'Nashville, TN', venue: 'Gaylord Entertainment Center', matches: [
            { participants: ['The Rock, The Undertaker & Kane', 'Triple H, Shane McMahon & Vince McMahon'] },
            { participants: ['Kurt Angle', 'Bubba Ray Dudley'] },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
        { id: 'junio-22-smackdown', type: 'SmackDown', day: 22, date: '22 de junio, 2000', location: 'Memphis, TN', venue: 'Pyramid Arena', matches: [
            { participants: ['The Rock', 'Triple H'] },
            { participants: ['The Undertaker', 'Edge & Christian'], stipulation: 'Handicap Match' },
            { participants: ['Kurt Angle', 'Kane'] }
          ]
        },
        {
          id: 'junio-25-ppv',
          type: 'PPV',
          name: 'King of the Ring',
          day: 25,
          date: '25 de junio, 2000',
          location: 'Boston, MA',
          venue: 'FleetCenter',
          matches: [
            { participants: ['Kurt Angle', 'Rikishi'], stipulation: 'King of the Ring Final' },
            { participants: ['The Rock, The Undertaker & Kane', 'Triple H, Vince McMahon & Shane McMahon'], title: 'WWF Championship' },
            { participants: ['Edge & Christian', 'Too Cool', 'The Hardy Boyz', 'T&A'], title: 'WWF Tag Team Championship' },
          ],
        },
        { id: 'junio-26-raw', type: 'Raw', day: 26, date: '26 de junio, 2000', location: 'Worcester, MA', venue: 'Worcester Centrum', matches: [
            { participants: ['The Rock & Kane', 'Triple H & Chris Benoit'] },
            { participants: ['Kurt Angle', 'The Undertaker'] },
            { participants: ['The Hardy Boyz', 'T & A'] }
          ]
        },
        { id: 'junio-29-smackdown', type: 'SmackDown', day: 29, date: '29 de junio, 2000', location: 'Hartford, CT', venue: 'Hartford Civic Center', matches: [
            { participants: ['The Rock & The Dudley Boyz', 'Triple H, Edge & Christian'] },
            { participants: ['Kurt Angle', 'Hardcore Holly'] },
            { participants: ['The Undertaker', 'Bull Buchanan'] }
          ]
        },
      ]
  },
  {
      month: 'Julio',
      events: [
        { id: 'julio-3-raw', type: 'Raw', day: 3, date: '3 de julio, 2000', location: 'Fort Lauderdale, FL', venue: 'National Car Rental Center', matches: [
            { participants: ['The Rock', 'Shane McMahon'] },
            { participants: ['Triple H', 'The Brooklyn Brawler'] },
            { participants: ['Kane & The Undertaker', 'Edge & Christian'] }
          ]
        },
        { id: 'julio-6-smackdown', type: 'SmackDown', day: 6, date: '6 de julio, 2000', location: 'Orlando, FL', venue: 'TD Waterhouse Centre', matches: [
            { participants: ['The Rock & Eddie Guerrero', 'Chris Benoit & Edge'] },
            { participants: ['Triple H', 'X-Pac & Road Dogg'], stipulation: 'Handicap Match' },
            { participants: ['The Hardy Boyz', 'Too Cool'] }
          ]
        },
        { id: 'julio-10-raw', type: 'Raw', day: 10, date: '10 de julio, 2000', location: 'San Antonio, TX', venue: 'Alamodome', matches: [
            { participants: ['The Rock & The Acolytes', 'Chris Benoit, Edge & Christian'] },
            { participants: ['Triple H', 'Test'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'julio-13-smackdown', type: 'SmackDown', day: 13, date: '13 de julio, 2000', location: 'Oakland, CA', venue: 'The Arena in Oakland', matches: [
            { participants: ['The Rock', 'X-Pac'] },
            { participants: ['Triple H', 'The Undertaker'] },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
        { id: 'julio-17-raw', type: 'Raw', day: 17, date: '17 de julio, 2000', location: 'Albany, NY', venue: 'Pepsi Arena', matches: [
            { participants: ['The Rock & Lita', 'Triple H & Trish Stratus'] },
            { participants: ['Chris Benoit', 'The Undertaker'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'julio-20-smackdown', type: 'SmackDown', day: 20, date: '20 de julio, 2000', location: 'Albany, NY', venue: 'Pepsi Arena', matches: [
            { participants: ['The Rock & Kane', 'Chris Benoit & Kurt Angle'] },
            { participants: ['Triple H', 'Chris Jericho'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        {
          id: 'julio-23-ppv',
          type: 'PPV',
          name: 'Fully Loaded',
          day: 23,
          date: '23 de julio, 2000',
          location: 'Dallas, TX',
          venue: 'Reunion Arena',
          matches: [
            { participants: ['The Rock', 'Chris Benoit'], title: 'WWF Championship' },
            { participants: ['Triple H', 'Chris Jericho'], stipulation: 'Last Man Standing Match' },
            { participants: ['The Undertaker', 'Kurt Angle'] },
            { participants: ['The Hardy Boyz & Lita', 'T & A & Trish Stratus'] }
          ],
        },
        { id: 'julio-24-raw', type: 'Raw', day: 24, date: '24 de julio, 2000', location: 'Austin, TX', venue: 'Frank Erwin Center', matches: [
            { participants: ['The Rock', 'Triple H'], title: 'WWF Championship' },
            { participants: ['Kurt Angle', 'The Undertaker'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'julio-27-smackdown', type: 'SmackDown', day: 27, date: '27 de julio, 2000', location: 'Providence, RI', venue: 'Providence Civic Center', matches: [
            { participants: ['The Rock & Lita', 'Triple H & Trish Stratus'] },
            { participants: ['Kurt Angle', 'Kane'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'julio-31-raw', type: 'Raw', day: 31, date: '31 de julio, 2000', location: 'Atlanta, GA', venue: 'Philips Arena', matches: [
            { participants: ['The Rock & The Undertaker', 'Triple H & Big Show'] },
            { participants: ['Kurt Angle', 'Chris Jericho'] },
            { participants: ['Edge & Christian', 'The Hardy Boyz'] }
          ]
        },
      ]
  },
  {
      month: 'Agosto',
      events: [
        { id: 'agosto-3-smackdown', type: 'SmackDown', day: 3, date: '3 de agosto, 2000', location: 'Birmingham, AL', venue: 'Birmingham-Jefferson Civic Center', matches: [
            { participants: ['The Rock & Kane', 'Triple H & Kurt Angle'] },
            { participants: ['The Undertaker', 'Big Show'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'agosto-7-raw', type: 'Raw', day: 7, date: '7 de agosto, 2000', location: 'New York, NY', venue: 'Madison Square Garden', matches: [
            { participants: ['The Rock', 'Chris Benoit'] },
            { participants: ['Triple H', 'Lita'] },
            { participants: ['The Undertaker & The Dudley Boyz', 'Kurt Angle, Edge & Christian'] }
          ]
        },
        { id: 'agosto-10-smackdown', type: 'SmackDown', day: 10, date: '10 de agosto, 2000', location: 'Chicago, IL', venue: 'United Center', matches: [
            { participants: ['The Rock', 'Triple H'] },
            { participants: ['The Undertaker', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'agosto-14-raw', type: 'Raw', day: 14, date: '14 de agosto, 2000', location: 'East Rutherford, NJ', venue: 'Continental Airlines Arena', matches: [
            { participants: ['The Rock', 'Triple H'] },
            { participants: ['The Undertaker & The Dudley Boyz', 'Kurt Angle, Edge & Christian'] },
            { participants: ['Chris Jericho', 'Perry Saturn'] }
          ]
        },
        { id: 'agosto-17-smackdown', type: 'SmackDown', day: 17, date: '17 de agosto, 2000', location: 'Sacramento, CA', venue: 'ARCO Arena', matches: [
            { participants: ['The Rock', 'Triple H'], stipulation: 'No Holds Barred' },
            { participants: ['The Undertaker', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'agosto-21-raw', type: 'Raw', day: 21, date: '21 de agosto, 2000', location: 'Lafayette, LA', venue: 'Cajundome', matches: [
            { participants: ['The Rock', 'Triple H'] },
            { participants: ['The Undertaker', 'Kane'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'agosto-24-smackdown', type: 'SmackDown', day: 24, date: '24 de agosto, 2000', location: 'Fayetteville, NC', venue: 'Cumberland County Crown Coliseum', matches: [
            { participants: ['The Rock & Lita', 'Triple H, Kurt Angle & Stephanie McMahon-Helmsley'] },
            { participants: ['The Undertaker', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        {
          id: 'agosto-27-ppv',
          type: 'PPV',
          name: 'SummerSlam',
          day: 27,
          date: '27 de agosto, 2000',
          location: 'Raleigh, NC',
          venue: 'Raleigh Entertainment & Sports Arena',
          matches: [
            { participants: ['The Rock', 'Triple H', 'Kurt Angle'], title: 'WWF Championship' },
            { participants: ['Edge & Christian', 'The Hardy Boyz', 'The Dudley Boyz'], title: 'WWF Tag Team Championship', stipulation: 'TLC Match' },
            { participants: ['The Undertaker', 'Kane'], stipulation: 'No Disqualification' },
            { participants: ['Chris Jericho', 'Chris Benoit'], stipulation: '2-out-of-3 Falls Match' },
          ],
        },
        { id: 'agosto-28-raw', type: 'Raw', day: 28, date: '28 de agosto, 2000', location: 'Greensboro, NC', venue: 'Greensboro Coliseum', matches: [
            { participants: ['The Rock', 'Kane'] },
            { participants: ['Chris Jericho', 'Triple H'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'agosto-31-smackdown', type: 'SmackDown', day: 31, date: '31 de agosto, 2000', location: 'Hartford, CT', venue: 'Hartford Civic Center', matches: [
            { participants: ['The Rock & The Undertaker', 'Triple H & Kurt Angle'] },
            { participants: ['Chris Benoit', 'Kane'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
      ]
  },
  {
      month: 'Septiembre',
      events: [
        { id: 'septiembre-4-raw', type: 'Raw', day: 4, date: '4 de septiembre, 2000', location: 'Lexington, KY', venue: 'Rupp Arena', matches: [
            { participants: ['The Rock & The Undertaker', 'Kurt Angle & Kane'] },
            { participants: ['Chris Jericho', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'septiembre-7-smackdown', type: 'SmackDown', day: 7, date: '7 de septiembre, 2000', location: 'Louisville, KY', venue: 'Freedom Hall', matches: [
            { participants: ['The Rock & The Acolytes', 'The Dudley Boyz & Kurt Angle'] },
            { participants: ['The Undertaker', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'septiembre-11-raw', type: 'Raw', day: 11, date: '11 de septiembre, 2000', location: 'Phoenix, AZ', venue: 'America West Arena', matches: [
            { participants: ['The Rock, The Undertaker & The Dudley Boyz', 'Kurt Angle, Chris Benoit, Edge & Christian'] },
            { participants: ['Triple H', 'Test'] },
            { participants: ['The Hardy Boyz', 'T & A'] }
          ]
        },
        { id: 'septiembre-14-smackdown', type: 'SmackDown', day: 14, date: '14 de septiembre, 2000', location: 'Las Vegas, NV', venue: 'Thomas & Mack Center', matches: [
            { participants: ['The Rock & The Hardy Boyz', 'Chris Benoit, Edge & Christian'] },
            { participants: ['Triple H', 'X-Pac'] },
            { participants: ['The Dudley Boyz', 'Kurt Angle & Tazz'] }
          ]
        },
        { id: 'septiembre-18-raw', type: 'Raw', day: 18, date: '18 de septiembre, 2000', location: 'Detroit, MI', venue: 'Joe Louis Arena', matches: [
            { participants: ['The Rock & The Undertaker', 'Triple H & Kurt Angle'] },
            { participants: ['Chris Benoit', 'Kane'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'septiembre-21-smackdown', type: 'SmackDown', day: 21, date: '21 de septiembre, 2000', location: 'Nashville, TN', venue: 'Gaylord Entertainment Center', matches: [
            { participants: ['The Rock', 'Triple H', 'Chris Benoit', 'Kane'], stipulation: 'Fatal 4-Way Match' },
            { participants: ['Kurt Angle', 'The Undertaker'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        {
          id: 'septiembre-24-ppv',
          type: 'PPV',
          name: 'Unforgiven',
          day: 24,
          date: '24 de septiembre, 2000',
          location: 'Philadelphia, PA',
          venue: 'First Union Center',
          matches: [
            { participants: ['The Rock', 'Chris Benoit', 'The Undertaker', 'Kane'], title: 'WWF Championship' },
            { participants: ['The Hardy Boyz', 'Edge & Christian'], title: 'WWF Tag Team Championship', stipulation: 'Steel Cage Match' },
            { participants: ['Triple H', 'Kurt Angle'], stipulation: 'No Disqualification Match' },
            { participants: ['Eddie Guerrero', 'Rikishi'], title: 'WWF Intercontinental Championship' },
          ],
        },
        { id: 'septiembre-25-raw', type: 'Raw', day: 25, date: '25 de septiembre, 2000', location: 'State College, PA', venue: 'Bryce Jordan Center', matches: [
            { participants: ['The Rock', 'Chris Benoit'] },
            { participants: ['Triple H', 'Kurt Angle'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'septiembre-28-smackdown', type: 'SmackDown', day: 28, date: '28 de septiembre, 2000', location: 'Pittsburgh, PA', venue: 'Mellon Arena', matches: [
            { participants: ['The Rock & Rikishi', 'Kurt Angle & Chris Benoit'] },
            { participants: ['Triple H', 'Tazz'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
      ]
  },
  {
      month: 'Octubre',
      events: [
        { id: 'octubre-2-raw', type: 'Raw', day: 2, date: '2 de octubre, 2000', location: 'Washington D.C.', venue: 'MCI Center', matches: [
            { participants: ['The Rock', 'Chris Benoit'] },
            { participants: ['Triple H', 'Kurt Angle'] },
            { participants: ['The Hardy Boyz', 'T & A'] }
          ]
        },
        { id: 'octubre-5-smackdown', type: 'SmackDown', day: 5, date: '5 de octubre, 2000', location: 'Baltimore, MD', venue: 'Baltimore Arena', matches: [
            { participants: ['The Rock & Rikishi', 'Kurt Angle & Kane'] },
            { participants: ['Triple H', 'Chris Jericho'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'octubre-9-raw', type: 'Raw', day: 9, date: '9 de octubre, 2000', location: 'Anaheim, CA', venue: 'Arrowhead Pond', matches: [
            { participants: ['The Rock', 'Kurt Angle & Triple H'], stipulation: 'Handicap Match' },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] },
            { participants: ['Chris Jericho', 'X-Pac'] }
          ]
        },
        { id: 'octubre-12-smackdown', type: 'SmackDown', day: 12, date: '12 de octubre, 2000', location: 'Los Angeles, CA', venue: 'Staples Center', matches: [
            { participants: ['The Rock', 'Kane'] },
            { participants: ['Kurt Angle', 'Triple H'] },
            { participants: ['The Hardy Boyz', 'T & A'] }
          ]
        },
        { id: 'octubre-16-raw', type: 'Raw', day: 16, date: '16 de octubre, 2000', location: 'Detroit, MI', venue: 'Joe Louis Arena', matches: [
            { participants: ['The Rock & The Hardy Boyz', 'Kurt Angle, Edge & Christian'] },
            { participants: ['Triple H', 'Kane'] },
            { participants: ['The Dudley Boyz', 'T & A'] }
          ]
        },
        { id: 'octubre-19-smackdown', type: 'SmackDown', day: 19, date: '19 de octubre, 2000', location: 'Cleveland, OH', venue: 'Gund Arena', matches: [
            { participants: ['The Rock, Triple H & Kurt Angle', 'Chris Jericho, Chris Benoit & Eddie Guerrero'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] },
            { participants: ['Kane', 'Val Venis'] }
          ]
        },
        {
          id: 'octubre-22-ppv',
          type: 'PPV',
          name: 'No Mercy',
          day: 22,
          date: '22 de octubre, 2000',
          location: 'Albany, NY',
          venue: 'Pepsi Arena',
          matches: [
            { participants: ['The Rock', 'Kurt Angle'], title: 'WWF Championship', stipulation: 'No Disqualification Match' },
            { participants: ['Triple H', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'Los Conquistadores (Edge & Christian)'], title: 'WWF Tag Team Championship' },
            { participants: ['Stone Cold Steve Austin', 'Rikishi'], stipulation: 'No Holds Barred Match' },
          ],
        },
        { id: 'octubre-23-raw', type: 'Raw', day: 23, date: '23 de octubre, 2000', location: 'Hartford, CT', venue: 'Hartford Civic Center', matches: [
            { participants: ['The Rock', 'Kurt Angle & Triple H'], stipulation: 'Handicap Match' },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] },
            { participants: ['Chris Jericho', 'Chris Benoit'] }
          ]
        },
        { id: 'octubre-26-smackdown', type: 'SmackDown', day: 26, date: '26 de octubre, 2000', location: 'Albany, NY', venue: 'Pepsi Arena', matches: [
            { participants: ['The Rock & Stone Cold Steve Austin', 'Kurt Angle & Triple H'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] },
            { participants: ['Chris Jericho', 'Kane'] }
          ]
        },
        { id: 'octubre-30-raw', type: 'Raw', day: 30, date: '30 de octubre, 2000', location: 'Boston, MA', venue: 'FleetCenter', matches: [
            { participants: ['The Rock', 'Chris Jericho'] },
            { participants: ['Stone Cold Steve Austin', 'Rikishi'] },
            { participants: ['Kurt Angle', 'Triple H'] }
          ]
        },
      ]
  },
  {
      month: 'Noviembre',
      events: [
        { id: 'noviembre-2-smackdown', type: 'SmackDown', day: 2, date: '2 de noviembre, 2000', location: 'Rochester, NY', venue: 'Blue Cross Arena', matches: [
            { participants: ['The Rock, Stone Cold Steve Austin, Billy Gunn & Chyna', 'The Radicalz'] },
            { participants: ['Kurt Angle', 'Triple H'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'noviembre-6-raw', type: 'Raw', day: 6, date: '6 de noviembre, 2000', location: 'Houston, TX', venue: 'Compaq Center', matches: [
            { participants: ['Stone Cold Steve Austin', 'Kurt Angle & Rikishi'], stipulation: 'Handicap Match' },
            { participants: ['The Rock', 'Chris Jericho'] },
            { participants: ['The Hardy Boyz', 'Bull Buchanan & The Goodfather'] }
          ]
        },
        { id: 'noviembre-9-smackdown', type: 'SmackDown', day: 9, date: '9 de noviembre, 2000', location: 'Chicago, IL', venue: 'Allstate Arena', matches: [
            { participants: ['Stone Cold Steve Austin, The Rock, Triple H & The Undertaker', 'The Radicalz & Kurt Angle'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] },
            { participants: ['Billy Gunn', 'Eddie Guerrero'] }
          ]
        },
        { id: 'noviembre-13-raw', type: 'Raw', day: 13, date: '13 de noviembre, 2000', location: 'Columbus, OH', venue: 'Schottenstein Center', matches: [
            { participants: ['Stone Cold Steve Austin', 'Eddie Guerrero'] },
            { participants: ['The Rock', 'Rikishi'] },
            { participants: ['Kurt Angle & Triple H', 'Chris Jericho & ???'] }
          ]
        },
        { id: 'noviembre-16-smackdown', type: 'SmackDown', day: 16, date: '16 de noviembre, 2000', location: 'Indianapolis, IN', venue: 'Conseco Fieldhouse', matches: [
            { participants: ['Stone Cold Steve Austin & The Rock', 'Kurt Angle & Triple H'] },
            { participants: ['The Hardy Boyz', 'The Radicalz'] },
            { participants: ['Chris Benoit', 'Billy Gunn'] }
          ]
        },
        {
          id: 'noviembre-19-ppv',
          type: 'PPV',
          name: 'Survivor Series',
          day: 19,
          date: '19 de noviembre, 2000',
          location: 'Tampa, FL',
          venue: 'Ice Palace',
          matches: [
            { participants: ['Kurt Angle', 'The Undertaker'], title: 'WWF Championship' },
            { participants: ['Stone Cold Steve Austin', 'Triple H'], stipulation: 'No Disqualification Match' },
            { participants: ['The Rock', 'Rikishi'] },
            { participants: ['The Radicalz (Chris Benoit, Dean Malenko, Eddie Guerrero, Perry Saturn)', 'D-Generation X (Billy Gunn, Road Dogg, Chyna, K-Kwik)'], stipulation: 'Survivor Series Elimination Match' },
          ],
        },
        { id: 'noviembre-20-raw', type: 'Raw', day: 20, date: '20 de noviembre, 2000', location: 'Orlando, FL', venue: 'TD Waterhouse Centre', matches: [
            { participants: ['Stone Cold Steve Austin', 'Kurt Angle'], title: 'WWF Championship' },
            { participants: ['The Rock', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'Edge & Christian'] }
          ]
        },
        { id: 'noviembre-23-smackdown', type: 'SmackDown', day: 23, date: '23 de noviembre, 2000', location: 'Tampa, FL', venue: 'Ice Palace', matches: [
            { participants: ['Kurt Angle', 'The Rock', 'Rikishi', 'Kane'], stipulation: 'Fatal 4-Way Match for the WWF Championship' },
            { participants: ['Stone Cold Steve Austin', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'noviembre-27-raw', type: 'Raw', day: 27, date: '27 de noviembre, 2000', location: 'Raleigh, NC', venue: 'Raleigh Entertainment & Sports Arena', matches: [
            { participants: ['Kurt Angle', 'Stone Cold Steve Austin'] },
            { participants: ['The Rock', 'Rikishi'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'noviembre-30-smackdown', type: 'SmackDown', day: 30, date: '30 de noviembre, 2000', location: 'Charlotte, NC', venue: 'Charlotte Coliseum', matches: [
            { participants: ['Kurt Angle, Edge & Christian', 'The Rock & The Undertaker'] },
            { participants: ['Stone Cold Steve Austin', 'Chris Benoit'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
      ]
  },
  {
      month: 'Diciembre',
      events: [
        {
          id: 'diciembre-2-ppv',
          type: 'PPV',
          name: 'Rebellion',
          day: 2,
          date: '2 de diciembre, 2000',
          location: 'Sheffield, England',
          venue: 'Sheffield Arena',
          matches: [
            { participants: ['Kurt Angle', 'Rikishi', 'Stone Cold Steve Austin', 'The Rock'], title: 'WWF Championship' },
            { participants: ['The Hardy Boyz', 'Edge & Christian'], stipulation: 'Elimination Tables Match' },
            { participants: ['The Dudley Boyz', 'T & A & Trish Stratus'] },
            { participants: ['Kane', 'Chris Jericho'] },
            { participants: ['William Regal', 'Crash Holly'], title: 'WWF European Championship' }
          ],
        },
        { id: 'diciembre-4-raw', type: 'Raw', day: 4, date: '4 de diciembre, 2000', location: 'East Rutherford, NJ', venue: 'Continental Airlines Arena', matches: [
            { participants: ['Kurt Angle', 'The Rock', 'Stone Cold Steve Austin', 'The Undertaker', 'Rikishi', 'Triple H'], stipulation: '6-Man Tag Team Match' },
            { participants: ['The Hardy Boyz', 'The Radicalz'] },
            { participants: ['Chris Benoit', 'Billy Gunn'] }
          ]
        },
        { id: 'diciembre-7-smackdown', type: 'SmackDown', day: 7, date: '7 de diciembre, 2000', location: 'San Jose, CA', venue: 'San Jose Arena', matches: [
            { participants: ['Kurt Angle & William Regal', 'Stone Cold Steve Austin & The Rock'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] },
            { participants: ['Chris Benoit', 'Hardcore Holly'] }
          ]
        },
        {
          id: 'diciembre-10-ppv',
          type: 'PPV',
          name: 'Armageddon',
          day: 10,
          date: '10 de diciembre, 2000',
          location: 'Birmingham, AL',
          venue: 'Birmingham-Jefferson Civic Center',
          matches: [
            { participants: ['Kurt Angle', 'Stone Cold Steve Austin', 'Triple H', 'The Undertaker', 'The Rock', 'Rikishi'], title: 'WWF Championship', stipulation: 'Hell in a Cell Match' },
            { participants: ['Chris Benoit', 'Billy Gunn'], title: 'WWF Intercontinental Championship' },
            { participants: ['The Hardy Boyz & Lita', 'The Radicalz (Dean Malenko, Perry Saturn & Eddie Guerrero)'], stipulation: 'Intergender Elimination Tag Team Match'},
            { participants: ['Edge & Christian', 'The Dudley Boyz', 'Road Dogg & K-Kwik', 'Bull Buchanan & The Goodfather'], title: 'WWF Tag Team Championship'}
          ],
        },
        { id: 'diciembre-11-raw', type: 'Raw', day: 11, date: '11 de diciembre, 2000', location: 'Memphis, TN', venue: 'Pyramid Arena', matches: [
            { participants: ['Kurt Angle', 'The Rock'] },
            { participants: ['Stone Cold Steve Austin', 'Triple H'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'diciembre-14-smackdown', type: 'SmackDown', day: 14, date: '14 de diciembre, 2000', location: 'Little Rock, AR', venue: 'Alltel Arena', matches: [
            { participants: ['The Rock & The Undertaker', 'Kurt Angle, Edge & Christian'] },
            { participants: ['Stone Cold Steve Austin', 'William Regal'] },
            { participants: ['The Hardy Boyz', 'The Radicalz'] }
          ]
        },
        { id: 'diciembre-18-raw', type: 'Raw', day: 18, date: '18 de diciembre, 2000', location: 'Greenville, SC', venue: 'BI-LO Center', matches: [
            { participants: ['The Rock & The Undertaker', 'Kurt Angle & William Regal'] },
            { participants: ['Stone Cold Steve Austin', 'Triple H'] },
            { participants: ['The Hardy Boyz', 'Chris Jericho & The Dudley Boyz'] }
          ]
        },
        { id: 'diciembre-21-smackdown', type: 'SmackDown', day: 21, date: '21 de diciembre, 2000', location: 'Durham, NC', venue: 'Dean Smith Center', matches: [
            { participants: ['The Rock & The Undertaker', 'Kurt Angle, Edge & Christian'] },
            { participants: ['Stone Cold Steve Austin', 'Kane'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
        { id: 'diciembre-25-raw', type: 'Raw', day: 25, date: '25 de diciembre, 2000', location: 'Chattanooga, TN', venue: 'McKenzie Arena', matches: [
            { participants: ['The Rock', 'Kurt Angle'], title: 'WWF Championship' },
            { participants: ['Stone Cold Steve Austin', 'Kane'] },
            { participants: ['The Hardy Boyz', 'The Radicalz'] }
          ]
        },
        { id: 'diciembre-28-smackdown', type: 'SmackDown', day: 28, date: '28 de diciembre, 2000', location: 'San Antonio, TX', venue: 'Alamodome', matches: [
            { participants: ['The Rock & The Undertaker', 'Kurt Angle, Edge & Christian'] },
            { participants: ['Stone Cold Steve Austin', 'Rikishi'] },
            { participants: ['The Hardy Boyz', 'The Dudley Boyz'] }
          ]
        },
      ]
  }
].map(month => ({
    ...month,
    events: month.events.sort((a, b) => a.day - b.day)
}));


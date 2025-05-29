import { Timeline, DataSet } from "vis-timeline/standalone";

export function ChurchTimeline() {
    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');

    const groups = new DataSet([
        {
          id: 'events',
          content: 'Events'
        },
        {
          id: 'bishops',
          content: 'Bishops'
        },
        {
          id: 'emperors',
          content: 'Emperors'
        }
      ]);

    const events = [
        { group: 'events', type: 'box', start: '-000333-01-01', content: 'Near East conquered by Alexander the Great (333 BC)' },
        { group: 'events', type: 'box', start: '-000063-01-01', content: 'Judea became a Roman province (63 BC)' },
        { group: 'events', type: 'box', start: '-000020-01-01', end: '-000018-12-01', content: '2nd Temple rebuild/enhanced by Herod the Great (20-18 BC)' },
        { group: 'events', type: 'background', start: '+000030-01-01', end: '+000033-01-01', content: 'Jesus\' ministry (30-33)' },
        { group: 'events', type: 'box', start: '+000033-02-01', content: 'Pentecost (33)' },
        { group: 'events', type: 'box', start: '+000033-05-01', content: 'Paul\'s conversion (33)' },
        { group: 'events', type: 'box', start: '+000049-01-01', content: 'First council in Jerusalem (49)' },
        { group: 'events', type: 'box', start: '+000064-01-01', content: 'Christians were accused of ignite the city (64)' },
        { group: 'events', type: 'background', start: '+000066-01-01', end: '+000070-01-01', content: 'First Jewish revolt to Roman forces (66-70)' },
        { group: 'events', type: 'box', start: '+000070-01-01', content: 'Fall of Jerusalem. \nDestruction of the 2nd Temple by General Titus (70)' },
        { group: 'events', type: 'background', start: '+000050-01-01', end: '+000100-01-01', content: 'New Testament writing (50-100)' },

        { group: 'emperors', type: 'range', start: '-000037-01-01', end: '+000004-01-01', content: 'Herod the Great. Roman King of Judea (37-4 BC)' },
        { group: 'emperors', type: 'range', start: '+000054-01-01', end: '+000068-01-01', content: 'Nero\'s reign (54-68)' },
        { group: 'emperors', type: 'range', start: '+000069-01-01', end: '+000070-01-01', content: 'Vespasian\'s reign (69-70)' },
        { group: 'emperors', type: 'range', start: '+000081-01-01', end: '+000096-01-01', content: 'Domitiany\'s reign (81-96)' },
    ];

    // Create a DataSet (allows two way data-binding)
    const items = new DataSet(events.map((item) => Object.assign({}, item, { title: item.content })));

    // Configuration for the Timeline
    const options = {
        width: '100%',
        height: '40em',
        format: {
            minorLabels: {
                month: ''
            },
            majorLabels: {
                month: 'YYYY'
            }
        }
    };

    // Create a Timeline
    new Timeline(container, items, groups, options);
}

ChurchTimeline()

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

    // Create a DataSet (allows two way data-binding)
    const items = new DataSet([
        {group: 'events', start: '2016-01-01', content: 'Event 1'},
        {group: 'bishops', start: '2017-01-01', end: '2020-01-01', content: 'Bishop 1'}
    ]);

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

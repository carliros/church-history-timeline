import { Timeline, DataSet } from "vis-timeline/standalone";

export function ChurchTimeline() {
    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');

    const groups = new DataSet([
        {
          id: 'emperors',
          content: 'Emperors'
        },
        {
          id: 'bishops',
          content: 'Bishops'
        },
        {
          id: 'events',
          content: 'Events'
        }
      ]);

    // Create a DataSet (allows two way data-binding)
    const items = new DataSet([
    {id: 1, content: 'item 1', start: '2014-01-01', group: 'emperors'},
    {id: 2, content: 'item 2', start: '2015-01-01', group: 'emperors'},
    {id: 3, content: 'item 3', start: '2016-01-01', group: 'events'},
    {id: 4, content: 'item 4', start: '2017-01-01', end: '2020-01-01', group: 'bishops'},
    {id: 5, content: 'item 5', start: '2018-01-01', group: 'events'},
    {id: 6, content: 'item 6', start: '2014-01-01', type: 'point', group: 'events' },

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

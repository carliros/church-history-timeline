import { Timeline, DataSet } from "vis-timeline/standalone";

export function ChurchTimeline() {
    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');

    // Create a DataSet (allows two way data-binding)
    const items = new DataSet([
    {id: 1, content: 'item 1', start: '2014-01-01'},
    {id: 2, content: 'item 2', start: '2014-01-01'},
    {id: 3, content: 'item 3', start: '2014-01-01'},
    {id: 4, content: 'item 4', start: '2014-01-01', end: '2015-01-01'},
    {id: 5, content: 'item 5', start: '2014-01-01'},
    {id: 6, content: 'item 6', start: '2014-01-01', type: 'point'}
    ]);

    // Configuration for the Timeline
    const options = {};

    // Create a Timeline
    new Timeline(container, items, options);
}

ChurchTimeline()

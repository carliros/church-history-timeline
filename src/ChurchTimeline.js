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
        {
          group: 'events', 
          type: 'box', 
          start: '-000333-01-01', 
          content: 'Near East conquered by Alexander the Great (333 BC)'
        }, { 
          group: 'events', 
          type: 'box', 
          start: '-000063-01-01', 
          content: 'Judea became a Roman province (63 BC)'
        }, {
          group: 'events', 
          type: 'box', 
          start: '-000020-01-01', 
          end: '-000018-12-01', 
          content: '2nd Temple rebuild/enhanced by Herod the Great (20-18 BC)'
        }, {
          group: 'events',
          type: 'background',
          start: '+000030-01-01',
          end: '+000033-01-01',
          content: 'Jesus\' ministry (30-33)'
        }, {
          group: 'events',
          type: 'box',
          start: '+000033-02-01',
          content: 'Pentecost (33)'
        }, {
          group: 'events',
          type: 'box',
          start: '+000033-05-01',
          content: 'Paul\'s conversion (33)'
        }, {
          group: 'events',
          type: 'box',
          start: '+000049-01-01',
          content: 'First council in Jerusalem (49)'
        }, {
          group: 'events',
          type: 'box',
          start: '+000064-01-01',
          content: 'Christians were accused of ignite the city (64)'
        }, {
          group: 'events',
          type: 'background',
          start: '+000066-01-01',
          end: '+000070-01-01',
          content: 'First Jewish revolt to Roman forces (66-70)'
        }, {
          group: 'events',
          type: 'box',
          start: '+000070-01-01',
          content: 'Fall of Jerusalem. \nDestruction of the 2nd Temple by General Titus (70)'
        }, {
          group: 'events',
          type: 'background',
          start: '+000050-01-01',
          end: '+000100-01-01',
          content: 'New Testament writing (50-100)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '-000037-01-01',
          end: '+000004-01-01',
          content: 'Herod the Great. Roman King of Judea (37-4 BC)'
        }, {
          group: 'bishops',
          type: 'range',
          start: '0035-01-01',
          end: '0100-01-01',
          content: 'Clement of Rome (35-100)'
        }, {
          group: 'bishops',
          type: 'range',
          start: '0035-01-01',
          end: '0108-01-01',
          content: 'Ignatius of Antioch (35-108)'
        }, {
          group: 'bishops',
          type: 'range',
          start: '0069-01-01',
          end: '0155-01-01',
          content: 'Polycarp of Smyrna(69-155)'
        }, {
          group: 'events',
          type: 'range',
          start: '0090-01-01',
          end: '0150-01-01',
          content: 'The Shepherd of Hermas (written between 90-150)'
        }, {
          group: 'events',
          type: 'box',
          start: '0095-01-01',
          content: 'Book 1st Clement (95/96)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '+000054-01-01',
          end: '+000068-01-01',
          content: 'Nero\'s reign (54-68)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '+000069-01-01',
          end: '+000070-01-01',
          content: 'Vespasian\'s reign (69-70)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '+000081-01-01',
          end: '+000096-01-01',
          content: 'Domitiany\'s reign (81-96)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0096-01-01',
          end: '0117-01-01',
          content: 'Trajan\'s reign (98-117)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0117-01-01',
          end: '0138-01-01',
          content: 'Hadrian\'s reign (117-138)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0138-01-01',
          end: '0161-01-01',
          content: 'Antonimus Pius\'s reign (138-161)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0161-01-01',
          end: '0180-01-01',
          content: 'Marcos Aurelios\'s reign (161-180)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0193-01-01',
          end: '0211-01-01',
          content: 'Septimus Severus\'s reign (193-211)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0235-01-01',
          end: '0238-01-01',
          content: 'Maximus\'s reign (235-238)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0249-01-01',
          end: '0251-01-01',
          content: 'Decius\' reign (249-251)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0260-01-01',
          end: '0266-01-01',
          content: 'Valerian\'s reign (260-266)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0284-01-01',
          end: '0305-01-01',
          content: 'Diocletian\'s reign (284-305)'
        }, {
          group: 'events',
          type: 'range',
          start: '0303-01-01',
          end: '0311-01-01',
          content: 'Great Persecution (303-311)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0306-01-01',
          end: '0337-01-01',
          content: 'Constantine\'s reign (306-337)'
        },
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

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
          id: 'christians',
          content: 'Christians'
        },
        {
          id: 'emperors',
          content: 'Emperors'
        }
      ]);

    const events = [
        // EVENTS 
        {
          group: 'events', 
          type: 'point',
          className: 'text-white', 
          start: '-000333-01-01', 
          content: 'Near East conquered by Alexander the Great (333 BC)',
          desc: 'DESCRIPTION'
        }, { 
          group: 'events', 
          type: 'point',
          className: 'text-white',
          start: '-000063-01-01', 
          content: 'Judea became a Roman province (63 BC)'
        }, {
          group: 'events', 
          type: 'range', 
          start: '-000020-01-01', 
          end: '-000018-12-01', 
          content: '2nd Temple rebuild/enhanced by Herod the Great (20-18 BC)'
        }, {
          group: 'christians',
          type: 'range',
          start: '+000030-01-01',
          end: '+000033-01-01',
          content: 'Jesus\' ministry (30-33)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '+000033-02-01',
          content: 'Pentecost (33)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '+000033-05-01',
          content: 'Paul\'s conversion (33)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '+000049-01-01',
          content: 'First council in Jerusalem (49)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '+000064-01-01',
          content: 'Christians were accused of ignite the city (64)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '+000066-01-01',
          end: '+000070-01-01',
          content: 'First Jewish revolt to Roman forces (66-70)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '+000070-01-01',
          content: 'Fall of Jerusalem. \nDestruction of the 2nd Temple by General Titus (70)'
        }, {
          group: 'events',
          type: 'range',
          className: 'yellow-green',
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
          group: 'christians',
          type: 'range',
          start: '0035-01-01',
          end: '0100-01-01',
          content: 'Clement of Rome (35-100)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0035-01-01',
          end: '0108-01-01',
          content: 'Ignatius of Antioch (35-108)'
        }, {
          group: 'christians',
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
          type: 'point',
          className: 'text-white',
          start: '0095-01-01',
          content: 'Book 1st Clement (95/96)'
        }, {
          group: 'events',
          type: 'box',
          className: 'yellow-green',
          start: '313-01-01',
          content: 'Edict of Milan (313)'
        }, {
          group: 'events',
          type: 'box',
          className: 'green',
          start: '325-01-01',
          content: 'Council of Nicaea (325)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '336-01-01',
          content: 'Declared Christmas day to be Dic/25th (336)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '380-01-01',
          content: 'Edict of Thessalonica (380)'
        }, {
          group: 'events',
          type: 'box',
          className: 'green',
          start: '381-01-01',
          content: 'Council of Constantinople (381)'
        }, {
          group: 'events',
          type: 'box',
          className: 'green',
          start: '390-01-01',
          content: 'Council of Milan [Apostles\' creed] (390)'
        }, {
          group: 'events',
          type: 'box',
          className: 'green',
          start: '393-01-01',
          content: 'Council of Hippo (393)'
        }, {
          group: 'events',
          type: 'box',
          className: 'green',
          start: '397-01-01',
          content: 'Council of Carthage [Cannon of NT] (397)'
        }, {
          group: 'events',
          type: 'box',
          className: 'green',
          start: '431-01-01',
          content: 'Council of Ephesus (431)'
        }, {
          group: 'events',
          type: 'box',
          className: 'green',
          start: '451-01-01',
          content: 'Council of Chalcedon (451)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '449-01-01',
          content: 'Letter "Tome" of Leo the Great (449)'
        }, {
          group: 'events',
          type: 'box',
          className: 'red',
          start: '410-01-01',
          content: 'Sack of Rome [by Alaric, Visigoths] (410)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '445-01-01',
          content: 'Edict of papal authority (445)'
        }, {
          group: 'events',
          type: 'box',
          className: 'red',
          start: '476-01-01',
          content: 'Fall of West Roman Empire [by Odoacer] (476)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '452-01-01',
          content: 'Leo the Great liberated Rome from invation of Attila the Hun (452)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '455-01-01',
          content: 'Leo the Great liberated Rome from Vandal king Gaiseric (455)'
        

        // Christians
        }, {
          group: 'christians',
          type: 'range',
          start: '0100-01-01',
          end: '0165-01-01',
          content: 'Justin Martyr (100-165)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0130-01-01',
          end: '0202-01-01',
          content: 'Irenaeus of Lyons (130-202)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0150-01-01',
          end: '0215-01-01',
          content: 'Clement of Alexandria(150-215)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0160-01-01',
          end: '0225-01-01',
          content: 'Tertulian (160-225)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0210-01-01',
          end: '0258-01-01',
          content: 'Cyprian of Carthage (210-258)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0185-01-01',
          end: '0254-01-01',
          content: 'Origen (185-254)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0251-01-01',
          end: '0356-01-01',
          content: 'St. Anthony (251-356)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0260-01-01',
          end: '0340-01-01',
          content: 'Eusebius of Caesarea [The historian] (260-340)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0290-01-01',
          end: '0348-01-01',
          content: 'St. Pachomius (290-348)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0313-01-01',
          end: '0326-01-01',
          content: 'Alexander of Alexandria [Bishop] (290-348)'
        }, {
          group: 'christians',
          type: 'range',
          start: '0293-01-01',
          end: '0373-01-01',
          content: 'Athanasius of Alexandria [Deacon, Bishop] (293-373)'
        }, {
          group: 'christians',
          type: 'range',
          start: '347-01-01',
          end: '407-01-01',
          content: 'Jhon Chrysostom [Preacher] (347-407)'
        }, {
          group: 'christians',
          type: 'range',
          start: '330-01-01',
          end: '379-01-01',
          content: 'Basil the Great of Caesarea [Cappadocian Father] (330-379)'
         }, {
          group: 'christians',
          type: 'range',
          start: '329-01-01',
          end: '390-01-01',
          content: 'Gregory of Nazianzuz [Cappadocian Father] (329-390)'
        }, {
          group: 'christians',
          type: 'range',
          start: '335-01-01',
          end: '394-01-01',
          content: 'Gregory of Nyssa [Cappadocian Father] (335-394)'
        }, {
          group: 'christians',
          type: 'range',
          start: '390-01-01',
          end: '459-01-01',
          content: 'Simeon Stylites (390-459)'
        }, {
          group: 'christians',
          type: 'range',
          start: '375-01-01',
          end: '444-01-01',
          content: 'Cyril of Alexandria (375-444)'
        }, {
          group: 'christians',
          type: 'range',
          start: '366-01-01',
          end: '384-01-01',
          content: 'Bishop Damasus I [Development of papacy] (366-384)'
        }, {
          group: 'christians',
          type: 'range',
          start: '334-01-01',
          end: '399-01-01',
          content: 'Pope Siricius [First called pope] (334-399)'
        }, {
          group: 'christians',
          type: 'range',
          start: '339-01-01',
          end: '397-01-01',
          content: 'Ambrose of Milan [Moral authoriry over emperor] (339-397)'
        }, {
          group: 'christians',
          type: 'range',
          start: '345-01-01',
          end: '420-01-01',
          content: 'Jerome [Author of the Vulgate] (345-420)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '405-01-01',
          content: 'The Vulgate, Latin Bible [by Jerome] (405)'
        }, {
          group: 'christians',
          type: 'range',
          start: '354-01-01',
          end: '430-01-01',
          content: 'Augustine of Hippo [Writter] (354-430)'
        }, {
          group: 'christians',
          type: 'range',
          start: '440-01-01',
          end: '466-01-01',
          content: 'Leo the Great [Papal supremacy] (440-466)'
        }, {
          group: 'christians',
          type: 'range',
          start: '540-01-01',
          end: '604-01-01',
          content: 'Gregory the Great [Gregory I] (540-604)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '595-01-01',
          content: 'Gregory the Great negotiate peace with Lombards (595)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '590-01-01',
          content: 'Book "Pastoral Rule" by Gregory the Great (590)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '595-01-01',
          content: 'Book "Moralia in Job" by Gregory the Great (595)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '593-01-01',
          content: 'Book "Dialogues" by Gregory the Great (593)'
        }, {
          group: 'christians',
          type: 'range',
          start: '800-01-01',
          end: '867-01-01',
          content: 'Nicholas the Great [Affirmed papal supremacy] (800-867)'
        }, {
          group: 'christians',
          type: 'point',
          className: 'text-white',
          start: '858-01-01',
          content: 'Nicholas the Great became bishop of Rome (858)'
        }, {
          group: 'christians',
          type: 'range',
          start: '750-01-01',
          end: '816-01-01',
          content: 'Pope Leo III (750-816)'
        }, {
          group: 'christians',
          type: 'point',
          className: 'text-white',
          start: '795-01-01',
          content: 'Pope Leo III became bishop of Rome (795)'
        }, {
          group: 'events',
          type: 'range',
          start: '800-01-01',
          end: '1806-01-01',
          content: 'Holy Roman Empire (800-1806)'
        }, {
          group: 'emperor',
          type: 'range',
          start: '800-12-25',
          end: '814-01-01',
          content: 'Charlemagne\'s reign (800-814)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '800-12-25',
          content: 'Charlemagne is coronated as king of Rome by Pope Leo III (800)'
        }, {
          group: 'christians',
          type: 'range',
          start: '480-01-01',
          end: '547-01-01',
          content: 'Benedict of Nursia [Father of Western Monasticism] (480-547)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '529-12-25',
          content: 'Monastery of Monte Cassino [founded by Benedict] (529)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '530-01-01',
          content: 'Book "Rule of Benedict" (530)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1029-01-01',
          end: '1111-01-01',
          content: 'Robert of Molesme [Father of the Cirtercian Order] (1029-1111)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1090-01-01',
          end: '1153-01-01',
          content: 'Bernard of Clairvaux [Expansion of Cistercian order] (1090-1153)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1182-01-01',
          end: '1226-01-01',
          content: 'Francis of Assisi [Founder of Franciscan order] (1182-1226)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1161-01-01',
          end: '1216-01-01',
          content: 'Pope Innocent III (1161-1216)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1170-01-01',
          end: '1221-01-01',
          content: 'Dominic de Guzmán [Founder of the Dominican order, order of preachers] (1170-1221)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '481-01-01',
          end: '511-01-01',
          content: 'King of the Franks (481-511)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '496-01-01',
          content: 'King Clovis I adopted christianity (496)'
        }, {
          group: 'christians',
          type: 'range',
          start: '389-01-01',
          end: '461-01-01',
          content: 'Patrick [The Apostle to Ireland] (389-461)'
        }, {
          group: 'christians',
          type: 'range',
          start: '389-01-01',
          end: '461-01-01',
          content: 'Patrick [The Apostle to Ireland] (389-461)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '432-01-01',
          content: 'Patrick went back to Ireland as missionary (432)'
        }, {
          group: 'christians',
          type: 'range',
          start: '521-01-01',
          end: '597-01-01',
          content: 'Columba [The Apostle to Scotland] (521-597)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '563-01-01',
          content: 'Columba went to Scotland to evangelize (563)'
        }, {
          group: 'christians',
          type: 'range',
          start: '543-01-01',
          end: '615-01-01',
          content: 'Columbanus [The Apostle to the Gauls] (543-615)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '590-01-01',
          content: 'Columbanus went to Merovingian Gaul, Switzerland to evangelize (590)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '663-01-01',
          content: 'Synod of Whitby [English and Roman christianity got united] (663)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '589-01-01',
          content: 'Third Council of Toledo [King Recared renounced Arianism] (589)'
        }, {
          group: 'christians',
          type: 'range',
          start: '675-01-01',
          end: '754-01-01',
          content: 'Boniface [The Apostle to the Germans] (675-754)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '718-01-01',
          content: 'Boniface received his papal commission as a missionary (718)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '787-01-01',
          content: 'Second Council of Nicaea [Restoration of icons] (787)'
        }, {
          group: 'events',
          type: 'range',
          start: '726-01-01',
          end: '843-01-01',
          content: 'The iconoclast controversy (726-843)'
         }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '726-01-01',
          content: 'Leo III removed a large Christ icon from Chalke Gate [Starts iconoclas controversy] (726)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '843-01-01',
          content: 'Empress Theodora restored veneration of icons [Ends iconoclast controversy] (843)'
        }, {
          group: 'christians',
          type: 'range',
          start: '580-01-01',
          end: '662-01-01',
          content: 'Maximus the Confessor (580-662)'
        }, {
          group: 'christians',
          type: 'range',
          start: '675-01-01',
          end: '749-01-01',
          content: 'John of Damascus (John Mansour) [Theologian of Theosis and Christ\'s two wills and defender of icons] (675-749)'
        }, {
          group: 'christians',
          type: 'range',
          start: '815-01-01',
          end: '893-01-01',
          content: 'Photius the Great [Architech of the Photian Schism and Defender of Eastern Orthodoxy] (815-893)'
        }, {
          group: 'christians',
          type: 'range',
          start: '827-01-01',
          end: '869-01-01',
          content: 'Cyril [The Apostle of the Slavs and pioneer of Slavic literacy] (826-869)'
        }, {
          group: 'christians',
          type: 'range',
          start: '825-01-01',
          end: '885-01-01',
          content: 'Methodius [The Apostle of the Slavs and pioneer of Slavic literacy] (825-885)'
        }, {
          group: 'events',
          type: 'range',
          start: '570-01-01',
          end: '632-01-01',
          content: 'Muhammad [Founder of Islam] (570-632)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '632-01-01',
          content: 'Muhammad\'s death [Marks the rapid rise of Islam] (632)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '732-01-01',
          content: 'Battle of Tours [Charles Martel halted the Muslim invasion into France] (732)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '638-01-01',
          content: 'Muslims invaded Jerusalen [Marked the end of christian domination in the Holy land] (638)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1054-01-01',
          content: 'The Great Schism [Cardinal Humbert placed a bull of excommunication on Hagia Sphia\'s altar] (1054)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '484-01-01',
          end: '519-01-01',
          content: 'Acacian Schism (484-519)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '474-01-01',
          end: '491-01-01',
          content: 'Emperor Zeno (474-491)'
        }, {
          group: 'christians',
          type: 'range',
          start: '483-01-01',
          end: '493-01-01',
          content: 'Pope Felix III (483-492)'
        }, {
          group: 'christians',
          type: 'range',
          start: '472-01-01',
          end: '489-01-01',
          content: 'Acacius of Constantinople (472-489)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '484-01-01',
          content: 'Felix III excommunicated Zeno and Acacius of Constantinople [Started Acacian Schism] (484)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '518-01-01',
          end: '527-01-01',
          content: 'Emperor Justin I (518-527)'
        }, {
          group: 'christians',
          type: 'range',
          start: '530-01-01',
          end: '548-01-01',
          content: 'Patriarchy John of Cappadocia (530-548)'
        }, {
          group: 'christians',
          type: 'range',
          start: '450-01-01',
          end: '523-01-01',
          content: 'Pope Hormisdas (450-523)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '519-01-01',
          content: 'Constantinople and Rome signed the Formula of Hormisdas [Ended Acacian Schism] (519)'
        }, {
          group: 'events',
          type: 'range',
          start: '863-01-01',
          end: '867-01-01',
          content: 'The Photian Schism (863-865)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '842-01-01',
          end: '867-01-01',
          content: 'Byzantine Emperor Michael III (842-867)'
        }, {
          group: 'christians',
          type: 'range',
          start: '798-01-01',
          end: '877-01-01',
          content: 'Ignatius of Constantinople (798-877)'
        }, {
          group: 'christians',
          type: 'range',
          start: '800-01-01',
          end: '867-01-01',
          content: 'Pope Nicholas I (800-867)'
        }, {
          group: 'christians',
          type: 'range',
          start: '815-01-01',
          end: '893-01-01',
          content: 'Patriarch Photius I of Constantinople (815-893)'
        }, {
          group: 'events',
          type: 'point',
          start: '863-01-01',
          content: 'Photius got excommunicated by Pope Nicholas I [Start of Photian Schism] (863)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '867-01-01',
          content: 'Photius was deposed by Basil I and Ignatius of Constantinople is reinstated [End of Photian Schism] (867)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '867-01-01',
          end: '886-01-01',
          content: 'Emperor Basil I (867-886)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '867-01-01',
          content: 'Emperor Michael III got assassinated (867)'
        }, {
          group: 'christians',
          type: 'range',
          start: '872-01-01',
          end: '882-01-01',
          content: 'Pope John VIII (872-882)'
        }, {
          group: 'christians',
          type: 'range',
          start: '877-01-01',
          end: '886-01-01',
          content: 'Patriarch 2nd time of Photius I (877-886)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '589-01-01',
          content: 'Third Council of Toledo [First time mentioned Filioque to combar Arianism] (867)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '809-01-01',
          content: 'Synod of Aachen [Filioque is formally adopted in West] (867)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1014-01-01',
          end: '1020-01-01',
          content: 'Emperor Henry II (1014-1020)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1014-01-01',
          content: 'Inscription of original Nicene creed with Filioque [Marks the official adoption of Filioque in West] (1014)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1043-01-01',
          end: '1059-01-01',
          content: 'Patriarch Michael Cerularius of Constantine (1043-1059)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1049-01-01',
          end: '1054-01-01',
          content: 'Pope Leo IX of Rome (1049-1054)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1082-01-01',
          content: 'Massacre of latin traders in Constantinople [Deepened the Great Schism] (1082)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1204-01-01',
          content: 'Constantinople was sacked in fourth crusade [Deepened the Great Schism] (1204)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '1096-01-01',
          end: '1099-01-01',
          content: 'First Crusade [Succeded to retrieve Jerusalem] (1096-1099)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '1147-01-01',
          end: '1149-01-01',
          content: 'Second Crusade [Failed] (1147-1149)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '1189-01-01',
          end: '1192-01-01',
          content: 'Third Crusade [Failed] (1189-1192)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '1202-01-01',
          end: '1204-01-01',
          content: 'Fourth Crusade [Failed] (1202-1204)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '1217-01-01',
          end: '1221-01-01',
          content: 'Fifth Crusade [Failed] (1217-1221)'
        }, {
          group: 'events',
          type: 'range',
          className: 'red',
          start: '1228-01-01',
          end: '1229-01-01',
          content: 'Sixth Crusade [Achieved temporary diplimatic success by lost in 1244] (1217-1221)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1095-01-01',
          content: 'Council of Clermont [Pope Urban II urged to retrieve the Holy Lands and marked the begining of the crusades with phrase "God wills it"] (1095)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1088-01-01',
          end: '1099-01-01',
          content: 'Pope Urban II (1088-1099)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1081-01-01',
          end: '1118-01-01',
          content: 'Byzantine Emperor Alexius I (1081-1118)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1225-01-01',
          end: '1274-01-01',
          content: 'Thomas Aquinas [The Angelic Doctor] (1225-1274)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1230-01-01',
          content: 'Thomas Aquinas became monk of the Benedictine Abbey of Monte Cassino [at the age of 5th] (1230)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1239-01-01',
          content: 'Thomas Aquinas went to the university (1239)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1252-01-01',
          content: 'Thomas Aquinas became professor at university (1252)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1277-01-01',
          content: 'The University of Paris condemned Thomas Aquinas\' teachings [However, the Council of Trent used them and Pope Leo XIII formally endorsed in 1879] (1277)'
        }, {
          group: 'events',
          type: 'range',
          start: '1265-01-01',
          end: '1273-01-01',
          content: 'Book Summa Theologiae [it was written during that time] (1265-1273)'
        }, {
          group: 'events',
          type: 'range',
          start: '1259-01-01',
          end: '1265-01-01',
          content: 'Book Summa Contra Gentiles [it was written during that time] (1265-1273)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1033-01-01',
          end: '1109-01-01',
          content: 'Anselm of Canterbury [Magnificent Doctor and Father of Scholasticism] (1033-1109)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1079-01-01',
          end: '1142-01-01',
          content: 'Peter Abelard [Teacher of Paris and Author of Sic et Non] (1079-1142)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1096-01-01',
          end: '1160-01-01',
          content: 'Peter Lombard [Master of the Sentences and Systematic Theology] (1096-1160)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1200-01-01',
          end: '1280-01-01',
          content: 'Albertus Magnus [Doctor Universalis and the Synthesis of Faith and Reason] (1200-1280)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1221-01-01',
          end: '1274-01-01',
          content: 'Bonaventure [Mystic scholar and leader of the Franciscan tradition] (1221-1274)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1266-01-01',
          end: '1308-01-01',
          content: 'John Duns Scotus [Marian Theologian and Philosopher of Individuality] (1266-1308)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1287-01-01',
          end: '1347-01-01',
          content: 'William of Ockham [Father of Nominailsm and Modern Epistemology] (1287-1347)'
        

        // EMPERORS
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
          className: 'red',
          start: '0303-01-01',
          end: '0311-01-01',
          content: 'Great Persecution (303-311)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0306-01-01',
          end: '0337-01-01',
          content: 'Constantine\'s reign (306-337)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0379-01-01',
          end: '0395-01-01',
          content: 'Theodosius I reign (379-395)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '0475-01-01',
          end: '0476-01-01',
          content: 'Romulus Augustulus (475-476)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '717-01-01',
          end: '741-01-01',
          content: 'Leo III (717-741)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '741-01-01',
          end: '775-01-01',
          content: 'Constantine V (741-775)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '797-01-01',
          end: '802-01-01',
          content: 'Empress Irene [regent for Constantine VI] (741-775)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '813-01-01',
          end: '820-01-01',
          content: 'Leo V [regent for Constantine VI] (741-775)'
        }, {
          group: 'emperors',
          type: 'range',
          start: '527-01-01',
          end: '565-01-01',
          content: 'Justinian I [Architect of the Byzantine empire and restorer of Rome] (527-565)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '537-01-01',
          content: 'Completion of Hagia Sophia (537)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '532-01-01',
          content: 'Nika riots [Destruction of Constantinople] (537)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '890-01-01',
          content: 'University of Bologna [First university, initially as Law School in 890 and recognized formally in 1155] (890)'
        }, {
          group: 'events',
          type: 'point',
          className: 'text-white',
          start: '1150-01-01',
          content: 'University of Paris [Second university] (1150)'
        }, {
          group: 'events',
          type: 'range',
          start: '1150-01-01',
          end: '1300-01-01',
          content: 'Period of High Scholasticism (1150-1300)'

        },
    ];

    // Create a DataSet (allows two way data-binding)
    const items = new DataSet(events.map((item) => Object.assign({}, item, { title: item.content })));

    // Configuration for the Timeline
    const options = {
        width: '100%',
        height: '90vh',
        verticalScroll: true,
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

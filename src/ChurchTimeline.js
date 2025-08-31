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
          type: 'box',
          start: '-000333-01-01', 
          content: 'Near East conquered by Alexander the Great (333 BC)',
          desc: 'DESCRIPTION'
        }, { 
          group: 'events', 
          type: 'box',
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
          type: 'range',
          className: 'red',
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
          type: 'box',
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
          type: 'box',
          start: '336-01-01',
          content: 'Declared Christmas day to be Dic/25th (336)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '452-01-01',
          content: 'Leo the Great liberated Rome from invation of Attila the Hun (452)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '595-01-01',
          content: 'Gregory the Great negotiate peace with Lombards (595)'
        }, {
          group: 'events',
          type: 'box',
          start: '590-01-01',
          content: 'Book "Pastoral Rule" by Gregory the Great (590)'
        }, {
          group: 'events',
          type: 'box',
          start: '595-01-01',
          content: 'Book "Moralia in Job" by Gregory the Great (595)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '529-12-25',
          content: 'Monastery of Monte Cassino [founded by Benedict] (529)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '590-01-01',
          content: 'Columbanus went to Merovingian Gaul, Switzerland to evangelize (590)'
        }, {
          group: 'events',
          type: 'box',
          start: '663-01-01',
          content: 'Synod of Whitby [English and Roman christianity got united] (663)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
          start: '718-01-01',
          content: 'Boniface received his papal commission as a missionary (718)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
          start: '726-01-01',
          content: 'Leo III removed a large Christ icon from Chalke Gate [Starts iconoclas controversy] (726)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
          start: '632-01-01',
          content: 'Muhammad\'s death [Marks the rapid rise of Islam] (632)'
        }, {
          group: 'events',
          type: 'box',
          start: '732-01-01',
          content: 'Battle of Tours [Charles Martel halted the Muslim invasion into France] (732)'
        }, {
          group: 'events',
          type: 'box',
          start: '638-01-01',
          content: 'Muslims invaded Jerusalen [Marked the end of christian domination in the Holy land] (638)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '863-01-01',
          content: 'Photius got excommunicated by Pope Nicholas I [Start of Photian Schism] (863)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '589-01-01',
          content: 'Third Council of Toledo [First time mentioned Filioque to combar Arianism] (867)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '1082-01-01',
          content: 'Massacre of latin traders in Constantinople [Deepened the Great Schism] (1082)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
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
          type: 'box',
          start: '1230-01-01',
          content: 'Thomas Aquinas became monk of the Benedictine Abbey of Monte Cassino [at the age of 5th] (1230)'
        }, {
          group: 'events',
          type: 'box',
          start: '1239-01-01',
          content: 'Thomas Aquinas went to the university (1239)'
        }, {
          group: 'events',
          type: 'box',
          start: '1252-01-01',
          content: 'Thomas Aquinas became professor at university (1252)'
        }, {
          group: 'events',
          type: 'box',
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
          type: 'box',
          start: '537-01-01',
          content: 'Completion of Hagia Sophia (537)'
        }, {
          group: 'events',
          type: 'box',
          start: '532-01-01',
          content: 'Nika riots [Destruction of Constantinople] (537)'
        }, {
          group: 'events',
          type: 'box',
          start: '890-01-01',
          content: 'University of Bologna [First university, initially as Law School in 890 and recognized formally in 1155] (890)'
        }, {
          group: 'events',
          type: 'box',
          start: '1150-01-01',
          content: 'University of Paris [Second university] (1150)'
        }, {
          group: 'events',
          type: 'range',
          start: '1150-01-01',
          end: '1300-01-01',
          content: 'Period of High Scholasticism (1150-1300)'

        // Second part  
        }, {
          group: 'emperors',
          type: 'range',
          start: '1509-01-01',
          end: '1547-01-01',
          imagePath: new URL('../images/KingHenryVIII.jpg', import.meta.url),
          content: 'English King Henry VIII (1509-1547)',
          importance: 'English reformation started with him as a political movement to split from Catholic Church'
        }, {
          group: 'events',
          type: 'box',
          start: '1509-01-01',
          content: 'English King Henry VIII married Princess Catherine of Aragon (1509)',
          importance: 'This marriage was to solidify English King alliance with Spain'
        }, {
          group: 'events',
          type: 'box',
          start: '1530-01-01',
          content: 'English King Henry VIII invoked the 14th Century Statute of Praemunire (1530)',
          importance: 'It was an excuse to subject the clergy to himself and appoint a new Archbishop to annul his marriage to Catherine'
        }, {
          group: 'events',
          type: 'box',
          start: '1533-01-01',
          content: 'English King Henry VIII got married with Anne Boleyn (1530)',
          importance: 'Anny Beleyn supported Protestantism and now became Queen. Her child became Queen Elizabeth I'
        }, {
          group: 'events',
          type: 'box',
          start: '1534-01-01',
          content: 'English King Henry VIII declared himself "Supreme Head of the Church of England" in the Act of Supremacy (1534)',
          importance: 'This officially cuts ties with the Roman pope, changes ecclesiastical authority and dismantled Catholic monastic institutions'
        }, {
          group: 'events',
          type: 'box',
          start: '1521-01-01',
          content: 'English King Henry VIII wrote "Assertio Septem Sacramentorum" [Defense of the seven sacraments] (1521)',
          importance: 'By writing this he got the title "Defender of faith" by Pope Leo X'
        }, {
          group: 'events',
          type: 'box',
          start: '1539-01-01',
          content: 'English King Henry VIII wrote the "Six Articles" (1539)',
          importance: 'He reaffirmed Catholic doctrine for the English Church with some differences regarding "Assertio Septem Sacramentorum"'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1547-01-01',
          end: '1553-01-01',
          imagePath: new URL('../images/KingEdwardVI.jpg', import.meta.url),
          content: 'English King Edward VI (1547-1553)',
          importance: 'He supported a more Protestant Reformation in England'
        }, {
          group: 'events',
          type: 'box',
          start: '1549-01-01',
          content: 'The Book of Common Prayer (1549)',
          importance: 'Unified worship practices that reflected Calvinist inflences. Initially published in 1549, updated by Cranmer in 1552, and later edited and revised in 1662'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1553-01-01',
          end: '1558-01-01',
          imagePath: new URL('../images/QueenMaryI.jpg', import.meta.url),
          content: 'English Queen Mary I (1553-1558)',
          importance: 'She restored the Church of England to Roman obedience and undo Protestant Reformation'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1558-01-01',
          end: '1603-01-01',
          imagePath: new URL('../images/QueenElizabethI.jpg', import.meta.url),
          content: 'English Queen Elizabeth I (1558-1603)',
          importance: 'She stabilized back Protestant Reformation in England with the "via media"'
        }, {
          group: 'events',
          type: 'box',
          start: '1559-01-01',
          content: 'English Queen Elizabeth I renewed the Act of Supremacy with title "Supreme Governor of the Church of England" (1559)',
          importance: 'This restore ecclesiastical authority but with a different title, Governor instead of Head'
        }, {
          group: 'events',
          type: 'box',
          start: '1563-01-01',
          content: 'English Queen Elizabeth I enacted the Thirty Nine Articles (1563)',
          importance: 'It is a summary of English doctrine church which was revised and edited during different reigns and culminated in 1571. We can see the via media in the different articles (first 8 are catholic, next 26 are protestants and last 5 are anglican).'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1603-01-01',
          end: '1625-01-01',
          //imagePath: new URL('../images/QueenElizabethI.jpg', import.meta.url),
          content: 'English King James I (1603-1625)',
          importance: 'This reign represent the unification of England and Scotland and the rejection of Presbyterian roots (Puritan). He was before Keing of Scotland as James VI. During his reign, the King\'s Confession was endorsed.'
        }, {
          group: 'events',
          type: 'box',
          start: '1604-01-01',
          content: 'King James Bible (1604)',
          importance: 'King James I autorized this Bible which supports episcopal governance to reject the Genevan Bible which challenged monarchical authority'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1625-01-01',
          end: '1649-01-01',
          //imagePath: new URL('../images/QueenElizabethI.jpg', import.meta.url),
          content: 'English King Charles I (1625-1649)',
          importance: 'Promoted Arminian theology and a return to Catholic-like tradition'
        }, {
          group: 'events',
          type: 'range',
          start: '1642-01-01',
          end: '1651-01-01',
          content: 'English Civil War (1642-1651)',
          importance: 'Resistance of Scotland when King Charles I wanted to impose English liturgy in Scotland. This resulted in the affirmation of Presbyterianism'
        }, {
          group: 'events',
          type: 'range',
          start: '1643-01-01',
          end: '1652-01-01',
          content: 'Westminster Assembly (1643-1652)',
          importance: 'Culminated the English Civil War and important documents like the Westminster Confession, Short/Large Cathechism and finally affirmed Presbyterian theology in Scotland'
        }, {
          group: 'christians',
          type: 'range',
          start: '1492-01-01',
          end: '1536-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'William Tydale (1492-1536)',
          importance: 'He translated Tyndale Bible from original Greek/Hebrew into English'
        }, {
          group: 'events',
          type: 'box',
          start: '1525-01-01',
          imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'First version of Tyndale Bible (1525)',
          importance: 'Tyndale Bible translated from original Greek/Hebrew into English'
        }, {
          group: 'christians',
          type: 'range',
          start: '1489-01-01',
          end: '1556-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Thomas Cranmer (1489-1556)',
          importance: 'Theologian and martyr of the English reformation under King Henry VIII (affirming his marriage), King Edward (reforming church) and Queen Mary I (persecuted)'
        }, {
          group: 'christians',
          type: 'range',
          start: '1504-01-01',
          end: '1528-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Patric Hamilton (1504-1528)',
          importance: 'First martyr of the Scottish reformation (at age 24).'
        }, {
          group: 'events',
          type: 'box',
          start: '1527-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Patrick\'s Places (1527)',
          importance: 'It showed key protestant doctrines by Patrick. One important phrase is "The law said, Where is thy righteousness, goodness, and satisfaction? the gospel said, Christ is thy righteousness, thry goodness, and satisfaction".'
        }, {
          group: 'christians',
          type: 'range',
          start: '1513-01-01',
          end: '1546-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'George Wishart (1513-1546)',
          importance: 'He was a contributor to the Scottish reformation, martyr (at age of 33) and mentor of John Knox. When he was being executed he lastly said: "Christian bretheren and sisters, be not affended at the Word of God on account of the tortures you see prepared for me. Love the Word which publisheth salvation, and suffer patiently for the Gospel\'s sake".'
        }, {
          group: 'christians',
          type: 'range',
          start: '1514-01-01',
          end: '1572-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'John Knox (1514-1572)',
          importance: 'Towering figure in the Scottish reformation and the founder of the Presbyterianism'
        }, {
          group: 'events',
          type: 'box',
          start: '1558-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'The first blast of the trumpet against the Monstrous Regiment of Women by John Know (1558)',
          importance: 'This article was controversial during women monarchs like Mary Tudor and Elizabeth I'
        }, {
          group: 'events',
          type: 'box',
          start: '1559-01-01',
          end: '1560-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'The Reformation Rebellion in Scotland (1559-1560)',
          importance: 'It was a rebellion againts imposition of a return to Catholic influence in Scotland (due to Mary of Guise and Mary Stuart, Queen of Scots). '
        }, {
          group: 'events',
          type: 'box',
          start: '1560-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Treaty of Edinburgh (1560)',
          importance: 'Marked the end of French influence in Scotland and paved the way to establish Protestaism as national faith, abolish papal authority, and adopt the Scottish Confession of Faith'
        }, {
          group: 'events',
          type: 'box',
          start: '1560-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Scottish Confession (1560)',
          importance: 'Scottish Protestant Consfession of Faith. Contains 25 articles and it is influenced by Calvinism. Created by the Six Johns (John Knox, John Winram, John Spottiswoode, John Willock, John Douglas, and John Row)'
        }, {
          group: 'events',
          type: 'box',
          start: '1638-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'National Covenant (1638) [Scottish history]',
          importance: 'This document was created in defense of the Scottish faith against King Charles I who wanted to change accommodate Enghish liturgica practices in Scotland'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1542-01-01',
          end: '1567-01-01',
          //imagePath: new URL('../images/QueenElizabethI.jpg', import.meta.url),
          content: 'Scottish Queen Mary Stuart (1542-1567)',
          importance: 'She tried to make Scotland a Catholic faith again, but failed.'

        // REFORMATION IN GERMANY
        }, {
          group: 'events',
          type: 'box',
          start: '1347-01-01',
          className: 'red',
          end: '1351-01-01',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'The Black death (1347-1351)',
          importance: 'It was a devastating pandemic of bubonic plague that swept through Europe and Asia. It killed 30-50% of the population.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1465-01-01',
          end: '1519-01-01',
          imagePath: new URL('../images/Johann-Tetzel.jpg', import.meta.url),
          content: 'Johann Tetzel (1465-1519)',
          importance: 'He was a German Dominican friar responsible for selling indulgences during Martin Luther time. He coined the slogan: "As a coin in the coffer rings, a soul from purgatory springs."'
        }, {
          group: 'christians',
          type: 'range',
          start: '1431-01-01',
          end: '1503-01-01',
          imagePath: new URL('../images/PopeAlexanderVI.jpg', import.meta.url),
          content: 'Pope Alexander VI (1431-1503)',
          importance: 'He was an example of a pope elected by simony. His papacy was 1492-1503'
        }, {
          group: 'christians',
          type: 'range',
          start: '1483-01-01',
          end: '1546-01-01',
          imagePath: new URL('../images/MartinLuther.jpg', import.meta.url),
          content: 'Martin Luther (1483-1546)',
          importance: 'We do not need explanation for him. German Reformation.'
        }, {
          group: 'events',
          type: 'box',
          start: '1517-10-31',
          className: 'orange',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'The Ninety-Five Theses (1517)',
          importance: 'It challenged Roman Church practice of selling indulgences.'
        }, {
          group: 'events',
          type: 'box',
          start: '1522-01-01',
          //className: 'orange',
          imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'The Luther Bible in German (1522-1534)',
          importance: 'It is Martin Luther\'s translation of the Bible into German. Initially it was only New Testament, and in 1534 it contained both testaments.'
        }, {
          group: 'events',
          type: 'box',
          start: '1530-01-01',
          className: 'orange',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'The Augsburg Confession (1530)',
          importance: 'Statements of Lutheran beliefs. Its authors were Martin Luther and Philip Melanchthon. It contains 28 articles'
        }, {
          group: 'events',
          type: 'range',
          start: '1524-01-01',
          end: '1525-01-01',
          className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'The Peasants\' Revolt (1524-1525)',
          importance: 'It was a side effect of the Reformation in Germany. Peasants demanded social and economic reforms requesting freedom and less taxes.'
        }, {
          group: 'events',
          type: 'box',
          start: '1520-01-01',
          //className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'Book To the Christian Nobility of the German Nation by Luther (1520)',
          importance: 'The objetive was to break from Roman Church and establish an independent national church. He used the argument of the three walls that protected the church of Rome.'
        }, {
          group: 'events',
          type: 'box',
          start: '1520-01-01',
          //className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'Book On the Babylonian Captivity of the Church by Luther (1520)',
          importance: 'The objective was to critique the Roman Crhuch\'s sacraments or system causing a definitive break with the papacy. At the end, it only recognized three sacraments: baptism, eucharist and penance.'
        }, {
          group: 'events',
          type: 'box',
          start: '1520-01-01',
          //className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'Book The Freedom of a Christian by Luther (1520)',
          importance: 'The objective was to clarify his theological views while addressing Pope Leo X. His claim was that his doctrines were not new innovations but a return to the pure word of God. He presents core doctrines like justification by faith alone, priesthood of all believers and the role of the good works as response to grace.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1475-01-01',
          end: '1521-01-01',
          imagePath: new URL('../images/PopeLeoX.jpg', import.meta.url),
          content: 'Pope Leo X (1475-1521)',
          importance: 'He is know by the selling of indulgences to reconstruct St. Peter\'s Basilica. His papacy was 1513-1521.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1497-01-01',
          end: '1560-01-01',
          imagePath: new URL('../images/PhilipMelanchthon.jpg', import.meta.url),
          content: 'Philip Melanchthon (1497-1560)',
          importance: 'Successor of Martin Luther.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1491-01-01',
          end: '1551-01-01',
          imagePath: new URL('../images/MartinBucer.jpg', import.meta.url),
          content: 'Martin Bucer (1491-1551)',
          importance: 'He worked on uniting Protestant groups, including Luther, Zwingli and the radical Anabaptists. He conducted the Marburg Colloquy with Luther and Zwingli in 1529. He also contributed to the Book of Common Prayer of England with Thomas Cranmer.'
        }, {
          group: 'events',
          type: 'box',
          start: '1550-01-01',
          //className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'Book De Regno Christi by Martin Bucer (1550)',
          importance: 'This book hightlights that in the Kingdom of Christ on earth there should be cooperation of church and state'
        
        // REFORMATION IN SWITZERLAND, NETHERLANDS, FRANCE AND ANABAPTIST MOVEMENT
        }, {
          group: 'christians',
          type: 'range',
          start: '1484-01-01',
          end: '1531-01-01',
          imagePath: new URL('../images/UlrichZwingli.jpg', import.meta.url),
          content: 'Ulrich Zwingli (1484-1531) [Reformer of Zurich]',
          importance: 'He started reformation in Zurich, Switzerland. He was more radical than Luther and reject the mass as sacrifical, the purgatory, the veneration of saints and the sale of indulgences. He influenced John Calvin.'
        }, {
          group: 'events',
          type: 'box',
          start: '1523-01-01',
          //className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'Sixty-Seven Articles by Ulrich Zwingli (1523)',
          importance: 'This is similar to Luther\'s theses, so it contained concise points of for the Swiss Reformation and was prepared to the First Zurich Disputation to discuss reformation ideas.'
        }, {
          group: 'events',
          type: 'box',
          start: '1529-01-01',
          //className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'The Marburg Colloquy (1529)',
          importance: 'It tried to reconcile doctrinal points mainly between Martin Luther and Ulrich Zwingli, but it also included other reformers and theologians. Of the 15 articles discussed, 14 were agreed, and only one was in question, which was the Eucarist or Lord\'s Supper. This was organized by Philip of Hesse mainly guided by political interests.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1504-01-01',
          end: '1575-01-01',
          //imagePath: new URL('../images/UlrichZwingli.jpg', import.meta.url),
          content: 'Heinrich Bullinger (1504-1575) [Reformer of Zurich]',
          importance: 'He was the successor of Ulrich Zwingli'
        }, {
          group: 'christians',
          type: 'range',
          start: '1509-01-01',
          end: '1564-01-01',
          imagePath: new URL('../images/JohnCalvin.png', import.meta.url),
          content: 'John Calvin (1509-1564) [Reformer of Geneva]',
          importance: 'He is a Frech reformer that centered his work on Geneva, Switzerland, from there it expanded calvinism to the world. His reformed doctrine emphasizes the <ul><li> Sovereignity of God,</li> <li>Predestination, </li> <li> Authority of Scripture and </li> <li> Necesity of Church discipline</li></ul>'
        }, {
          group: 'events',
          type: 'box',
          start: '1536-01-01',
          //className: 'red',
          //imagePath: new URL('../images/LutherBible.jpg', import.meta.url),
          content: 'Book Institutes of the Christian Religion by John Calvin (1536)',
          importance: 'It is a systematic introduction of Christian doctrine in fourth books, initially published in 1536.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1519-01-01',
          end: '1605-01-01',
          imagePath: new URL('../images/TheodoreBeza.jpg', import.meta.url),
          content: 'Theodore Beza (1519-1605)',
          importance: 'After he converted to reformed faith, the defended calvinist doctrine. He founded the Geneva Academy in 1559 and produced a Latin and Greek translation of the New Testament which became the basis for the Geneva Bible.'
        }, {
          group: 'events',
          type: 'box',
          start: '1536-01-01',
          //className: 'red',
          imagePath: new URL('../images/Geneva_Bible.jpg', import.meta.url),
          content: 'Geneva Bible (1557)',
          importance: 'It is an English Bible produced in Geneva by people who fled from England into Geneva during the reign of Mary I who restored Catholicism in England. Among the main collaborators were Willian Whittingham who worked on the New Testament published in 1557 and Anthony Gilby who worked in Old Testament published in 1560.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1560-01-01',
          end: '1609-01-01',
          imagePath: new URL('../images/JacobusArminius.jpg', import.meta.url),
          content: 'Jacobus Arminius (1560-1609) [Dutch]',
          importance: 'He is a Dutch theologian who questioned predestination and election from Calvin\'s doctrine. His doctrine expanded to Europe and was adopted by John Wesley (Methodist movement).'
        }, {
          group: 'events',
          type: 'range',
          start: '1618-01-01',
          end: '1619-01-01',
          //className: 'red',
          //imagePath: new URL('../images/Geneva_Bible.jpg', import.meta.url),
          content: 'The Synod of Dort (1618-1619) [The Netherlands]',
          importance: 'It established calvinism as the state religion in The Netherlands (but maintained religious tolerance as well) and rejected arminianism. In detail it addressed the controversy of predestination and advocated for conditional election and free will.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1498-01-01',
          end: '1526-01-01',
          imagePath: new URL('../images/ConradGrebel.png', import.meta.url),
          content: 'Conrad Grebel (1498-1526) [Anabaptist in Switzerland]',
          importance: 'He was the founder of the Anabaptist movement Swiss Bretheren. He rejected infant baptism. His doctrine emphasized <ul><li>Church-State separation</li> <li>Religious liberty</li> <li>Individual conscience</li></ul>'
        }, {
          group: 'christians',
          type: 'range',
          start: '1480-01-01',
          end: '1528-01-01',
          imagePath: new URL('../images/BalthasarHubmaier.png', import.meta.url),
          content: 'Balthasar Hubmaier (1480-1528) [Defender of Baptism]',
          importance: 'He was a prominent theologian that argued that baptism should be administered only those of profesed faith in Christ. He also rejected interference of state in faith matter. He influenced arminisnism.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1496-01-01',
          end: '1561-01-01',
          imagePath: new URL('../images/BalthasarHubmaier.png', import.meta.url),
          content: 'Menno Simons (1496-1561) [Founder of Mennonites]',
          importance: 'He is founder of Mennonites, a Anabaptist movement. Core doctrines are non-violence, believer\'s baptism and Christ centered community life.'
        // PURITANS
        }, {
          group: 'emperors',
          type: 'range',
          start: '1625-01-01',
          end: '1649-01-01',
          imagePath: new URL('../images/King_Charles_I_England.jpg', import.meta.url),
          content: 'King Charles I (1625-1649) [England]',
          importance: 'He was son of James I and followed Arminian thelogy in England which caused many puritans to seek reguge abroad'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1660-01-01',
          end: '1685-01-01',
          imagePath: new URL('../images/King_Charles_II.jpg', import.meta.url),
          content: 'King Charles I (1660-1685) [England]',
          importance: 'He came back to England as king and restored the Church of England and persecuted puritans.'
        }, {
          group: 'events',
          type: 'box',
          start: '1662-01-01',
          //className: 'red',
          //imagePath: new URL('../images/Geneva_Bible.jpg', import.meta.url),
          content: 'The Act of Uniformity (1662) [Church of England]',
          importance: 'It restored the Church of England practices in England and ejected many puritans pastors in churches.'
        }, {
          group: 'events',
          type: 'box',
          start: '1620-01-01',
          //className: 'red',
          imagePath: new URL('../images/Myflower.jpg', import.meta.url),
          content: 'The Mayflower ship (1620)',
          importance: 'This ship transported Puritans, incluing Pilgrins, to United States of America. They landed in Cape Cod and established the Plymouth Colony'
        }, {
          group: 'events',
          type: 'box',
          start: '1647-01-01',
          //className: 'red',
          imagePath: new URL('../images/Westminster_Confession_of_Faith.jpg', import.meta.url),
          content: 'The Westminster Confession of Faith (1647)',
          importance: 'The result of the Westminster Assembly build for the reformation of the Church of England. It was directed by puritans and presbyterians. It was the base for other confessions of faith'
        }, {
          group: 'christians',
          type: 'range',
          start: '1558-01-01',
          end: '1602-01-01',
          imagePath: new URL('../images/WilliamPerkins.jpg', import.meta.url),
          content: 'Willian Perkins (1558-1602) [English Puritan]',
          importance: 'One of the initial puritans in England, defended double predestination and great preacher.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1616-01-01',
          end: '1683-01-01',
          imagePath: new URL('../images/JohnOwen.jpg', import.meta.url),
          content: 'John Owen (1616-1683) [English Puritan]',
          importance: 'He was a good theologian of Puritanism during King Charles I and Charles II. Supported John Bunyan.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1615-01-01',
          end: '1691-01-01',
          imagePath: new URL('../images/RichardBaxter.jpg', import.meta.url),
          content: 'Richard Baxter (1615-1691) [English Puritan]',
          importance: 'He is known by being a good pastor and writer theologian. He supported a middle position between Calvisnim and Arminianism.'
         }, {
          group: 'events',
          type: 'box',
          start: '1672-01-01',
          //className: 'red',
          //imagePath: new URL('../images/Westminster_Confession_of_Faith', import.meta.url),
          content: 'Declaration of Indulgence by King Charles II (1672)',
          importance: 'It attempted to extend religious liberty to Protestants nonconformist and catholics in England by King Charles II. With this some puritans like Thomas Watson were able to preach publicly.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1620-01-01',
          end: '1686-01-01',
          imagePath: new URL('../images/ThomasWatson.jpg', import.meta.url),
          content: 'Thomas Watson (1620-1686) [English Puritan]',
          importance: 'Know by his good preaching and writings even during Charles II\'s persecution.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1628-01-01',
          end: '1688-01-01',
          imagePath: new URL('../images/JohnBunyan.jpg', import.meta.url),
          content: 'John Bunyan (1628-1688) [English Puritan]',
          importance: 'Lay preacher and very good writer, author of The Pilgrim\'s Progress.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1586-01-01',
          end: '1647-01-01',
          imagePath: new URL('../images/ThomasHooker.jpg', import.meta.url),
          content: 'Thomas Hooker (1586-1647) [New England Puritan]',
          importance: 'He was an english puritan that went to Massachusetts, US and later to Connecticut. He advocated religious and political liberty in favor of congragationalism. He helped to shape the American democratic principles.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1588-01-01',
          end: '1649-01-01',
          imagePath: new URL('../images/JohnWinthrop.jpg', import.meta.url),
          content: 'John Winthrop (1588-1649) [New England Puritan]',
          importance: 'He was part of the Mayflower and envision the city of Massachusetts with puritan faith. He was critiqued of less democratic policies.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1603-01-01',
          end: '1683-01-01',
          imagePath: new URL('../images/RogerWilliams.jpg', import.meta.url),
          content: 'Roger Williams (1603-1683) [New England Puritan]',
          importance: 'He was the founder of Rhode Island, known by his good relationship and just treatment to native Americans and advocate for religious and polical liberty. Co-Founder of the First Baptist church in USA with Generalist baptist principles.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1663-01-01',
          end: '1728-01-01',
          imagePath: new URL('../images/CottonMather.jpg', import.meta.url),
          content: 'John Winthrop (1663-1728) [New England Puritan]',
          importance: 'He is a gifted scholar who emphasized the science and puritan faith. He was involved in the Salem Witch trials of 1692.'

        // THE CATHOLIC REFORMATION
        }, {
          group: 'christians',
          type: 'range',
          start: '1434-01-01',
          end: '1549-01-01',
          imagePath: new URL('../images/PopePaulIII.jpg', import.meta.url),
          content: 'Pope Paul III (1468-1549)',
          importance: 'Pope during 1534-1549. He started the Council of Trent in 1545. He accepted new religious orders like the Jesuits. He addressed internal corruption and simony in the Catholic church.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1504-01-01',
          end: '1572-01-01',
          imagePath: new URL('../images/PopePiusV.jpg', import.meta.url),
          content: 'Pope Pius V (1504-1572)',
          importance: 'Pope during 1566-1572. He is known as the implementator of the Council of Trent.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1504-01-01',
          end: '1572-01-01',
          //imagePath: new URL('../images/PopePiusV.jpg', import.meta.url),
          content: 'Johann Maier Eck (1486-1543)',
          importance: 'He is a German theologian best known as Martin Luther\'s adversary. He challenged Luther\'s doctrines to defend Catholic faith.'
        }, {
          group: 'events',
          type: 'box',
          start: '1545-01-01',
          end: '1563-01-01',
          className: 'green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Council of Trent (1545-1563) [Catholic Reformation]',
          importance: 'Reaffirmed key Catholic doctrines and addressed the failing ones.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1466-01-01',
          end: '1536-01-01',
          imagePath: new URL('../images/Erasmus.jpg', import.meta.url),
          content: 'Erasmus of Rotterdam (1466-1536)',
          importance: 'He was humanist and believed we should come back to study the Bible ancient texts. He critiqued The Vulgate Bible which seed new interpretations for Protestant, although he did not like the reform that caused division, he was in favor of an ethical renewal within the Church.'

        // Chapter 9
        }, {
          group: 'christians',
          type: 'range',
          start: '1735-01-01',
          end: '1811-01-01',
          imagePath: new URL('../images/Robert_Raikes.jpg', import.meta.url),
          content: 'Robert Raikes (1735-1811)',
          importance: 'He is best know as the founder of Sunday Schools in England during Industrial revolution in which children were not able to go to school because they were working during the week. This is considered a social reform.'
        }, {
          group: 'events',
          type: 'box',
          start: '1870-01-01',
          //className: 'green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Elementary Education Act (1870)',
          importance: 'The government of England established a elementary education for children 5-12 which offered free public school and non-denominatonal educaton. It was build on the foundation of Sunday Schools of Robert Raikes.'
        }, {
          group: 'events',
          type: 'box',
          start: '1790-01-01',
          end: '1840-01-01',
          className: 'yellow-green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Clapham Sect (1790-1840)',
          importance: 'It was a group of wealthy Evangelical Anglicans who contributed in social reform in England. Among the prominent leaders is William Wilberforce.'
        }, {
          group: 'events',
          type: 'box',
          start: '1807-01-01',
          //className: 'green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Slave Trade Act in England (1807)',
          importance: 'Slave trade became illegal in Englang. William Wilberforce contributed toward it.'
        }, {
          group: 'events',
          type: 'box',
          start: '1833-01-01',
          //className: 'green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Slavery Abolition Act in England (1833)',
          importance: 'Slavery was prohibited in England because of this. It was not just illegal the trade, but having slaves as well.'
        }, {
          group: 'events',
          type: 'box',
          start: '1787-01-01',
          //className: 'green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Colony of Sierra Leone (1787)',
          importance: 'This place is important because it provided a haven for freed slaves. It was founded by the Chapham Sect in 1787.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1759-01-01',
          end: '1833-01-01',
          imagePath: new URL('../images/William_wilberforce.jpg', import.meta.url),
          content: 'William Wilberforce (1759-1833)',
          importance: 'He was a lawyer who tirelessly worked on the abolishion of slave trade and slavery which he made in 1807 and 1833 (just before he died). The was one of the leaders of the Clapham Sect in England.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1780-01-01',
          end: '1847-01-01',
          imagePath: new URL('../images/ThomasChalmers.png', import.meta.url),
          content: 'Thomas Chalmers [Scotland] (1780-1847)',
          importance: 'He is well known for his innovative, community-based approach to poor relief called St. John\'s Experiment. That emphasized localized charity, systematic visitation and education. That was his social reform.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1805-01-01',
          end: '1898-01-01',
          imagePath: new URL('../images/George_Muller.jpg', import.meta.url),
          content: 'George Muller [England] (1805-1898)',
          importance: 'He was a German who went England and stayed there because he saw children were left homeless and confined to workhome. So he founded Orphanages with his wife. He never requested any money but received a lot of funding just by prayer. He is Calvinist. And this is his social reform.'
        }, {
          group: 'emperors',
          type: 'range',
          start: '1837-01-01',
          end: '1901-01-01',
          imagePath: new URL('../images/Queen_Victoria.jpg', import.meta.url),
          content: 'Queen Victoria[United Kindom] (1837-1901)',
          importance: 'She was queen of United Kingdom during a time where many important events happened in Europe. This period is known as Victorian era.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1834-01-01',
          end: '1892-01-01',
          imagePath: new URL('../images/Charles_Haddon_Spurgeon.jpg', import.meta.url),
          content: 'Charles Spurgeon (The prince of preachers) [England] (1834-1892)',
          importance: 'He is well know by his good preaching. But he also contributed to social reform by funding some orphanages and almshouses and preparing pastors with his Spurgeon\' College.'
        }, {
          group: 'events',
          type: 'box',
          start: '1887-01-01',
          end: '1888-01-01',
          //className: 'green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'Downgrade Controversy (1887-1888)',
          importance: 'It is important because Spurgeon denounced orthodox laxity in England Baptist Union, which ended with his withdrawal of the union.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1820-01-01',
          end: '1910-01-01',
          imagePath: new URL('../images/Florence_Nightingale.jpg', import.meta.url),
          content: 'Florence Nightingale (A lady with a lamp) [England] (1820-1910)',
          importance: 'She is well know by his great application of his profession as a nurse into military camps in the middle of a war, reducing the mortality from 40% to 2%, that was her social reform. May 12, the day of her birthday, is celebrated as International Nurses Day.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1821-01-01',
          end: '1905-01-01',
          imagePath: new URL('../images/George_Williams.jpg', import.meta.url),
          content: 'Geoge Williams [England] (1821-1905)',
          importance: 'He is well known by founding the Young Men\'s Christian Association (YMCA), an international ministry the focused on the improvement of the spiritual condition of the your men. That was his social reform.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1829-01-01',
          end: '1912-01-01',
          imagePath: new URL('../images/William_Catherine_Booth.jpeg', import.meta.url),
          content: 'William Booth [England] (1829-1912)',
          importance: 'He and his wife Catherine are well know by founding the Salvation Army, a military movement that focused on the Gospel proclamation and acts of mercy to poor and marginalized. Their moto: "Soup, Soap and Salvation".'
        }, {
          group: 'events',
          type: 'box',
          start: '1833-01-01',
          //className: 'green',
          //imagePath: new URL('../images/TyndaleBible.jpg', import.meta.url),
          content: 'The Oxford Movement (Tractarians) (1833)',
          importance: 'This movement tried to restore Catholic practices into the Church of England, because they claimed the Church of England followed the Apostolic succession. At the end, they created a movement called Anglo-Catholicism.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1801-01-01',
          end: '1890-01-01',
          className: 'red',
          imagePath: new URL('../images/John-Henry-Newman.gif', import.meta.url),
          content: 'John Henry Newman [England] (1801-1890)',
          importance: 'He is well known by being the main writer of the Oxford Movement tracks. In 1841, he wrote a track to say that the 39 articles of the Church of England can be interpreted in consistent way with Catholic doctrine. That generated an scandal in public and led Newman to reject the Church of England to become or convert into Catholicism.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1797-01-01',
          end: '1883-01-01',
          imagePath: new URL('../images/Sojourner_Truth.jpg', import.meta.url),
          content: 'Sojourner Truth [USA] (1797-1883)',
          importance: 'She is an African American abolitionist and woman\' right activist After she got free from slavary, she figth against that and defended other women. She is a social reformer.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1821-01-01',
          end: '1912-01-01',
          imagePath: new URL('../images/ClaraBarton.jpg', import.meta.url),
          content: 'Clara Barton [USA] (1821-1912)',
          importance: 'She is well known by starting American Red Cross. She brought it from Europe and founded in USA. She is also known by serving in the Americal Civil war as nurse to soldiers. Her service to soldiers was a social reform.'
        }, {
          group: 'christians',
          type: 'range',
          start: '1880-01-01',
          end: '1968-01-01',
          imagePath: new URL('../images/Helen_Keller.jpg', import.meta.url),
          content: 'Helen Keller [USA] (1880-1968)',
          importance: 'She was deaf and blind but learned to read and communicate in braille. She completer a bachelor degree and contributed to the rights of people with disabilities.'
        },
    ];

    // Create a DataSet (allows two way data-binding)
    const items = new DataSet(events.map((item) => Object.assign(
      {}, 
      item, 
      { 
        content: (item.imagePath === null || item.imagePath === undefined)? item.content : ''.concat(item.content, '<br />', '<img src="', item.imagePath, '" />'),
        title: (item.importance === null || item.importance === undefined)? ''.concat('<b>', item.content, '</b>') : ''.concat('<b>', item.content, '</b>', '<br/><br/>', item.importance) 
      }
    )));

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

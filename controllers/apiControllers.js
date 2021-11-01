const JsonFind = require("json-find");

var Feelings = require('../model/modelFeelings');
//var request = require("request");
const rp = require('request-promise');


//FEELINGS
//Insert New Feeling
let insertFeeling = (req, res) => {
    console.log(req.body);
    console.log("entering here");
    let ts = Date.now();
    var newFeeling = Feelings({
        matchId: req.body.matchId,
        randomGameId: req.body.randomGameId,
        gameEnding: req.body.gameEnding,
        deviceId: req.body.deviceId,
        date: ts,
        bored: req.body.bored,
        tense: req.body.tense,
        quiet: req.body.quiet,
        angry: req.body.angry,
        anxious: req.body.anxious,
        happy: req.body.happy,
        sad: req.body.sad,
        tired: req.body.tired
    });
    newFeeling.save().
        then
        (
            (newFeel) => {
                res.status(200).send(newFeeling); //devuelvo resultado query       
            },
            (err) => {
                res.status(500).send(err);
                console.log(err);
            }
        )
}

const getFeelingsbyId = async (req, res) => {
    console.log("get feelings by match id");
    //Obtener id busqueda
    let name = { matchId:  req.body.matchId };
    //Listar resultados

    Feelings.find(name, (err, text) => {
        if (err) {
            console.log(err);
            return res.status(500).send(text);
        }
        else {
            return res.status(200).send(text);
        }
    })
};

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
}


// let getAllFeelings = async (req, res) => {
//     console.log("Getting List");

//     let doc = [];
//     let randomGameIds = await Feelings.distinct('randomGameId');
//     console.log(randomGameIds);
//     await Feelings.find(function (err, List) {
//         Feelings.distinct('deviceId'). //.select('randomGameId').
//         exec(async function (err, deviceIds) {
//             if (err) res.status(500).send(err);
//             console.log(deviceIds);
//             await asyncForEach(deviceIds, async(deviceId) => {
//                 let doc2 = [];
//                 await asyncForEach(randomGameIds, async(randomGameId) => {
//                     let id = { 
//                         deviceId: deviceId,
//                         randomGameId: randomGameId
//                     };
//                     let entry = {};
//                         let added = [];
//                         let id = 0;
//                         for (var key in List){
//                             // console.log(key);
//                             if (List.hasOwnProperty(key) && List[key].deviceId === deviceId && List[key].randomGameId === randomGameId && List[key].gameEnding === false) {
//                                 // console.log(List[key]);
//                                 if (added.indexOf(deviceId) !== -1){

//                                     added.push(deviceId);
//                                     let entry2 = {};
//                                     entry2.deviceId = List[key].deviceId;
//                                     entry2.data = List[key];
//                                     doc.push(entry2);
//                                     console.log(doc);
//                                 }

//                                 // var index = doc.findIndex(function(item, i){
//                                 //     return item.deviceId === deviceId
//                                 // });
//                                 // var index = doc.map(function(o) { return o.deviceId; }).indexOf(deviceId);
//                                 // console.log(index);
//                                 // if (index === -1) {
//                                 //     doc.push(entry2);
//                                 // }
//                                 // else {
//                                 //     let data = [];
//                                 //     data.push(doc[index].data);
//                                 //     data.push(List[key]);
//                                 //     // console.log(data);
//                                 //     doc[index].data = data;
//                                 // }
                                
//                             }
//                             if (List.hasOwnProperty(key) && List[key].deviceId === deviceId && List[key].randomGameId === randomGameId && List[key].gameEnding === true) {
//                                 // console.log(List[key]);
//                                 var len = doc.lenght;
//                                 console.log(len);
//                                 let entry = doc[len-1];
//                                 console.log(entry);
//                                 data = entry.data;
//                                 data.push(List[key]);
//                                 entry.data = data;
                                
                                
//                             }
//                         }
                    
//                     // await Feelings.find(id, (err, match) => {
//                     //     if (err) {
//                     //         console.log(err);
//                     //         return res.status(500).send("ERROR");
//                     //     }
//                     //     else {
//                     //         if(match != "") 
//                     //         {
//                     //             let entry2 = {};
//                     //             entry2.deviceId = match[0].deviceId;
//                     //             entry2.data = match;
//                     //             doc.push(entry2);
//                     //             // console.log(match);
//                     //         }

//                     //     }
//                     // });
//                 });
//             });
//             return res.status(200).send(doc);
//         });
//     });
//             // let id = { deviceId: element };
//             // await Feelings.find(id, (err, text2) => {
//             //     if (err) {
//             //         console.log(err);
//             //         return res.status(500).send("ERROR");
//             //     }
//             //     else {
//             //         // console.log(text2);
//             //         // doc.push(text2);
//             //         let entry = {};
//             //         entry.deviceId = element;
//             //         // entry.data = text2;

//             //         // console.log(text2);
//             //         let doc2 = [];
//             //         asyncForEach(randomGameIds, async(element) => {
//             //             let entry2 = {};
//             //             let dataentry = [];
//             //             asyncForEach(text2, async(element2) => {
//             //                 // console.log(text2);
//             //                 if (element === element2.randomGameId){
//             //                     // if (entry.randomGameId != element) {
//             //                         entry2.randomGameId = element;

//             //                     // }
//             //                     dataentry.push(element2);
//             //                     console.log(element2.date);

//             //                 }
//             //                 // if (hasdata) {doc2.push(entry);}
//             //             });
//             //             entry2.data = dataentry;
//             //             doc2.push(entry2);
//             //             if(dataentry.length != 0) {
//             //                 console.log("entering");
                            
//             //             }
                        

                        

                        
//     //                 });

//     //                 entry.data = doc2;
//     //                 doc.push(entry);
//     //             }
//     //         });
            
//     //     });
//     //     return res.status(200).send(doc);

//     // });
//     // await res.status(200).send(doc);
// };

let getAllFeelings = async (req, res) => {
    console.log("Getting List");


    /*
    {
                "_id": "616abed8846ecb00235372ca",
                "matchId": "1",
                "randomGameId": "4kw7t7czarodn2pxt5e6",
                "gameEnding": true,
                "deviceId": "2ca3df60cc83d47da4dc065c6a516162d8788408",
                "date": "2021-10-16T12:00:24.367Z",
                "bored": false,
                "tense": false,
                "quiet": true,
                "angry": true,
                "anxious": false,
                "happy": false,
                "sad": false,
                "tired": false,
                "__v": 0
            }
    */
    let doc = [];
    let added = {};
    let id = 0;
    await Feelings.find(function (err, List) {
        for(var key in List){
            let dat = [];
            rid = List[key].randomGameId;
            console.log(added);
            if (rid in added) {
                let sid = added[rid];
                dat[0] = doc[sid].data[0];
                dat.push(List[key]);
                var diff = {};
                diff.randomGameId = dat[0].randomGameId;
                diff.matchId = dat[0].matchId;
                diff.devideId = dat[0].deviceId;
                diff.diff = true;
                diff.date = "";
                diff.gameEnding = "";
                diff.bored = (dat[0].bored !== dat[1].bored ) ? true : false;
                diff.tense = (dat[0].tense !== dat[1].tense ) ? true : false;
                diff.quiet = (dat[0].quiet !== dat[1].quiet ) ? true : false;
                diff.angry = (dat[0].angry !== dat[1].angry ) ? true : false;
                diff.anxious = (dat[0].anxious !== dat[1].anxious ) ? true : false;
                diff.happy = (dat[0].happy !== dat[1].happy ) ? true : false;
                diff.sad = (dat[0].sad !== dat[1].sad ) ? true : false;
                diff.tired = (dat[0].tired !== dat[1].tired ) ? true : false;
                dat.push(diff);
                doc[sid].data = dat;
            }
            else{
                let qwe = {};
                added[rid] = id;
                id++;
                qwe.deviceId = List[key].deviceId;
                qwe.data = [];
                qwe.data.push(List[key]);
                doc.push(qwe);
            }
            
            
        }
        return res.status(200).send(doc);


    });

};

module.exports = { insertFeeling, getAllFeelings, getFeelingsbyId  };

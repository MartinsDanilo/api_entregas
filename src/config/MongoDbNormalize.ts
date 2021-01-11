// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> onlyPlaceAtivo
// db.getCollection('campanha').update(
//     // query
//     {
//         publico: 'PLACES',
//         onlyPlaceAtivo: { $exists: false },
//     },

//     // update
//     {
//         $set: {
//             onlyPlaceAtivo: false,
//         },
//     },

//     // options
//     {
//         multi: true, // update only one document
//         upsert: false, // insert a new document, if no existing document match the query
//     },
// );

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> onlyUserAlreadyBought
// db.getCollection('campanha').update(
//     // query
//     {
//         "publico" : "USUARIOS",
//         "onlyUserAlreadyBought": { $exists: false }
//     },

//     // update
//     {
//         $set: {
//             onlyUserAlreadyBought: false
//         }
//     },

//     // options
//     {
//         "multi" : true,  // update only one document
//         "upsert" : false  // insert a new document, if no existing document match the query
//     }
// );

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> onlyUserAlreadyBoughtUsingPix
// db.getCollection('campanha').update(
//     // query
//     {
//         "publico" : "USUARIOS",
//         "onlyUserAlreadyBoughtUsingPix": { $exists: false }
//     },

//     // update
//     {
//         $set: {
//             onlyUserAlreadyBoughtUsingPix: false
//         }
//     },

//     // options
//     {
//         "multi" : true,  // update only one document
//         "upsert" : false  // insert a new document, if no existing document match the query
//     }
// );

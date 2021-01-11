// // db.getCollection('resposta').createIndex({
// //   "campanhaId": 1,
// //   "usuarioId": 1,
// //   "placeId": 1
// // }, { unique: true })

// // Nex function
// db.getCollection('campanha').createIndex(
//     {
//         isAtivo: 1,
//         publico: 1,
//         dataInicio: 1,
//         dataFim: 1,
//         filtersOut: 1,
//         filtersIn: 1,
//         // customMatch
//         tipo: 1,
//         customFields: 1, // só usado no $exists para mobile
//         onlyPlaceAtivo: 1,
//         onlyUserAlreadyBought: 1,
//     },
//     { name: 'nextFunction' },
// );

// // 90 days NPS
// db.getCollection('resposta').createIndex(
//     {
//         campanhaTipo: 1,
//         campanhaPublico: 1,
//         usuarioId: 1,
//         placeId: 1,
//         createdAt: 1, // para a query de 90 dias NPS
//     },
//     { name: '90daysNPS' },
// );

// // Next Function
// db.getCollection('resposta').createIndex(
//     {
//         campanhaId: 1,
//         usuarioId: 1,
//         placeId: 1,
//     },
//     { name: 'campaignAnswered' },
// );

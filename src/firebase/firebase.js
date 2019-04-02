import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCgvdVc-upCjmrXBIOmgpuwETNrQ20AuLw",
  authDomain: "expensify2ndround.firebaseapp.com",
  databaseURL: "https://expensify2ndround.firebaseio.com",
  projectId: "expensify2ndround",
  storageBucket: "expensify2ndround.appspot.com",
  messagingSenderId: "411908573447"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };




// //child_removed
// database.ref('expenses')
//   .on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   }, (e)=>{
//     console.log(e);    
//   }
// )

// //child_changed
// database.ref('expenses')
//   .on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   }, (e)=>{
//     console.log(e);    
//   }
// )

// //child_added
// database.ref('expenses')
//   .on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
//   }, (e)=>{
//     console.log(e);    
//   }
// )


// database.ref('expenses').push({
//   description:'udemy',
//   note:'Javascript',
//   amount:'10.99',
//   createdAt:'Jan'
// });

// database.ref('expenses')
//   .on('value', (snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//       expenses.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   }, (e)=>{
//     console.log("val");    
//   }
// )

// database.ref('expenses').push({
//   description:'udemy',
//   note:'React',
//   amount:'10.99',
//   createdAt:'Jan'
// });




// const onValuechange = database.ref()
//   .on('value', 
//   (snapshot)=>{
//     const namex = snapshot.val().name;
//     const titlex = snapshot.val().job.title;
//     const companyx = snapshot.val().job.company;
//     console.log(`${namex} is a ${titlex} at ${companyx}`)}, 
//   (e)=>{console.log('Error :',e)})


// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })

// setTimeout(() => {
//   database.ref('age').set(29)
// }, 3500);

// setTimeout(() => {
//   database.ref().off()
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30)
// }, 10500);

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Fetch failed ', e);  
//   }); 


// database.ref().set({
//   name: 'Nasrul Azim',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'KL',
//     country: "MAL"
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed ', e);  
// }); 

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city':'Seattle'
// });

// database.ref('isSingle').remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });

  
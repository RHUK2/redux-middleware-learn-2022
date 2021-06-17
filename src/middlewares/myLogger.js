// function middleware(store) {
//   return function (next) {
//     return function (action) {
//       // 하고 싶은 작업...
//       console.log(action);
//       console.log('\t', store.getState());
//       return next(action);
//     };
//   };
// }

const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log('\t', store.getState());
  return next(action);
};

export default myLogger;

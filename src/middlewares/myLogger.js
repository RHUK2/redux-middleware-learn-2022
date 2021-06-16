// function middleware(store){
//     return function(next){
//         return function(action) {
//             // 하고 싶은 작업...
//             console.log(action);
//             const result = next(action);
//             return result;
//         }
//     }
// }

const myLogger = (store) => (next) => (action) => {
  console.log(action);
  console.log('\t', store.getState());

  const result = next(action);
  return result;
};

export default myLogger;

/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  let array = [];
        
        // Loop through array values
        for(let i = 0; i < data.length; i++){
            if(array.indexOf(data[i]) === -1) {
                array.push(data[i]);
            }
        }
        return array.sort((a,b)=>a-b);
}

console.log(result(data));

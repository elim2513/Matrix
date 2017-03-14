const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
    let mtrx = A
    let p = p
    for(a=0;a<p;p++){
      let mtrx(mtrx.prod(mtrx));
    }
  }
}


//testing code
console.log(power(A,10));

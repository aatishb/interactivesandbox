// this p5 sketch is written in instance mode
// read more here: https://github.com/processing/p5.js/wiki/Global-and-instance-mode

function sketch(parent) { // we pass the sketch data from the parent
  return function( p ) { // p could be any variable name

    let data = parent.data.variables;

    if (parent.data.code) {
      try {
        eval(parent.data.code);
      } catch(error) {
        console.log(parent.data.code);
        console.log(error);
      }
    }

  };
}
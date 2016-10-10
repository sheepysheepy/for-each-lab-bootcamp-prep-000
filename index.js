

function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  cats = ['bert', 'ernie', 'bob']
  cats.forEach(callback)
  return cats;
}

function doToArray(array, callback) {
  array.forEach(callback)
}

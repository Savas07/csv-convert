exports.toJson = function (data) {
  // check if data is not a string
  if (typeof data !== 'string') {
    // if not, throw error
    throw new Error('Data must be a string');
  }

  let rows = data.split('\n');
  rows.pop();
  var headers = rows[0].split(',');
  console.log(headers);
  var list = [];
  rows.forEach((row, index) => {
    if (index > 0) {
      let values = row.split(',');
      let obj = {};
      headers.forEach((header, index) => {
        header = header.toLowerCase().replace(/ /g, '_');
        obj[header] = values[index];
      });
      list.push(obj);
    }
  });
  return list;
};

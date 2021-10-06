export const calculateBinaryNumber = (bin) => {
  bin = String(bin);
  bin = bin.split("").reverse();
  var result = 0;
  for (let i = 0; i < bin.length; i++){
    result += (Math.pow(2,i) * parseInt(bin[i]));
  }
  return result;
}
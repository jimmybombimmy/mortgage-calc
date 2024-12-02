export default function convertNumToGBP(value, setValue) {
  let valueNumOnly = value.replace(/\D/g, "")

  let valueOutput = "£"
  
  for(let i = 0; i < valueNumOnly.length; i++) {
    if ((valueNumOnly.length - i) % 3 == 0 && i != 0) {
      valueOutput += ","
    }
    valueOutput += valueNumOnly[i]
  }

  if (setValue) {
    setValue(valueOutput)

  }

  return valueOutput
}
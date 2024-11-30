export default function convertGBPToNum(value) {
  return parseInt(value.replace(/\D/g, ""))
}
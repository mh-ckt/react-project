/**
 * 生成一个用不重复的ID
 */
const genNonDuplicateID = function () {
  return Math.random().toString().substring(2, 24) + Math.random().toString().substring(2, 24)
}
export { genNonDuplicateID }

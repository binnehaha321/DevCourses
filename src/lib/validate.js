const REGEXP = {
  username: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
}
const REQUIRED = 'Please fill in the field'
export function validate(rules, forms) {
  const errorObject = {}
  Object.entries(rules).forEach(([key, values]) => {
    values.forEach((rule) => {
      if (rule.required && !forms[key]?.trim()) {
        errorObject[key] = REQUIRED
      }
      if (forms[key]?.trim() && rule.regexp && !REGEXP[key].test(forms[key])) {
        errorObject[key] = rule.message
      }
    })
  })
  return errorObject
}

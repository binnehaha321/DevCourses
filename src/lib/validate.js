const REGEXP = {
  username: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  email:  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  website: /\b(http(s)?:\/\/(www\.)?[a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}([-a-zA-Z0-9@:%_+.~#?&//=]*)\b)/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
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

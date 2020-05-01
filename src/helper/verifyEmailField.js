const validateEmailField = (emailString) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailString)

export default validateEmailField

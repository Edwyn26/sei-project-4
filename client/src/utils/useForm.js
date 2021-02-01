import React from 'react'

function useForm(initialState) {
  const [formdata, setFormdata] = React.useState(initialState)
  const [errors, setErrors] = React.useState(initialState)
  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    const nextState = { ...formdata, [event.target.name]: value }
    const nextErrorState = { ...errors, [event.target.name]: '' }
    setFormdata(nextState)
    setErrors(nextErrorState)
    console.log(formdata)
  }

  return {
    formdata,
    setFormdata,
    errors,
    handleChange,
    setErrors
  }
}
export default useForm
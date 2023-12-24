import styled from 'styled-components'
const Errors = styled.span`
  color: red;
  position: absolute;
  font-size: 0.876rem;
  top: 100%;
  font-style: italic;
`
export default function Input({
  placeholder,
  icon,
  type = 'text',
  error,
  ...props
}) {
  return (
    <div className='relative flex gap-2 w-4/5 p-2.5 rounded-lg bg-blue-500 bg-opacity-10 border-2 border-solid border-blue-500 border-opacity-50'>
      <img src={icon}></img>
      <input
        className='w-full  bg-blue-500 bg-opacity-0 focus:outline-none '
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {error && <Errors>{error}</Errors>}
    </div>
  )
}

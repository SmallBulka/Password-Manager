import React from 'react'

type PasswordUppercaseProps = {
  passwordUppercase: number;
  setPasswordUppercase: (include: boolean) => void;
}
function IncludelUppercase({passwordUppercase, setPasswordUppercase}: PasswordUppercaseProps) {
  return (
    <div>
      <input onChange={(e) => setPasswordUppercase(+e.target.value)} type="checkbox" id="passwordUppercase" className="checkbox checkbox-primary" defaultChecked={passwordUppercase}  onClick={() => setPasswordUppercase(!passwordUppercase)}/>
      <label htmlFor="passwordUppercase" className='text-black p-3'>Include Uppercase</label>
    </div>
  )
}

export default IncludelUppercase
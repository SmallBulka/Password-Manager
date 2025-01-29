
import React from 'react'

type IncludelLowercaseProps = {
  passwordLowercase: string;
  setPasswordLowercase: (include: boolean) => void;
}
function IncludelLowercase({passwordLowercase, setPasswordLowercase}: IncludelLowercaseProps) {
  return (
    <div>
      <input onChange={(e) => setPasswordLowercase(+e.target.value)} type="checkbox" id="passwordUppercase" className="checkbox checkbox-primary" defaultChecked={passwordLowercase}  onClick={() => setPasswordLowercase(!passwordLowercase)}/>
      <label htmlFor="passwordLowercase" className='text-black p-3'>Include Lowercase</label>
    </div>
  )
}

export default IncludelLowercase
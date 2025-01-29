import React from 'react'

type IncludeNumbersProps = {
  passwordNumbers: number;
  setPasswordNumbers: (include: number) => void;
}
function IncludeNumbers({passwordNumbers, setPasswordNumbers}: IncludeNumbersProps) {
  return (
    <div>
      <input onChange={(e) => setPasswordNumbers(+e.target.value)} type="checkbox" id="passwordUppercase" className="checkbox checkbox-primary" defaultChecked={passwordNumbers}  onClick={() => setPasswordNumbers(!passwordNumbers)}/>
      <label htmlFor="passwordNumbers" className='text-black p-3'>Include Numbers</label>
    </div>
  )
}

export default IncludeNumbers
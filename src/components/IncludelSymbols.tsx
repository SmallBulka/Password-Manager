import React from 'react'

type IncludelSymbolsProps = {
  passwordSymbols: number;
  setPasswordSymbols: (include: boolean) => void;
}
function IncludelSymbols({passwordSymbols, setPasswordSymbols}: IncludelSymbolsProps) {
  return (
    <div>
      <input onChange={(e) => setPasswordSymbols(+e.target.value)} type="checkbox" id="passwordSymbols" className="checkbox checkbox-primary" defaultChecked={passwordSymbols}  onClick={() => setPasswordSymbols(!passwordSymbols)}/>
      <label htmlFor="passwordSymbols" className='text-black p-3'>Include Symbols</label>
    </div>
  )
}

export default IncludelSymbols
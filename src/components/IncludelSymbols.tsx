

type IncludelSymbolsProps = {
  passwordSymbols: any;
  setPasswordSymbols: (include: boolean) => void;
}
function IncludelSymbols({passwordSymbols, setPasswordSymbols}: IncludelSymbolsProps) {
  return (
    <div>
      <input type="checkbox" id="passwordSymbols" className="checkbox checkbox-primary" defaultChecked={passwordSymbols}  onClick={() => setPasswordSymbols(!passwordSymbols)}/>
      <label htmlFor="passwordSymbols" className='text-black p-3'>Include Symbols</label>
    </div>
  )
}

export default IncludelSymbols
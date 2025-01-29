


type IncludelLowercaseProps = {
  passwordLowercase: any;
  setPasswordLowercase: (include: boolean) => void;
}
function IncludelLowercase({passwordLowercase, setPasswordLowercase}: IncludelLowercaseProps) {
  function handleIncludeLowercaseChange() {
    setPasswordLowercase(!passwordLowercase);
  }
  return (
    <div>
      <input type="checkbox" id="passwordUppercase" className="checkbox checkbox-primary" defaultChecked={passwordLowercase}  onChange={handleIncludeLowercaseChange}/>
      <label htmlFor="passwordLowercase" className='text-black p-3'>Include Lowercase</label>
    </div>
  )
}

export default IncludelLowercase

type IncludeNumbersProps = {
  passwordNumbers: any;
  setPasswordNumbers: (include: boolean) => void;
}
function IncludeNumbers({passwordNumbers, setPasswordNumbers}: IncludeNumbersProps) {
  return (
    <div>
      <input  type="checkbox" id="passwordUppercase" className="checkbox checkbox-primary" defaultChecked={passwordNumbers}  onClick={() => setPasswordNumbers(passwordNumbers)}/>
      <label htmlFor="passwordNumbers" className='text-black p-3'>Include Numbers</label>
    </div>
  )
}

export default IncludeNumbers
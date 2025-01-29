


type PasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
}
function PasswordLength({passwordLength, setPasswordLength}: PasswordLengthProps) {
  return (
    <div className='mb-2 '>
      <label className="flex items-center justify-between text-slate-100">
        <div className='text-black'>Password Length</div>
        <div className='text-2xl text-primary'>{passwordLength}</div>
        
        </label>
      <input onChange={(e) => setPasswordLength(+e.target.value)} type="range" min="4" max="20" id="passwordLength" className="range range-primary" defaultValue={length} />
    </div>
  )
}
//отображает выбор длинны пароля в диапазоне от 4 до 20.
export default PasswordLength
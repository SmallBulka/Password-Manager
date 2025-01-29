import { Header } from './components/ui/shared/header'
import { useState } from 'react'
import PasswordLength from './components/PasswordLength';
import IncludelUppercase from './components/IncludelUppercase';
import IncludelLowercase from './components/IncludelLowercase';
import IncludeNumbers from './components/IncludeNumbers';
import IncludelSymbols from './components/IncludelSymbols';
import { Button } from './components/ui/button';
import generatePassword from './utils/generatePassword';
import { CopyCheck } from 'lucide-react';
import SavedPasswords from './components/SavedPasswords';



function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [passwordUppercase, setPasswordUppercase] = useState<boolean>(true);
  const [passwordLowercase, setPasswordLowercase] = useState<boolean>(true);
  const [passwordNumbers, setPasswordNumbers] = useState<boolean>(true);
  const [passwordSymbols, setPasswordSymbols] = useState<boolean>(true);
  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: passwordLength,
      incUppercase : passwordUppercase,
      incLowercase : passwordLowercase,
      incNumbers : passwordNumbers,
      incSymbols : passwordSymbols,
    });
    setPassword(newPassword);
  }
  return (
    <>
      <div className="sticky top-0 bg-white shadow-lg shadow-black/4 z-50">
      <Header/>
      </div>
      <div className='flex aling-baseline p-8 justify-evenly'>
      <div className='flex flex-col justify-center items-center gap-4'>
        {password && (
          <div className='rounded-lg border shadow-lg px-4 py-2 break-all flex justify-between items-center mb-4 w-[20rem]'>
            <div>{password}</div>
            <button onClick={() => navigator.clipboard.writeText(password)}><CopyCheck /></button>
            </div>
        )}
 
      <div className='flex flex-col justify-start gap-3  w-[20rem]  rounded-lg border shadow-lg p-7'>
        <PasswordLength 
        passwordLength = {passwordLength} 
        setPasswordLength = {setPasswordLength}
        />
        < IncludelUppercase 
        passwordUppercase = {passwordUppercase}
        setPasswordUppercase = {setPasswordUppercase}/>
        < IncludelLowercase
        passwordLowercase = {passwordLowercase}
        setPasswordLowercase = {setPasswordLowercase}
        />
        <IncludeNumbers
        passwordNumbers = {passwordNumbers}
        setPasswordNumbers = {setPasswordNumbers}
        />
        <IncludelSymbols
        passwordSymbols = {passwordSymbols}
        setPasswordSymbols = {setPasswordSymbols}
        />
        <Button className='w-100%  ' onClick={handleGeneratePassword}>Generate Password</Button>
        </div>
      
      </div>
      <SavedPasswords />
      </div>

    </>  

  )
}

export default App

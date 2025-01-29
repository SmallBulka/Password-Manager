import { getNewPassword } from '@/utils/generatePassword'
import { useEffect, useState } from 'react'
import WebList from './WebList'
import { Button } from './ui/button'
import { Eye, EyeClosed } from 'lucide-react'


function SavedPasswords() {
    const [website, setWebsite] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState(getNewPassword())
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [passwords, setPasswords] = useState([])
  
    useEffect(() => {
      const storedPasswords = localStorage.getItem('passwords')
      if (storedPasswords) {
        setPasswords(JSON.parse(storedPasswords))
      }
    }, [])
  
    const handleTogglePassword = () => {
      setPasswordVisible(!passwordVisible)
    } //изменение видимости ввода пароля
  
    const handleDelete = (index: number) => {
      const newPasswords = [...passwords]
      newPasswords.splice(index, 1)
      setPasswords(newPasswords)
      localStorage.setItem('passwords', JSON.stringify(newPasswords))
    }// удаляет пароль из списка и обновляет хранилище(по индексу)
  
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
  
      if (!website || !password) {
        alert('Пожалуйста, заполните все поля ввода')
        return
      }
  
      

  
      console.log(website)
      // console.log(cleanedInput)
      const newPassword = {
        website,
        username,
        password,
      }
  
      const newPasswords = [...passwords, newPassword]
      setPasswords(newPasswords=>newPasswords)
      localStorage.setItem('passwords', JSON.stringify(newPasswords))
  
      setWebsite('')
      setUsername('')
      setPassword(getNewPassword())
    }
  
    return (
      <>
        <div className=' shadow-lg rounded-lg p-4  my-8 bg-white border '>
          <h2 className='text-2xl font-bold mb-4 px-2 '>Save Password</h2>
  
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Enter website'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className='w-full p-2 mb-3 border rounded-lg border-gray-300 '
            />
  
            <input
              type='text'
              placeholder='Enter Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full p-2 mb-3 border rounded-lg border-gray-300 '
            />
            <div className='relative'>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 mb-4 border rounded-lg border-gray-300 '
              />
              <span
                className='absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer'
                onClick={handleTogglePassword}
              >
                <div className=' pb-3'>{passwordVisible ? (
                  <EyeClosed className='w-6 h-6 ' />
                ) : (
                  <Eye className='w-6 h-6' />
                )}</div>
                
              </span>
            </div>
  
            <Button 
              type='submit'
              variant={'default'}
              className='w-full p-2 secondary text-white rounded-lg cursor-pointer'
            >
              Save Password
            </Button>
          </form>
  
      
          <WebList websites={passwords} onDelete={handleDelete} />
          
        </div>
      </>
    )
  
}

export default SavedPasswords
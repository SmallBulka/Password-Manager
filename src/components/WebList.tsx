import { Search, Trash2 } from "lucide-react"
import { useState } from "react";



function WebList({ websites = [], onDelete }: any) {
  const handleDelete = (index: number) => {
    onDelete(index)
  }
  //поиск по сайтам
  const [searchTerm, setSearchTerm] = useState<string>('');
  // websites.map(website => console.log("website",website))
  const filteredItems = websites.filter((website: any) =>
    website.website?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
    <div className='max-w-2xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Website List</h1>
      <div className="flex mb-4">
      <input type="text" placeholder="Search" className="w-full p-2  border rounded-lg border-gray-300" onChange={(e) => setSearchTerm(e.target.value)}/>
      <button><Search className="w-6 h-6  m-2"/></button>
      
      </div>
       {/* список сайтов */}
      <ul className='space-y-4'>
        {filteredItems.map((website: any, index: number) => (
          <li
            key={index}
            className='flex items-center space-x-4 border-b pb-2 relative'
          >
            <img
              src={`https://${website.website}.com/favicon.ico`}
              alt='Web'
              onError={(event) => {event.currentTarget.onerror = null; event.currentTarget.src ='https://img.icons8.com/color/48/internet--v1.png'
              }}
              className='w-8 h-8 rounded-full'
            />
            <div className='flex-1'>
              <a
                href={`https://${website.website}.com`}
                
                className='text-blue-500 hover:underline'
              >
                {`${website.website}`}
              </a>

              <div className='text-gray-500 text-sm'>
                Login: {website.username}
                <br />
                Password: {website.password}
              </div>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className='absolute right-0 text-red-500 hover:text-red-700 cursor-pointer'
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WebList
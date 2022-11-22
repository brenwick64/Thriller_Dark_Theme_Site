import { useState } from 'react'
import Color from './components/Color'
import SideBar from './components/SideBar'
import MainPanel from './components/MainPanel'


const colors = ['#0D1117', '#535353', '#505050', '#737A82', '#ACB6C2', '#42455D', '#96C457', '#F7921E', '#FFEFC9', '#F9CD62', '#1D009A', '#884C94']


function App() {
  const [selectedItem, setSelectedItem] = useState('html')

  const selectItem = (itemName) => {
    setSelectedItem(itemName)
    console.log(itemName);
  }

  return (
    <div className="w-screen h-auto min-h-screen flex gap-10 items-center flex-col py-24 bg-slate-700">

      <h1 className='text-orange-300 text-6xl'>Thriller Dark Theme</h1>
      <p className='text-gray-400 text-2xl'>A Spooky VSCode Theme for Halloween Coding</p>

      <div className=' flex justify-center items-center h-screen w-full overflow-hidden'>
        <div className='flex w-11/12 max-w-6xl h-3/4 rounded-xl overflow-hidden shadow-black shadow-lg'>
          <SideBar selectItem={selectItem} selectedItem={selectedItem} />
          <MainPanel selectedItem={selectedItem} />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-10'>
        <p className='text-2xl text-gray-200'>Color Palette</p>
        <div className='max-w-sm flex justify-center items-center gap-6 flex-wrap'>
          {colors.map(color => {
            return <Color key={color} color={color} />
          })}
        </div>
      </div>
      
    </div>
  )
}

export default App

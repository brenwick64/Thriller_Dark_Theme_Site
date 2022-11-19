import screenshot from './assets/dark-theme-screenshot.png'
import Color from './components/Color'
import SidebarIcon from './components/SidebarIcon'

import { IoLogoJavascript } from 'react-icons/io'
import { ImHtmlFive2 } from 'react-icons/im'
import { TbBrandCss3 } from 'react-icons/tb'
import { TbBrandPython }from 'react-icons/tb'
import { DiReact } from 'react-icons/di'




const colors = ['#0D1117', '#535353', '#505050', '#737A82', '#ACB6C2', '#42455D', '#96C457', '#F7921E', '#FFEFC9', '#F9CD62', '#1D009A', '#884C94']

function App() {

  return (
    <div className="w-screen h-auto min-h-screen flex gap-10 justify-center items-center flex-col px-12 py-24">
      <h1 className='text-orange-300 text-6xl'>Thriller Dark Theme</h1>
      <p className='text-gray-400 text-2xl'>A Spooky VSCode Theme for Halloween Coding</p>

      <div className=' flex justify-center items-center h-screen w-full'>
        <div className='flex w-3/4 h-3/4 rounded-xl overflow-hidden shadow-black shadow-lg'>


          <div className='flex flex-col items-center w-28 h-full py-6 bg-primary'>
            <SidebarIcon icon={<ImHtmlFive2 size='28' />} />
              <SidebarIcon icon={<TbBrandCss3 size='36' />} />
              <SidebarIcon icon={<IoLogoJavascript size='28'/>} />
              <SidebarIcon icon={<DiReact size='36' />} />
              <SidebarIcon icon={<TbBrandPython size='36' />} />
          </div>


          <div className='flex w-full h-full bg-gray-800'> </div>
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

import screenshot from './assets/dark-theme-screenshot.png'
import Color from './components/Color'

const colors = ['#0D1117', '#535353', '#505050', '#737A82', '#ACB6C2', '#42455D', '#96C457', '#F7921E', '#FFEFC9', '#F9CD62', '#1D009A', '#884C94']

function App() {

  return (
    <div className="flex gap-10 justify-center items-center flex-col px-12 py-24">
      <h1 className='text-orange-300 text-6xl'>Thriller Dark Theme</h1>
      <p className='text-gray-400 text-2xl'>A Spooky VSCode Theme for Halloween Coding</p>
      <img className='w-2/3vw shadow-lg shadow-gray-900' src={screenshot} alt=''></img>
      <div className='flex flex-col justify-center items-center gap-10'>
        <p className='text-2xl text-gray-200'>Color Palette</p>
        <div className='max-w-sm flex justify-center items-center gap-6 flex-wrap'>
          {colors.map(color => {
            return <Color color={color} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App

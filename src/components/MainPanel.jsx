import htmlImage from '../assets/html_img.png'
import cssImage from '../assets/css_img.png'
import jsImage from '../assets/js_img.png'
import reactImage from '../assets/react_img.png'
import pythonImage from '../assets/python_img.png'


function MainPanel({ selectedItem }) {

  function getImage(selectedItem) {
    switch(selectedItem) {
      case 'html':
        return <img className='opacity-0 animate-appear' alt='' src={htmlImage} key='html'></img>
      case 'css':
        return <img className='opacity-0 animate-appear' alt='' src={cssImage} key='css'></img>
      case 'js':
        return <img className='opacity-0 animate-appear' alt='' src={jsImage} key='js'></img>
      case 'react':
        return <img className='opacity-0 animate-appear' alt='' src={reactImage} key='react'></img>
      case 'python':
        return <img className='opacity-0 animate-appear' alt='' src={pythonImage} key='python'></img>
      default:
        return null
    }
  }

  return (
    <div className='flex w-full h-full bg-primary p-10'>
      {getImage(selectedItem)}
    </div>
  );
}

export default MainPanel

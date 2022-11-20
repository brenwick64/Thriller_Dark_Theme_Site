


import { IoLogoJavascript } from 'react-icons/io'
import { ImHtmlFive2 } from 'react-icons/im'
import { TbBrandCss3 } from 'react-icons/tb'
import { TbBrandPython }from 'react-icons/tb'
import { DiReact } from 'react-icons/di'

function SideBar({ selectItem, selectedItem }) {
  
  return (
    <div className='flex flex-col items-center w-28 h-full py-6 bg-gray-900'>
      <SidebarIcon selectItem={selectItem} selectedItem={selectedItem} name='html' icon={<ImHtmlFive2 size='28' />} />
      <SidebarIcon selectItem={selectItem} selectedItem={selectedItem} name='css' icon={<TbBrandCss3 size='36' />} />
      <SidebarIcon selectItem={selectItem} selectedItem={selectedItem} name='js' icon={<IoLogoJavascript size='28'/>} />
      <SidebarIcon selectItem={selectItem} selectedItem={selectedItem} name='react' icon={<DiReact size='36' />} />
      <SidebarIcon selectItem={selectItem} selectedItem={selectedItem} name='python' icon={<TbBrandPython size='36' />} />
    </div>
  )
}

const SidebarIcon = ({ selectItem, selectedItem, name, icon }) => {
  return (
    <div onClick={() => selectItem(name)} className={selectedItem === name ? 'sidebar-icon__c sidebar-icon-active__c' : `sidebar-icon__c`}>
        {icon}
    </div>
  )
}

export default SideBar






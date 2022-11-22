function Color({ color }) {

  return (
    <div className='relative cursor-pointer w-10 h-10 rounded-lg shadow-md shadow-gray-900 group' style={{ backgroundColor: color }}>
      <div className='sidebar-tooltip abs-center group-hover:scale-100'>{color}</div>  
    </div>  
  )
}

export default Color

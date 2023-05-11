export function Button(props) {
  return(
    <button className={`inline-flex items-center justify-center h-12 px-8 font-medium text-gray-300 bg-purple-300 hover:bg-purple-500 transition-colors duration-300 rounded ${props.className}`}>
      {props.children}
    </button>
  )
}
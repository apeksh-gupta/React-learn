import { useCallback , useState , useEffect , useRef } from "react"

function App() {
  const [length , setLength] = useState(10)
  const [numbersAllowed , setAllowedNumbers] = useState(false)
  const [charactersAllowed , setAllowedCharacters] = useState(false)
  const [password , setPassword] = useState("")
  const passwordRef = useRef(null)

  let passwordGenerator = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numbersAllowed)    str +=  '123456789'
    if (charactersAllowed) str += '!@#$%^&*(){}[]?<>~_+-='

    for(let i=1 ; i<=length ; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  } , [length , numbersAllowed , charactersAllowed , setPassword ])

  // const [isclicked , setIsClicked ]= useState(false)
  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  let copyPasswordToClipboard = useCallback( ()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 , 101);
    window.navigator.clipboard.writeText(password)
  } , [password])

  // const [isClicked, setIsClicked] = useState('');

  // let handleClick = () => {
  //   console.log("hello")
  //   if(event.)
  // };

  useEffect( ()=> { 
    passwordGenerator()
    } , [length , numbersAllowed , charactersAllowed , passwordGenerator ])
  return (   
    <>
      <div className="bg-slate-900 p-4">
        <h1 
          className="text-red-500 text-4xl text-center py-2">
          Password generator</h1>
        <div className="flex justify-center mt-4 mb-4">
          <input 
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          placeholder="Password"
          className=" resize rounded-l-md overflow-hidden align-middle p-1 placeholder-white bg-gray-500 font-bold font-serif " />
          <button 
            onClick={copyPasswordToClipboard} 
            // onKeyDown={handleClick}
            className= {`px-2 rounded-r-md bg-blue-500`}>
            Copy</button>
        </div>
        <div className="flex flex-wrap justify-center text-sm gap-x-8">
          <div className="flex items-center gap-x-2 ">
            <input 
              type="range"
              min={6} 
              max={100} 
              value={length}
              className="cursor-pointer py-2"
              onChange={ (e) => setLength(e.target.value)}
            />
            <label className="text-white py-2 font-bold text-lg">
              Length : {length}</label>          
          </div>
          <div className="flex items-center gap-x-2">
            <input 
                type="checkbox"
                defaultChecked={numbersAllowed}
                id='numberInput'
                onChange={()=>{
                  setAllowedNumbers( (prev)=> !prev)
                }}
                className="py-2 w-5 h-5" 
                />
            <label
              htmlFor="numberInput" 
              className="text-white py-2 font-bold text-lg">
              Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input 
                type="checkbox"
                defaultChecked={charactersAllowed}
                id="characterInput"
                onChange={()=>{
                  setAllowedCharacters( (prev)=>!prev)
                }}
                className="py-2 w-5 h-5" 
                />
            <label
              htmlFor="characterInput" 
              className="text-white py-2 font-bold text-lg">
              Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import Chat from "@/components/chat";
import Head from "next/head";
import custombg from "/styles/bg.module.css";
import Prompts from "@/components/prompts";
<div className="p-1 flex justify-center">
    <select onChange="" className="form-select appearance-none
    block
    w-full
    px-3
    py-1.5
    text-gray-100
    bg-gray-900 bg-clip-padding bg-no-repeat
    border border-slate-600
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-100 focus:bg-gray-900 focus:border-slate-600 focus:outline-none">
    {/* Prompts select button  */} 
    <Prompts/>
    </select>
</div>

const promptList = [
  {
      name: "AI assistant",
      request : {
        model: "text-davinci-003",
        prompt: "",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      }
  },
  {
      name: "English to other languages",
      request: {
        model: "text-davinci-003",
        prompt: "",
        temperature: 0.1,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }
  },
  {
      name: "Image generator",
      request: {
        prompt: "",
        n: 1,
        size: "512x512",
      }
  }
] 
export {promptList}; 

export default function Home() {
  return (
    <>
      {/* Head */} 
      <Head>
          <title>ChatGPT</title>
      </Head>
      {/* Main */}
      <div className={`w-full min-h-full ${custombg.customBg}`}>
        <div className="flex">
          {/* Sidebar */}
          <div className="bg-gray-800 h-screen w-1/5 p-2">
            <div>
              {/* New chat */}
              <div>
                <div className="text-gray-100 flex items-center text-xl p-3  bg-gray-900 rounded-md border border-slate-600 shadow-md m-1 hover:bg-gray-700" onClick="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                    <h2 className="text-sm px-1">
                        New chat
                    </h2>
                </div>
              </div>
              {/* Prompts */}
              <div>
                  <h2 className="text-sm px-2 py-1 text-gray-100">
                        Prompt options:
                  </h2>
                  <div className="p-1 flex justify-center">
                    <select onChange="" className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-gray-100
                    bg-gray-900 bg-clip-padding bg-no-repeat
                    border border-slate-600
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-100 focus:bg-gray-900 focus:border-slate-600 focus:outline-none">
                    {/* Prompts select button  */}
                    </select>
                  </div>
              </div>
            </div>
          </div> 
          {/* Main area */}
          <div className="w-4/5 relative">
            {/* Chat area */}
            <div id="chat" className="h-[90vh] overflow-auto scrollbar">
                <Chat/>
            </div>
            {/* Text input area */}
            <div>
              <div className="p-5 absolute bottom-0 right-0 left-0">
                <div className="flex justify-center mb-2">
                  {/* ClocLoader */}
                </div>
                <form className="relative" onSubmit="">
                  <input 
                    type="text"
                    placeholder= "Start chatting"
                    value=""
                    required
                    onChange=""
                    rows="1" 
                    className="block p-2.5 w-full text-sm text-gray-50 bg-gray-700 rounded-lg focus:outline-none ring-gray-500 focus:border-gray-500 shadow-md"
                  />  
                  <button type="submit" className="right-2 bottom-3 absolute pr-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray" className="w-5 h-5">
                      <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                    </svg>
                  </button>
                </form> 
              </div>
            </div>
          </div> 
        </div> 
      </div>

    </>
  )
}
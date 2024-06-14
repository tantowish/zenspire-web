'use client'

import { useRef, useState } from "react"

export const Accordion = ({ title, answer }: { title: string, answer: string }) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`p-4 lg:p-8 rounded-2xl bg-white shadow-md transition-all duration-300 ease-in-out ${accordionOpen ? 'border-2 border-[#12719C]' : 'border-1'}`}> 
        <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between items-center w-full">
            <span className="font-semibold text-sm lg:text-md pr-4 text-left text-slate-600">{title}</span>
            <span className={`p-2 rounded-full shadow-md transition-all duration-300 ease-in-out ${accordionOpen ? 'bg-[#12719C]' : 'bg-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`transition-all duration-300 ease-in-out ${accordionOpen ? 'rotate-90' : ''}`} width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill={`${accordionOpen ? 'white' : '#12719C'}`} d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"/></g></svg>
            </span>
        </button>
        <div className={`text-slate-600 transition-all duration-300 ease-in-out ${accordionOpen ? 'mt-4' : 'mt-0'}`}>
            <div ref={contentRef} className={`transition-all duration-300 ease-in-out overflow-hidden text-sm lg:text-md text-justify`} style={{ height: accordionOpen ? `${contentRef.current?.scrollHeight}px` : 0 }}>{answer}</div>
        </div>
    </div>
  )
}
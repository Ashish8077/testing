import React from 'react'

const FloatingButton = () => {
  return (
     <div className="fixed bottom-8 right-4 z-50 flex flex-col gap-3">
        <a
          href="tel:+919289351703"
          aria-label="Call us"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-200 transition-all duration-200 hover:bg-green-600 hover:scale-110"
        >
          <Phone size={18} />
          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            Call us
          </span>
        </a>
        <a
          href="https://wa.me/919289351703"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-200 transition-all duration-200 hover:bg-green-600 hover:scale-110"
        >
          <MessageCircle size={18} />
          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            WhatsApp
          </span>
        </a>
      </div>
  )
}

export default FloatingButton
import { Laptop2, LayoutList, Maximize2, Volume } from 'lucide-react'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
<div className="h-screen flex flex-col">
  <div className="flex flex-1">
    <aside className="w-72 bg-zinc-950 p-6">
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full'/>
        <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
        <div className='w-3 h-3 bg-green-500 rounded-full'/>
      </div>
      <nav className='space-y-5 mt-10'>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <HomeIcon/>
          Home</a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Search/>
          Search</a>
        <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
          <Library/>
          Yor Librery</a>
      </nav>
      <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock </a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo 2023</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Gospel - Internacional</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Aniversário do Juva</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>150 BPM</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock Monster</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hip Hop - Gangstar</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Machine</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>FlashBack 80's</a>
        <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Brasil - Só as Melhores</a>
      </nav>
    </aside>
    <main className="flex-1 p-6">
      <div className='flex items-center gap-4'>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeft/>
        </button>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronRight/>
        </button>
      </div>
      <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do Album"/>
          <strong>Appetitte For Destrucion</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play/>
          </button>
          </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do Album"/>
          <strong>Appetitte For Destrucion</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play/>
          </button>
          </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do Album"/>
          <strong>Appetitte For Destrucion</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play/>
          </button>
          </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do Album"/>
          <strong>Appetitte For Destrucion</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play/>
          </button>
          </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do Album"/>
          <strong>Appetitte For Destrucion</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play/>
          </button>
          </a>
        <a href='#' className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
          <Image src="/album.jpg" width={104} height={104} alt="Capa do Album"/>
          <strong>Appetitte For Destrucion</strong>
          <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
            <Play/>
          </button>
          </a>
      </div>
      <h2 className='font-semibold text-2xl mt-10'>Made for Jhonatan Lemes</h2>
      <div className='grid grid-cols-5 gap-4 mt-4 mx-auto'>
        <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10 w-56 mx-auto'>
          <Image src="/album.jpg" className='w-full rounded-md' width={104} height={104} alt="Capa Guns N' Roses"/>
          <strong className='font-semibold '>Daily Mix 1</strong>
          <span className='text-sm text-zinc-400'>Guns n' Roses, Bon Jovi, Abba and more</span>
        </a>
        <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10 w-56 mx-auto'>
          <Image src="/album.jpg" className='w-full rounded-md' width={104} height={104} alt="Capa Guns N' Roses"/>
          <strong className='font-semibold '>Daily Mix 2</strong>
          <span className='text-sm text-zinc-400'>Guns n' Roses, Bon Jovi, Abba and more</span>
        </a>
        <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10 w-56 mx-auto'>
          <Image src="/album.jpg" className='w-full rounded-md' width={104} height={104} alt="Capa Guns N' Roses"/>
          <strong className='font-semibold '>Daily Mix 3</strong>
          <span className='text-sm text-zinc-400'>Guns n' Roses, Bon Jovi, Abba and more</span>
        </a>
        <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10 w-56 mx-auto'>
          <Image src="/album.jpg" className='w-full rounded-md' width={104} height={104} alt="Capa Guns N' Roses"/>
          <strong className='font-semibold '>Daily Mix 4</strong>
          <span className='text-sm text-zinc-400'>Guns n' Roses, Bon Jovi, Abba and more</span>
        </a>
        <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10 w-56 mx-auto'>
          <Image src="/album.jpg" className='w-full rounded-md' width={104} height={104} alt="Capa Guns N' Roses"/>
          <strong className='font-semibold '>Daily Mix 5</strong>
          <span className='text-sm text-zinc-400'>Guns n' Roses, Bon Jovi, Abba and more</span>
        </a>
      </div>
    </main>
  </div>
  <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
    <div className='flex items-center gap-3'>
    <Image src="/album.jpg" className='' width={56} height={56} alt="Capa Guns N' Roses"/>
      <div className='flex flex-col'>
        <strong className='font-normal'>Welcome to the jungle</strong>
        <span className='text-sx text-zinc-400'>Guns n' Roses</span>
      </div>
    </div>


    <div className='flex flex-col items-center'>
      <div className='flex items-center gap-6'>
        <Shuffle size={20} className='text-zinc-200'/>
        <SkipBack size={20} className='text-zinc-200'/>
        <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play size={20}/>
          </button>
          <SkipForward size={20} className='text-zinc-200 gap-2'/>
          <Repeat size={20} className='text-zinc-200'/>
      </div>
      <div className='flex items-center gap-2'>
        <span className='text-xs text-zinc-500'>0:31</span>
        <div className='h1 rounded-full w-96 bg-zinc-600'>
          <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
        </div>
        <span className='text-xs text-zinc-500'>2:14</span>
      </div>
    </div>

    
    <div className='flex items-center gap-4'>
      <Mic2 size={20} />
      <LayoutList size={20}/>
      <Laptop2 size={20}/>
      <div className='flex items-center gap-2'><Volume size={20}/>
      <div className='h1 rounded-full w-24 bg-zinc-600'>
          <div className='bg-zinc-200 w-10 h-1 rounded-full'>
      </div>
      </div>
      </div>
      <Maximize2 size={20}/>


    </div>


  </footer>
</div>
  )
}

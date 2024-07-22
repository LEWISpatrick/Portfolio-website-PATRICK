import Link from "next/link";
import { Separator } from "./ui/separator"
import YouTube from 'react-youtube';

export const BeginerProjects = () => {
    const videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1
        },
        width: '480',
        height: '270',
        className: 'rounded-xl'
        
      };
    return (
        <div className="text-center">
            <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl ">Projects i've built for People</h1>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
            <div className="flex justify-center mt-10">
                        <div className="flex flex-col items-center">
                        <YouTube videoId="ZnrNrxZ64RE" opts={videoOptions}/>
                   
                        <Link href='https://ba-website-next.vercel.app/' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                            Website Link
                        </Link>                      
                    </div>
                </div>
        </div>
    )
}
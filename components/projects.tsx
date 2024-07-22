import { Card } from "@mui/material";
import { Separator } from "./ui/separator";
import YouTube from 'react-youtube';
import Link from "next/link";

export const Projects = () => {
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
        <div id='#Projects'className="text-center">
            <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">Personal Projects I've Built</h1>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
            <div className="flex justify-center">
                <div className="mt-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="flex flex-col items-center">
                        <YouTube videoId="r8INyceAUP8" opts={videoOptions} />
                        <Link href='https://github.com/LEWISpatrick/businessBrander_landing' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                            GitHub
                        </Link>
                        <YouTube videoId="kwUcNux_Vgg" opts={videoOptions} />
                        <Link href='https://bookskindle.vercel.app' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                            Website
                        </Link>
                        <Link href='https://github.com/LEWISpatrick/books-kindle' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                            Github
                        </Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <YouTube videoId="UiDTHLfPS-E" opts={videoOptions} />
                        <Link href='https://www.eatthefrog.today/' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                            Website
                        </Link>
                        <Link href='https://github.com/LEWISpatrick/eatthefrog/' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                            Github
                        </Link>
                        <YouTube videoId="4iU82HDUoOI" opts={videoOptions} />
                        <Link href='https://github.com/LEWISpatrick/Object-detection' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500 hover:underline">
                            Github
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

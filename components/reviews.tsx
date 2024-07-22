import Link from "next/link";
import { Separator } from "./ui/separator";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const Reviews = () => {
    const reviews = [
        {
            logo: '/ba.jpeg',
            name: 'Brick-Abode',
            subs: '3.5',
            link: 'https://ba-website-next.vercel.app/'
        },
      
    ];

    // Avatar Styles
    const style = {
        width: {
            xs: 50, // width on extra-small devices
            sm: 100, // width on small devices
            md: 150, // default width
        },
        height: {
            xs: 50, // height on extra-small devices
            sm: 100, // height on small devices
            md: 150, // default height
        },
        // You can add more responsive keys (lg, xl) as needed
    };

    return (
        <div className="text-center">
            <h1 className="pb-4 font-bold tracking-tight text-5xl lg:text-6xl">People I've Worked With</h1>
            <div className="flex items-center justify-center">
                <Separator className="mt-3 bg-slate-100/20 h-0.5 w-40" />
            </div>
            <div className="flex items-center justify-center mx-auto sm:space-x-2 md:space-x-4 lg:space-x-8">
                {reviews.map((reviews, index) => (
                    <div key={index} className="mt-10 flex">
                        <div className="flex flex-col items-center">
                            <Link href={`${reviews.link}`}>
                                <Avatar src={reviews.logo} alt={reviews.name} sx={style} />
                            </Link>
                            <h1 className="font-semibold text-xl mt-4">{reviews.name}</h1>
                            <p className="text-lg mt-2 flex items-center">
                            {reviews.subs} <span className="ml-1 text-sm"><StarIcon /> / 5</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

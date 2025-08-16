// src/components/SocialButtons.tsx
import Link from 'next/link';
import Image from 'next/image';

const SocialButtons = () => {
    return (
        <section className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 z-20">
            <style>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Nata+Sans:wght@100..900&display=swap');
        `}
            </style>
            <Link href="https://line.me/R/ti/p/@014rfhez" passHref target="_blank">
                <div className="flex items-center justify-center px-4 py-2 rounded-full text-white font-bold text-md drop-shadow-lg transition-all transform hover:scale-105 bg-[#06C755] hover:bg-[#05b14c] cursor-pointer w-full sm:w-48" style={{ fontFamily: 'Nata Sans, sans-serif' }}>
                    <Image
                        src="/line-logo.png"
                        alt="LINE logo"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    LINE
                </div>
            </Link>
            <Link href="https://m.me/308931555632084" passHref target="_blank">
                <div className="flex items-center justify-center px-4 py-2 rounded-full text-white font-bold text-md drop-shadow-lg transition-all transform hover:scale-105 bg-[#0084FF] hover:bg-[#0073e6] cursor-pointer w-full sm:w-48" style={{ fontFamily: 'Nata Sans, sans-serif' }}>
                    <Image
                        src="/facebook-logo.png"
                        alt="Facebook Messenger logo"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    Messenger
                </div>
            </Link>
        </section>
    );
};

export default SocialButtons;

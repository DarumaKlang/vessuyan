import Image from "next/image";
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AstrologyPage() {
    return (
        <main className="relative min-h-screen">
            {/* Header and Navigation */}
            <Navbar />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center text-white p-8">
                {/* Cards Component */}
                <div className="flex flex-col items-center justify-center space-y-4">
                    <h2 className="text-3xl font-bold mb-8">ตัวอย่าง API</h2>

                    {/* API Card 1 */}
                    <Link href="/apipages/phases-moon">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer w-72">
                            <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                                ข้างขึ้น - ข้างแรม
                            </h3>
                            <p className="text-gray-400">Card Component คำนวณ ข้างขึ้น-ข้างแรม</p>
                        </div>
                    </Link>

                    {/* API Card 2 */}
                    <Link href="/apipages/yamathagran">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center transition-transform duration-200 ease-in-out transform hover:scale-105 cursor-pointer w-72">
                            <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                                ยามอัฐกาล
                            </h3>
                            <p className="text-gray-400">Card Component นาฬิกาบอกยาม</p>
                        </div>
                    </Link>
                    
                </div>

                {/* Footer */}
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-auto">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/file.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        Learn
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/window.svg"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Examples
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Go to nextjs.org →
                    </a>
                </footer>
            </div>
        </main>
    );
}

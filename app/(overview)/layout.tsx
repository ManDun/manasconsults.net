import Navbar from "../ui/portfolio/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden main-bg">
            {/* <div className="w-full flex-none md:w-64">
                <Navbar />
            </div> */}
            <div className="flex items-center justify-center">{children}</div>
        </div>
    );
}
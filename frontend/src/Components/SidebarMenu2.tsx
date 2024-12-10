import adminIcon from "../assets/admin.svg"
import MonthlyBreakdownIcon from "../assets/MonthlyBreakdown.svg";

export function SidebarMenu2() {
    return (
        <div
            className="absolute flex flex-col items-start p-6 gap-6 w-[257px] h-[730px] left-[24px] top-[24px]
          bg-gradient-to-b from-[#3E3D45] to-[#202020] rounded-lg transform rotate-[-0.07deg]"
        >
            {/* Header */}
            <div className="w-full text-white text-[16px] leading-[24px] font-semibold">
                Iyabor Progressive Union
            </div>
            <hr className="w-full border-[#FFFFFF33]" />

            {/* Admin Profile */}
            <div className="flex items-center gap-2 w-full">
                <img
                    src={adminIcon}
                    alt="Admin"
                    className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <div className="text-white text-[14px] leading-[20px] font-medium">
                    ADMIN
                </div>
                <button className="ml-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 15l3.75-3.75 3.75 3.75"
                        />
                    </svg>
                </button>
            </div>
            <hr className="w-full border-[#FFFFFF33]" />

            {/* Menu Items */}
            <button className="w-full flex items-center gap-2 px-4 py-2 bg-[#FF007A] rounded-md text-white text-[14px] font-semibold">
                <span className="text-lg">V</span>
                View member records
            </button>
            <div className="w-full flex flex-col gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#52525B] rounded-md text-white text-[14px] font-medium">
                    <span className="text-lg">D</span>
                    Dashboards
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-white text-[14px] font-medium">
                    <span className="text-lg">T</span>
                    Transaction details
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-white text-[14px] font-medium">
                    <span className="text-lg">B</span>
                    Final balance
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-white text-[14px] font-medium">
                    <span className="text-lg">S</span>
                    Pay Summary
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-white text-[14px] font-medium">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 12h16.5M12 3.75l8.25 8.25-8.25 8.25"
                            />
                        </svg>
                    </span>
                    Monthly breakdown
                </button>
            </div>
            <hr className="w-full border-[#FFFFFF33]" />

            {/* Footer */}
            <div className="flex flex-col gap-2 w-full">
                <button className="flex items-center gap-2 px-4 py-2 text-white text-[14px] font-medium">
                    <span className="text-lg">📄</span>
                    Basic
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-white text-[14px] font-medium">
                    <span className="text-lg">⚙️</span>
                    Components
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-white text-[14px] font-medium">
                    <span className="text-lg">📚</span>
                    Changelog
                </button>
            </div>
        </div>
    );
}

export default SidebarMenu2;

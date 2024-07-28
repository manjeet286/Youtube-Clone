import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
const LeftNav = () => {
    const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);
    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectedCategory(name);
            case "home":
                return setSelectedCategory(name);
            case "menu":
                return false;
            default:
                break;
        }
    };

    return (
        <div
            className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 transition-transform md:translate-x-0 ${
                mobileMenu ? "translate-x-0" : "-translate-x-[240px]"
            }`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => (
                    <React.Fragment key={item.id || item.name}> {/* Ensure item.id or a unique identifier */}
                        <LeftNavMenuItem
                            text={item.type === "home" ? "Home" : item.name}
                            icon={item.icon}
                            action={() => {
                                clickHandler(item.name, item.type);
                                navigate("/");
                            }}
                            className={`${
                                selectedCategory === item.name
                                    ? "bg-white/[0.15]"
                                    : ""
                            }`}
                        />
                        {item.divider && <hr className="my-5 border-white/[0.2]" />}
                    </React.Fragment>
                ))}
                <hr className="my-5 border-white/[0.2]" />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: JS Manjeet
                </div>
            </div>
        </div>
    );
};
export default LeftNav

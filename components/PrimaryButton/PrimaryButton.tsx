import React from "react";

export interface PrimaryButtonProps {
    children: React.ReactNode;
}
const PrimaryButton = ({children}: PrimaryButtonProps) => {
    return (
        <button type="button" className="border font-medium rounded-lg text-sm px-5 py-2.5 text-center">{children}</button>
    )
}

export default PrimaryButton;
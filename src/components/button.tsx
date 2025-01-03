import React, {type ComponentPropsWithRef} from "react";
import clsx from "clsx";

type Props = ComponentPropsWithRef<"button"> & {
    variant?: "primary" | "danger"
}

const Button = React.memo(function ({className, children, variant = "primary", ...props}: Props) {
    return (
        <button
            {...props}
            type="button"
            className={clsx("py:0.2rem w:full r:0.5rem transition-duration:350ms", className, {
                "button-blue": variant === "primary",
                "button-red": variant === "danger",
            })}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button";
export {Button};
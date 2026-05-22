import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style of the button.
   * "primary" – solid maroon background.
   * "secondary" – outlined gold border.
   */
  variant?: "primary" | "secondary";
  /** Additional class names to merge with defaults */
  className?: string;
  /** Children content, usually button label */
  children: React.ReactNode;
}

/**
 * Reusable button component that ensures consistent spacing, typography, and hover effects
 * across the QUASAR Designer Studio site. Uses Tailwind v4 utilities defined in `globals.css`.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  const baseClasses =
    "font-body text-xs tracking-[0.2em] uppercase px-10 py-5 rounded-2xl transition-all duration-500 ease-out font-bold inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg select-none active:scale-[0.98]";

  const variantClasses =
    variant === "primary"
      ? "bg-maroon text-ivory hover:bg-maroon-light shadow-maroon/10 hover:shadow-xl hover:shadow-maroon-light/25"
      : "border border-gold text-maroon bg-white/20 backdrop-blur-sm hover:bg-gold/5 hover:border-gold-light hover:text-maroon-light shadow-gold/5 hover:shadow-xl hover:shadow-gold-light/15";

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

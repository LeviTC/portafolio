import { cva, cx, type RecipeVariantProps } from "../../../../styled-system/css";

const buttonStyles = cva({
  base: {
    cursor: "pointer",
    fontWeight: "500",
    borderRadius: "0px",
    transition: "all 0.2s ease",
    border: "1px solid transparent", 
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.05em",
    _hover: {
      opacity: 0.8,
    },
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: "#EB4A4A",
        color: "white",
        _hover: {
          backgroundColor: "black",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "white",
          opacity: 1,
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: "white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#555555",
        _hover: {
          borderColor: "white",
          opacity: 1,
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "gray",
        _hover: {
          color: "white",
          opacity: 1,
        },
      },
    },
    size: {
      sm: { fontSize: "12px", padding: "6px 14px" },
      md: { fontSize: "14px", padding: "10px 20px" },
      lg: { fontSize: "16px", padding: "14px 28px" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps = RecipeVariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
  className?: string;
}

export default function Button({ 
  children, 
  onClick, 
  disabled, 
  variant, 
  size, 
  href,
  className,
}: ButtonProps) {

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cx( buttonStyles({ variant, size }), className)}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} disabled={disabled} className={cx( buttonStyles({ variant, size }), className)}>
      {children}
    </button>
  )
}
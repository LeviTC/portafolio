import { IconProps } from "@/types/icons";

// components/ui/icons/PlayStoreIcon.tsx
export default function PlayStoreIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.571 0C1.047 0 .571.304.571.857v22.286c0 .553.476.857 1 .857.2 0 .41-.057.6-.18l11.4-11.4-11.4-11.4A1.02 1.02 0 0 0 1.571 0zm13.715 7.429L3.857 1.143l10.286 9.143 1.143-1.143zM3.857 22.857l11.429-6.286-1.143-1.143-10.286 9.143zm12.857-7.714l2.857-1.571c.8-.457.8-1.886 0-2.343L16.714 9.66l-1.428 1.428 3.142 1.769-3.142 1.771 1.428 1.515z"/>
    </svg>
  )
}
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export function LiquidMetalButton({
  label = "Falar no WhatsApp",
  onClick,
  icon,
}: LiquidMetalButtonProps) {
  return (
    <>
      <style>{`
        @keyframes liquidMetalFlow {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes liquidMetalShine {
          0% {
            left: -50%;
            opacity: 0;
          }

          15% {
            opacity: 0.45;
          }

          50% {
            opacity: 0.22;
          }

          85% {
            opacity: 0.45;
          }

          100% {
            left: 130%;
            opacity: 0;
          }
        }
      `}</style>

      <button
        type="button"
        onClick={onClick}
        className="
          group
          relative
          inline-flex
          h-12
          items-center
          justify-center
          overflow-hidden
          rounded-full
          p-[2px]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_14px_32px_rgba(86,61,50,0.28)]
          active:translate-y-0
          active:scale-[0.98]
        "
        style={{
          background:
            "linear-gradient(110deg, #6e5549 0%, #a78373 15%, #e1c8ba 30%, #fff0e5 42%, #b48d7d 58%, #e2c4b4 72%, #8e7164 88%, #6e5549 100%)",
          backgroundSize: "250% 100%",
          animation: "liquidMetalFlow 4.5s ease-in-out infinite",
        }}
      >
        {/* reflexo passando pelo botão */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -top-6
            h-24
            w-12
            rotate-[22deg]
            bg-white/30
            blur-lg
          "
          style={{
            animation: "liquidMetalShine 4.5s ease-in-out infinite",
          }}
        />

        {/* parte interna */}
        <span
          className="
            relative
            z-10
            flex
            h-full
            items-center
            justify-center
            gap-2.5
            rounded-full
            bg-gradient-to-b
            from-[#806457]
            to-[#654b40]
            px-7
            text-sm
            font-medium
            text-[#fffaf6]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]
            transition
            duration-300
            group-hover:from-[#88695b]
            group-hover:to-[#694d42]
          "
        >
          {icon ?? (
  <MessageCircle
    size={17}
    strokeWidth={1.8}
  />
)}

{label}
        </span>
      </button>
    </>
  );
}
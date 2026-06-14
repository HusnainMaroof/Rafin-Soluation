// components/LogoSlider.tsx
import * as Icons from "lucide-react";
import { FadeIn } from "./HelperComponent";
import { CLIENT_LOGOS } from "../Static Data/HomeData";


type IconName = keyof typeof Icons;

const getIcon = (name: string) => {
  const Icon = Icons[name as IconName] as React.ElementType | undefined;
  return Icon ? <Icon className="w-8 h-8" /> : null;
};

// Deduplicated source — duplication happens only at render time
const DUPLICATED_LOGOS = CLIENT_LOGOS.map((logo, i) => ({
  ...logo,
  uid: `a-${i}`, // stable, collision-free keys
})).concat(
  CLIENT_LOGOS.map((logo, i) => ({
    ...logo,
    uid: `b-${i}`,
  }))
);

export const LogoSlider = () => {
  return (
    <FadeIn
      delay={0.6}
      direction="none"
      className="w-full relative z-20 mt-auto mb-12"
    >
      <div className="w-full relative overflow-hidden bg-transparent py-6">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex">
          {DUPLICATED_LOGOS.map((logo) => (
            <div
              key={logo.uid}
              className="flex items-center gap-3 px-10 text-slate-400 hover:text-slate-900 transition-colors cursor-default shrink-0"
            >
              {getIcon(logo.icon)}
              <span className="font-tech font-bold text-xl tracking-widest">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};
import IconFooter from "../assets/icon-footer";
import LogoWoovi from "../assets/logo-woovi";
import { PropType } from "../types/childrenPropType";

export function ContainerApp({ children }: PropType) {
  return (
    <section className="max-w-3xl m-auto font-nunito">
      <header className="flex align-center justify-center flex-col items-center">
        <div className="m-10">
          <LogoWoovi />
        </div>
      </header>
      {children}
      <footer className="flex justify-center mb-3">
        <IconFooter />
      </footer>
    </section>
  );
}

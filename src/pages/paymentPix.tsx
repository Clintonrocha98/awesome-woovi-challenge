import IconArrow from "../assets/icon-arrow";
import IconCopy from "../assets/icon-copy";
import QrCode from "../assets/qr-code";
import TitlePage from "../components/title-page";
import { formattedValue } from "../helper/formattedValue";
import usePaymentContext from "../hook/usePaymentContext";

export default function PaymentPix() {
  const { payment } = usePaymentContext();

  const installments = payment?.installments ?? 0;
  const isNotTheLast = (index: number) =>
    index + 1 !== installments &&
    "before:content-normal before:h-9 before:border-l-2 before:left-1 before:border-gray-300 before:top-3 before:z-[-1] before:absolute";
  const currentPayment = (index: number) => index === 0 && "border-woovi";
  return (
    <div>
      <TitlePage>
        João, pague a entrada de {formattedValue(payment?.valueInstallment)}{" "}
        pelo Pix
      </TitlePage>
      <div className="flex items-center flex-col gap-5 mb-5 max-w-[350px] px-2 m-auto">
        <div className="flex items-center rounded-xl p-2 border-2 border-woovi w-full max-h-[325px]">
          <QrCode />
        </div>
        <button className="flex items-center justify-center rounded-lg gap-2 bg-woovi hover:bg-emerald-400 hover:scale-95 transition duration-300 ease-in-out transform text-white font-semibold w-72 h-10">
          Clique para copiar QR CODE <IconCopy />{" "}
        </button>

        <div className="flex flex-col ">
          <span className="text-xs text-gray-400">Prazo de pagamento:</span>
          <span className="text-xs font-extrabold">15/12/2024 - 12:00</span>
        </div>

        <div className="w-full flex flex-col gap-6">
          {Array.from({ length: installments }).map((_, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <div
                className={`relative w-4 h-4 border-2 rounded-lg ${currentPayment(
                  index
                )} ${isNotTheLast(index)}`}
              ></div>

              <div className="flex gap-3 justify-between w-full">
                {index + 1 === 1 ? (
                  <p>{index + 1}ª entrada no Pix</p>
                ) : (
                  <p>{index + 1}ª no cartão</p>
                )}

                <p className="text-lg font-bold">
                  {formattedValue(payment?.valueInstallment)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-b-2 border-gray-200 w-full items-center"></div>

        <div className="flex justify-between w-full items-center">
          <p className="font-semibold text-sm">CET:0,5%</p>
          <p className="font-semibold text-lg">
            Total: {formattedValue(payment?.total)}
          </p>
        </div>
        <div className="border-b-2 border-gray-200 w-full "></div>

        <div className="flex justify-between w-full  items-center">
          <p className="font-extrabold">Como funciona?</p>
          <span className="cursor-pointer">
            <IconArrow />
          </span>
        </div>
        <div className="border-b-2 border-gray-200 w-full "></div>
        <div className="flex flex-col items-center">
          <span className="text-sm">Identificador:</span>
          <p className="text-sm font-extrabold">2c1b951f356c4680b13ba1c9fc889c47</p>
        </div>
      </div>
    </div>
  );
}

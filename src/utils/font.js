import { Inter, Montserrat, Noto_Serif } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const noto_serif = Noto_Serif({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

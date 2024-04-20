
import { Bai_Jamjuree } from "next/font/google";

const bai_jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bai-jamjuree",
  weight: ['400', '600'],
});


export default function Layout({ children }) {
  return (
    <section className={`${bai_jamjuree.variable}`}>
      <div>{children}</div>
    </section>
  );
}

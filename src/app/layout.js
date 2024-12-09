import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ekipaj",
  description:
    "Ekipaj - Professional Locksmith Services | 24/7 Availability. Ishonchlilik va tajriba har qanday obro`li qulfochi xizmatining asosidir. Professional qulfochilar turli xil qulf turlarini hal qilish uchun zarur bo`lgan bilim va ko`nikmalarga ega. An`anaviy mexanik qulflardan tortib, zamonaviy aqlli qulflargacha, ularning tajribasi har bir muammoni aniqlik va e`tibor bilan hal qilishni kafolatlaydi. 24/7 davomida mavjudlik katta afzallikdir. Qulf bilan bog`liq favqulodda vaziyatlar odatdagi ish vaqtiga bo`ysunmaydi; ular kun yoki tunning istalgan vaqtida yuz berishi mumkin. Kecha-kunduz ishlaydigan qulfochi xizmati har qanday vaqtda yordam berishga tayyor bo`lib, mijozga xotirjamlikni ta`minlaydi.",
  keywords:
    "qulf ochish, qulf xizmati, Ekipaj, qulf uchun, qulf buzish, qulflar, qulf, qulfochilar, qulf kerak, 24/7 ish, tezkor xizmar, qulf nusxalab berish, qulf nusxalari, aqlli quluflar, qulf tugirlash, Qulf bilan bog`liq, favqulodda vaziyatlar, odatdagi ish, vaqtiga bo`ysunmaydi, ular kun yoki tunning, istalgan, vaqtida, yuz berishi mumkin, kecha-kunduz, ishlaydigan, qulfochi xizmati, har qanday vaqtda yordam berishga tayyor bo`lib, mijozga xotirjamlikni ta`minlaydi.",
  author: "Ekipaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="../../public/favicon.jpg" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Qulf",
      "name": "Ekipaj Qulf xizmatlari",
      "description": "Ekipaj - Professional Locksmith Services | 24/7 Availability. Ishonchlilik va tajriba har qanday obro'li qulfochi xizmatining asosidir. Professional qulfochilar turli xil qulf turlarini hal qilish uchun zarur bo'lgan bilim va ko'nikmalarga ega. An'anaviy mexanik qulflardan tortib, zamonaviy aqlli qulflargacha, ularning tajribasi har bir muammoni aniqlik va e'tibor bilan hal qilishni kafolatlaydi. 24/7 davomida mavjudlik katta afzallikdir. Qulf bilan bog'liq favqulodda vaziyatlar odatdagi ish vaqtiga bo'ysunmaydi; ular kun yoki tunning istalgan vaqtida yuz berishi mumkin. Kecha-kunduz ishlaydigan qulfochi xizmati har qanday vaqtda yordam berishga tayyor bo'lib, mijozga xotirjamlikni ta'minlaydi.",
      "image": "/path/to/your/image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Olmazor tumani",
        "addressLocality": "Toshkent shahar",
        "postalCode": "100000",
        "addressCountry": "UZ"
      },
      "telephone": "++998900915567",
      "openingHours": "Dus-Yak 00:00-23:59",
      "url": "https://ekipaj.com"
    }
  `}
        </script>
      </body>
    </html>
  );
}

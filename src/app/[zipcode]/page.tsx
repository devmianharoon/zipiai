"use client";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Crusal from "../../../components/home/Crusal";
import Header from "../../../components/home/Header";
import TestSpeed from "../../../components/home/TestSpeed";
import HeroDynamic from "../../../components/ZipCode/heroDynamic";
import {  useSelector } from "react-redux";
// import { setSelectedQuestion } from "../../../store/slices/questionSlice";
// import { sendChatMessage } from "../../../store/slices/chatSlice";
import { RootState } from "../../../store/store";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
import SingleProvider from "../../../components/tileComp/tile";
import InternetComparison from "../../../components/ZipCode/table";
import { Provider } from "../../../data/types/responsetype";
import InternetComparisonSimple from "../../../components/ZipCode/InternetComparison";

export default function Page() {
  // const { zipcode } = params;
  // console.log("Zip code from URL:", zipcode);

  //   const dispatch = useDispatch<AppDispatch>();
  const selectedQuestion = useSelector(
    (state: RootState) => state.question.selectedQuestion
  );
  console.log("Selected Question from Redux:", selectedQuestion);
  const { data, loading, error } = useSelector(
    (state: RootState) => state.chat
  );
  console.log("Messages from data:", data);
  console.log("Loading from Redux:", loading);
  console.log("Error from Redux:", error);
  // console.log("Providers from Redux:", providers);

  //   const data = useSelector((state: RootState) => state.chat.providers);
  //   const [questionSent, setQuestionSent] = useState(false);

  //   // Handle selectedQuestion
  //   useEffect(() => {
  //     if (
  //       selectedQuestion &&
  //       typeof selectedQuestion === "string" &&
  //       !questionSent
  //     ) {
  //       dispatch(sendChatMessage({ content: selectedQuestion }));
  //       setQuestionSent(true);
  //       dispatch(setSelectedQuestion(null));
  //     }
  //   }, [selectedQuestion, dispatch]);

  //   // Reset questionSent when selectedQuestion changes
  //   useEffect(() => {
  //     setQuestionSent(false);
  //   }, [selectedQuestion]);

  //   console.log("Messages from Redux:", data);
  //   console.log("Parsed Data from Redux:", parsedData);

  //   const shouldRenderProviders = Array.isArray(data) && data.length > 0;
//   const test = [
//     {
//       "ProviderName": "Verizon Fios",
//       "logo": "verizon_fios.png",
//       "contact": "888 564 5552",
//       "Plans_Starting_At": "$49.99/month",
//       "Speeds_Up_To": "2.3 Gbps",
//       "Connection_Type": "Fiber",
//       "available": "85.3% coverage in NYC",
//       "feactures": "Symmetrical upload and download speeds; no equipment fees; no contract required; free Netflix and Max for 12 months or an Xbox gaming bundle with select plans."
//     },
//     {
//       "ProviderName": "Spectrum",
//       "logo": "spectrum.png",
//       "contact": "888 564 5552",
//       "Plans_Starting_At": "$49.99/month",
//       "Speeds_Up_To": "1 Gbps",
//       "Connection_Type": "Cable",
//       "available": "82.7% coverage in NYC",
//       "feactures": "No-contract plans; free modem; antivirus software; TV and mobile bundles; unlimited mobile line included; Advanced WiFi with certain bundles; Disney+ & ESPN+ with Spectrum TV."
//     },
//     {
//       "ProviderName": "HughesNet",
//       "logo": "hughesnet.png",
//       "contact": "888 564 5552",
//       "Plans_Starting_At": "$49.99/month",
//       "Speeds_Up_To": "100 Mbps",
//       "Connection_Type": "Satellite",
//       "available": "100% coverage in NYC",
//       "feactures": "Fusion plans combining satellite and wireless technology for low-latency gaming and streaming; free Wi-Fi 6 modem included; 24-month contract required."
//     },
//     {
//       "ProviderName": "Viasat",
//       "logo": "viasat.png",
//       "contact": "888 564 5552",
//       "Plans_Starting_At": "$49.99/month",
//       "Speeds_Up_To": "150 Mbps",
//       "Connection_Type": "Satellite",
//       "available": "100% coverage in NYC",
//       "feactures": "Built for rural areas without access to DSL, cable, or fiber lines; multiple plans with multiple speeds to meet any lifestyle and budget; free standard installation on all new orders."
//     }
//   ]
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!-- Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Home Design --> */}
      <HeroDynamic />

      {loading && (
        <div className="flex justify-center items-center py-10">
          <p className="text-lg font-medium">Loading providers...</p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center py-10 text-red-600">
          <p className="text-lg font-medium">Error loading data: {error}</p>
        </div>
      )}

      {/* {!loading && !error && Array.isArray(data) && data.length > 0 && ( */}

        {/* <div className="provider-list container mx-auto py-6"> */}
        {data?.providers.map(
          (provider: Provider, index: number) => (
            <div className="p-2" key={index}>
              <SingleProvider data={provider} />
            </div>
          )
        )}
         
        {/* </div> */}
      {/* )} */}
      {data && <InternetComparison data={data} />}
      {data &&  <InternetComparisonSimple />}

      

      {/* <SingleProvider data={data} /> */}

      {/* <div className="w-full flex justify-center items-center bg-primary">
     <div id="messages" className="chatbot-messages  text-black container">
        {messages
          .filter((msg) => msg.sender === "bot") // Only include bot messages
          .map((msg, index) => (
            <div key={index} className="chatbot-message bot">
              <div className="chatbot-messageg">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
      </div>

     </div> */}
      {/* <!-- Providers List --> */}
      {/* {parsedData && parsedData.providers.length > 0 && (
        <section className="providers-section container my-8">
          <h2 className="text-2xl font-bold mb-4">Available Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {parsedData.providers.map((provider, index) => (
              <div key={index} className="border p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{provider.ProviderName}</h3>
                {provider.logo && (
                  <Image
                    src={`/assets/logos/${provider.logo}`}
                    // src={'/assets/logos/xfinity.svg'}
                    alt={`${provider.ProviderName} logo`}
                    className="h-16 my-2"
                    // layout="fill"
                    width={100}
                    height={100}
                  />
                )}
                <p>Contact: {provider.contact}</p>
              </div>
            ))}
          </div>
        </section>
      )} */}

      <TestSpeed />
      <Crusal />
      <section className="footer_one flex justify-center items-center bg-bluish pt-[70px] pb-20">
        <div className="container ">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area flex justify-center items-center bg-bluish py-14">
        <div className="container ">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
}

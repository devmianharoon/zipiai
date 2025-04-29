"use client";
import { useEffect, useRef, useState } from "react";
import CopyrightFooter from "../../../components/common/footer/CopyrightFooter";
import Footer from "../../../components/common/footer/Footer";
import MobileMenu from "../../../components/common/header/MobileMenu";
import Crusal from "../../../components/home/Crusal";
import Header from "../../../components/home/Header";
import TestSpeed from "../../../components/home/TestSpeed";
import HeroDynamic from "../../../components/ZipCode/heroDynamic";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedQuestion } from "../../../store/slices/questionSlice";
import { sendChatMessage, setError } from "../../../store/slices/chatSlice";
import { RootState, AppDispatch } from "../../../store/store";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log("Zip code from URL:", slug);

  const dispatch = useDispatch<AppDispatch>();
  const selectedQuestion = useSelector((state: RootState) => state.question.selectedQuestion);
  const { messages, loading, error, parsedData } = useSelector((state: RootState) => state.chat);
  const [questionSent, setQuestionSent] = useState(false);

  // Handle selectedQuestion
  useEffect(() => {
    if (selectedQuestion && typeof selectedQuestion === "string" && !questionSent) {
      dispatch(sendChatMessage({ content: selectedQuestion }));
      setQuestionSent(true);
      dispatch(setSelectedQuestion(null));
    }
  }, [selectedQuestion, dispatch]);

  // Reset questionSent when selectedQuestion changes
  useEffect(() => {
    setQuestionSent(false);
  }, [selectedQuestion]);

  console.log("Messages from Redux:", messages);
  console.log("Parsed Data from Redux:", parsedData);

  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!-- Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Home Design --> */}
      <HeroDynamic />

      {/* <!-- Chat Interface --> */}
      {/* <section className="chatbot-container container my-8">
        <h2 className="text-2xl font-bold mb-4">Chat</h2>
        <div className="chatbot-messages max-h-96 overflow-y-auto border p-4 rounded">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chatbot-message ${
                msg.sender === "user" ? "text-right" : "text-left"
              } my-2`}
            >
              <div
                className={`inline-block p-2 rounded ${
                  msg.sender === "user" ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                {msg.sender === "bot" ? (
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <!-- Providers List --> */}
      {parsedData && parsedData.providers.length > 0 && (
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
      )}

      <TestSpeed />
      <Crusal />

      {/* <!-- Our Footer --> */}
      <section className="footer_one flex justify-center items-center">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area flex justify-center items-center">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
}
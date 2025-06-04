import Index from "../../components/home";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "HyperG Media",
  description: "Experience how HyperG simplifies the fast and reliable internet provider.",
};
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Index />
    </main>
  );
}

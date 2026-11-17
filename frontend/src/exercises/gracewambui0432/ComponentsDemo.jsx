import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostCard from "../../components/PostCard";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";

export default function ComponentsDemo() {
  return (
    <div className="app">
      <Header />
      <main>
        <h2>Welcome to CommunityHub</h2>
        <PostCard />
        <Sidebar />
        <Button />
      </main>
      <Footer />
    </div>
  );
}
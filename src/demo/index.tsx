import Hero from "@/features/home/sections/HeroSection";
import MediaContentSection from "@/features/home/sections/MediaContentSection";
import { Button } from "@mui/material";
import { LOREM } from "./constants";

const DemoPage = (): JSX.Element => {
  return (
    <>
      <Hero />
      <MediaContentSection
        image={{
          url: "https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }}
        title="Title 1"
        content={LOREM}
      />
      <MediaContentSection
        sx={{ background: "#f8f8f8" }}
        image={{
          url: "https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }}
        align="left"
        title="Title"
        content={LOREM}
        button={
          <Button variant="contained" color="primary" size="large">
            Click Me!!
          </Button>
        }
      />
    </>
  );
};
export default DemoPage;

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  PageContainer,
  Card,
  Title,
  Label,
  Select,
  SaveButton,
} from "./style";
import { UseAdmin } from "../useHooks";

const CmsManagement = () => {
  const { getCmsSectionDetail, addCmsSection } = UseAdmin();

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      selectedPage: "About Us",
      content: "",
    },
  });

  const selectedPage = watch("selectedPage");

  const pageMap = {
    "About Us": { title: "About Us", slug: "about-us" },
    "Privacy Policy": { title: "Privacy Policy", slug: "privacy-policy" },
    Terms: { title: "Our Terms and Conditions", slug: "terms-and-conditions" },
    // FAQs: { title: "FAQs", slug: "faqs" },
  };

  // Fetch content when page changes
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const slug = pageMap[selectedPage].slug;
        const data = await getCmsSectionDetail(slug);
        console.log("Fetched CMS data:", data);

        const content = data?.content || ""; 
        setValue("content", content);
      } catch (err) {
        console.error("Error fetching CMS content:", err);
        setValue("content", "");
      }
    };

    fetchContent();
  }, [selectedPage, setValue]);

  // Submit CMS content
  const onSubmit = async ({ content }) => {
    try {
      const { title, slug } = pageMap[selectedPage];
      const payload = { title, slug, content };
      console.log("Sending payload:", payload);

      await addCmsSection(payload);
    } catch (err) {
      console.error("Error saving CMS content:", err);
    }
  };

  return (
    <PageContainer>
      <Card>
        <Title>CMS Management</Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Page Selector */}
          <div>
            <Label>Select Page</Label>
            <Controller
              name="selectedPage"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <option>About Us</option>
                  <option>Privacy Policy</option>
                  <option>Terms</option>
                  {/* <option>FAQs</option> */}
                </Select>
              )}
            />
          </div>

          {/* Content Editor */}
          <div>
            <Label>Edit Content</Label>
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <ReactQuill
                  {...field}
                  theme="snow"
                  style={{ height: "300px", marginBottom: "2rem" }}
                  onChange={(content) => field.onChange(content)}
                />
              )}
            />
          </div>

          <SaveButton type="submit">Save Changes</SaveButton>
        </form>
      </Card>
    </PageContainer>
  );
};

export default CmsManagement;

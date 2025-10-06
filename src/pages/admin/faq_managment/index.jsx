import React, { useState, useEffect } from "react";
import {
  PageContainer,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  FAQList,
  FAQItem,
  Question,
  Answer,
  EmptyText,
  ActionButtons,
  IconButton,
} from "./style";
import { toast } from "react-toastify";
import { UseAdmin } from "../useHooks";

const FAQManagement = () => {
  const { addFaqSection, getFaqSection, deleteFaqSection, editFaqSection } = UseAdmin();

  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all FAQs
  const fetchFAQs = async () => {
    setLoading(true);
    const data = await getFaqSection();
    setFaqs(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  // Add / Edit FAQ
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) {
      toast.warning("Please fill in both fields");
      return;
    }

    setLoading(true);
    try {
      if (editId) {
        const res = await editFaqSection(editId, { question, answer });
        if (res) {
          setFaqs(faqs.map(f => (f.id === editId || f._id === editId ? { ...f, question, answer } : f)));
          toast.success("FAQ updated successfully");
        }
        setEditId(null);
      } else {
        const res = await addFaqSection({ question, answer });
        if (res) {
          toast.success("FAQ added successfully");
          fetchFAQs();
        }
      }
      setQuestion("");
      setAnswer("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Edit Handler
  const handleEdit = (faq) => {
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setEditId(faq.id || faq._id);
  };

  // Delete Handler
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this FAQ?")) {
      const success = await deleteFaqSection(id);
      if (success) setFaqs(faqs.filter(f => f.id !== id && f._id !== id));
    }
  };

  return (
    <PageContainer>
      <Title>FAQ Management</Title>

      {/* Add/Edit Form */}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TextArea
          rows="3"
          placeholder="Enter Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : editId ? "Update FAQ" : "Add FAQ"}
        </Button>
      </Form>

      {/* FAQ List */}
      <Title>FAQ List</Title>
      {loading ? (
        <EmptyText>Loading FAQs...</EmptyText>
      ) : (
        <FAQList>
          {faqs.length === 0 ? (
            <EmptyText>No FAQs available yet.</EmptyText>
          ) : (
            faqs.map((faq) => (
              <FAQItem key={faq.id || faq._id}>
                <div>
                  <Question>{faq.question}</Question>
                  <Answer>{faq.answer}</Answer>
                </div>
                <ActionButtons>
                  <IconButton onClick={() => handleEdit(faq)}>Edit</IconButton>
                  <IconButton
                    deletebtn="true"
                    onClick={() => handleDelete(faq.id || faq._id)}
                  >
                    Delete
                  </IconButton>
                </ActionButtons>
              </FAQItem>
            ))
          )}
        </FAQList>
      )}
    </PageContainer>
  );
};

export default FAQManagement;

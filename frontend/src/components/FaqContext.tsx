import { createContext, useState, useContext, ReactNode } from 'react';

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

const FaqContext = createContext<any>(null);

export const useFaqs = () => useContext(FaqContext);

export const FaqProvider = ({ children }: { children: ReactNode }) => {
  const [faqs, setFaqs] = useState<Faq[]>([]);

  const updateFaqs = (newFaqs: Faq[]) => {
    setFaqs(newFaqs);
  };

  return (
    <FaqContext.Provider value={{ faqs, updateFaqs }}>
      {children}
    </FaqContext.Provider>
  );
};

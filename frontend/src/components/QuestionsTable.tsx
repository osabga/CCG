// src/components/QuestionsTable.tsx
import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { BsPlusSquareFill } from 'react-icons/bs';

interface Question {
  question: string;
  answer: string;
}

interface QuestionsTableProps {
  questions: Question[];
  onAdd: () => void;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const QuestionsTable: React.FC<QuestionsTableProps> = ({ questions, onAdd, onEdit, onDelete }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-black p-5 rounded-lg shadow-xl overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-bold">Questions</h2>
        <BsPlusSquareFill className="text-3xl text-[#C977D6] cursor-pointer" onClick={onAdd} />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs text-gray-400 uppercase ">
            <tr>
              <th className="px-6 py-3">Question</th>
              <th className="px-6 py-3">Answer</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((item, index) => (
              <tr key={index} className="bg-transparent border-b border-gray-800">
                <td className="px-6 py-4">{item.question}</td>
                <td className="px-6 py-4">{item.answer}</td>
                <td className="px-6 py-4 flex justify-end items-center">
                  <AiFillEdit className="mr-4 text-[#C977D6] text-xl cursor-pointer" onClick={() => onEdit(index)} />
                  <AiFillDelete className="text-[#C977D6] text-xl cursor-pointer" onClick={() => onDelete(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionsTable;

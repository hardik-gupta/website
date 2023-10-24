import React, { useState } from 'react';

interface UploadProposalSectionProps {
  products: string[];
  onFileChange: (file: File | null, product: string, project: string) => void;
}

const UploadProposalSection: React.FC<UploadProposalSectionProps> = ({ products, onFileChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    onFileChange(file, selectedProduct, selectedProject);
  };

  return (
    <div className="mb-2">
      <div className="mb-4 font-regular">
        <label className="block font-regular mb-1">Select Product</label>
        <select
          value={selectedProduct}
          required
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
        >
          <option value="">-- Select Product --</option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      {selectedProduct && (
        <div className="mb-4 font-regular">
          <label className="block font-regular mb-1">Select Project</label>
          <select
            value={selectedProject}
            required
            onChange={(e) => setSelectedProject(e.target.value)}
            className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          >
            <option value="">-- Select Project --</option>
            {/* Render project options based on selectedProduct */}
          </select>
        </div>
      )}
      <div className="mb-4 font-regular">
        <label className="block font-regular mb-1">Upload File</label>
        <input
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500 hover:border-gray-900"
        />
      </div>
    </div>
  );
};

export default UploadProposalSection;

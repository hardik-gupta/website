import React, { useState, useEffect } from "react";
import InputField from "./inputField";
import FormHeader from "./formHeader";
import UploadProposalSection from "./proposal";

export const Form: React.FC = () => {
  const [userData, setUserData] = useState({
    name: "",
    college: "",
    degree: "",
    email: "",
    phone: "",
    discord: "",
    github: "",
    openSourceExp: "No",
  });
  const [proposalSections, setProposalSections] = useState<JSX.Element[]>([]);
  const products=['abc',"haha"];
  useEffect(() => {
    const savedDraft = localStorage.getItem("draftData");
    if (savedDraft) {
      const parsedDraft = JSON.parse(savedDraft);
      setUserData(parsedDraft);
    }
  }, []);

  const saveDraft = (event) => {
    event.preventDefault();
    const draftData = userData;
    localStorage.setItem("draftData", JSON.stringify(draftData));
    alert("Your Data is saved");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };
  
  const handleFileChange = (file: File | null, index: number) => {
    const updatedProposalSections = [...proposalSections];
    updatedProposalSections[index] = (
      <UploadProposalSection products={products} key={index} onFileChange={(file) => handleFileChange(file, index)} />
    );
    setProposalSections(updatedProposalSections);

    if (file) {
      const fileURL = URL.createObjectURL(file);
      localStorage.setItem(`selectedFileURL-${index}`, JSON.stringify(fileURL));
    } else {
      localStorage.removeItem(`selectedFileURL-${index}`);
    }
  };

  const handleAddProposalSection = () => {
    setProposalSections((prevSections) => [
      ...prevSections,
      <UploadProposalSection  products={products}  key={prevSections.length} onFileChange={(file) => handleFileChange(file, prevSections.length)} />,
    ]);
  };
  const handleDeleteProposalSection = (index: number) => {
    const updatedProposalSections = [...proposalSections];
    updatedProposalSections.splice(index, 1);
    setProposalSections(updatedProposalSections);
    localStorage.removeItem(`selectedFileURL-${index}`);
    localStorage.removeItem(`proposalData-${index}`);
  };
  return (
    <>
      <FormHeader />
      <div className="container w-full lg:w-2/3 z-30 mx-auto mt-6 lg:-mt-6 mb-16">
        <div className="w-full lg:w-2/3 z-30 mx-auto bg-white p-6 lg:p-10 border rounded-lg relative bg-whiteshadow-lg drop-shadow-lg">
          <div className="flex md:justify-between md:items-center flex-col md:flex-row mb-3">
            <h1 className="text-xl text-slate-600 font-medium ">
              User Profile
            </h1>
          </div>

          <hr className="mb-10 h-px w-full bg-black"></hr>

          <InputField
            id="name"
            label="Name*"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
          />
          <InputField
            id="college"
            label="College/Organisation name*"
            type="text"
            value={userData.college}
            onChange={(e) =>
              setUserData({
                ...userData,
                college: e.target.value,
              })
            }
          />
          <InputField
            id="degree"
            label="Degree*"
            type="text"
            value={userData.degree}
            onChange={(e) =>
              setUserData({
                ...userData,
                degree: e.target.value,
              })
            }
          />
          <InputField
            id="email"
            label="Email*"
            type="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
          />
          <InputField
            id="phone-number"
            label="Phone number*"
            type="tel"
            value={userData.phone}
            onChange={(e) =>
              setUserData({
                ...userData,
                phone: e.target.value,
              })
            }
          />
          <InputField
            id="discord-id"
            label="Discord ID (Optional)"
            type="text"
            value={userData.discord}
            onChange={(e) =>
              setUserData({
                ...userData,
                discord: e.target.value,
              })
            }
          />
          <InputField
            id="github-id"
            label="GitHub ID (Optional)"
            type="text"
            value={userData.github}
            onChange={(e) =>
              setUserData({
                ...userData,
                github: e.target.value,
              })
            }
          />

          <div className="mb-4">
            <label className="block text-black font-regular mb-1">
              Experience in open-source
            </label>
            <select
              value={userData.openSourceExp}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  openSourceExp: e.target.value,
                })
              }
              className="block font-regular w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="Yes" className="font-regular">
                Yes
              </option>
              <option value="No" className="font-regular">
                No
              </option>
            </select>
          </div>
          {proposalSections.map((proposalSection, index) => (
            <div key={index} className=" mb-2 border rounded p-4">
              {proposalSection}
              <div className="flex justify-end mt-4">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded mt-4"
                  onClick={() => handleDeleteProposalSection(index)}
                >
                  Delete Proposal
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
              onClick={handleAddProposalSection}
            >
              Upload Proposal
            </button>
          </div>
          <div className="flex mt-6 justify-center items-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded "
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              className="ml-5 bg-rose-800 hover:bg-blue-600 text-white py-2 px-3 md:py-2 md:px-4 rounded"
              onClick={saveDraft}
            >
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

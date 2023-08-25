"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { verifyToken } from "@/component/api";
import useTimer from "@/component/hooks/useTimer";
import swal from "sweetalert";

const Innaguration = () => {
  const [name, setName] = useState();
  const params = useParams();
  const decodedToken = jwt_decode(params?.slug);
  useEffect(() => {
    // @ts-ignore
    setName(() => decodedToken?.id);
  }, []);
  const { days, hours, minutes, seconds } = useTimer("2023-06-30T10:30:00");

  const router = useRouter();
  const handleClick = async () => {
    const token = await verifyToken(params?.slug);
    navigator.clipboard.writeText(JSON.stringify(token?.data?.cred));
    swal({
      icon: "success",
      text: "Your credentials have been copied to clipboard",
    });
    router.push(`/inaguration/${params?.slug}/processing`);
  };
  return (
    name && (
      <div className="container flex justify-center items-center flex-col min-h-screen">
        <img src="/C4GT.png" width={400} />
        <h1 className="text-center text-[30px] mt-4 font-bold text-[#294294]">
          Welcome {name}
        </h1>
        <h2 className="text-center mt-2 text-[25px] text-[#294294]">
          {/* Rahul Kulkarni claims Code for GovTech 2023 to be launched. */}
        </h2>
        <div className="timer text-center mt-3 text-[35px] text-[#294294] font-bold">
          {hours > 0 ? hours : "00"} hr : {minutes > 0 ? minutes : "00"} min :{" "}
          {seconds > 0 ? seconds : "00"} sec
        </div>
        <button
          className="mt-4 px-5 py-2 bg-[#f46827] text-white font-bold rounded disabled:opacity-50"
          onClick={handleClick}
          disabled={hours == 0 && minutes == 0 && seconds == 0 ? false : true}
        >
          Click here to Launch C4GT
        </button>
      </div>
    )
  );
};

export default Innaguration;

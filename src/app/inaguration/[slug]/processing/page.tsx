"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProgress } from "@/component/api";
import { useRouter } from "next/navigation";

const Processing = () => {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState();
  useEffect(() => {
    const getProg = async () => {
      const res = await getProgress(params?.slug);
      console.log("---", res);
      // @ts-ignore
      setData(() => res?.data?.done);
      // @ts-ignore
      if (res?.data?.done?.length == 3) {
        setTimeout(() => {
          router.push(`/c4gt23/${params?.slug}`);
        }, 5000);
      }
    };
    getProg();
  }, []);
  return (
    <div className="container min-h-screen flex items-center flex-col justify-center">
      <div className="flex justify-end">
        <img src="/C4GT.png" width={120} className="mt-3" />
      </div>
      <h1 className="text-[30px] mt-4 font-bold text-[#294294]">
        Code for GovTech (C4GT)
      </h1>      
      <h2 className="mt-3 text-[20px] text-[#636467] text-center">
        The closure of the C4GT mentoring program 2023 is just a few credentials
        away!
      </h2>

      <div className="mt-4">
        {/* @ts-ignore */}
        {data && // @ts-ignore
          data?.length > 0 && // @ts-ignore
          data?.map((cred) => (
            <div className="text-[#33b15b] text-[20px] font-bold text-center">
              {cred?.name}
            </div>
          ))}
      </div>
      {/* @ts-ignore */}
      {data?.length == 0 && <img src="/Loader1.svg" />}
      {/* @ts-ignore */}
      {data?.length == 1 && <img src="/Loader2.svg" />}
      {/* @ts-ignore */}
      {data?.length == 2 && <img src="/Loader3.svg" />}
      {/* @ts-ignore */}
      {data?.length == 3 && <img src="/Loader4.svg" />}
    </div>
  );
};

export default Processing;

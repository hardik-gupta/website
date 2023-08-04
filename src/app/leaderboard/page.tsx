"use client";
import { getLeaderboard } from "@/component/api";
import Tooltip from "@/component/components/tooltip";
import { useEffect, useState } from "react";

const LeaderBoard = () => {
  const [leaderboardData, setleaderboardData] = useState([]);
  useEffect(() => {
    const getLeaderboardData = async () => {
      const response = await getLeaderboard();
      setleaderboardData(response?.data);
    };
    getLeaderboardData();
  }, []);
  return (
    <>
      <div className="my-5 relative overflow-x-auto">
        <table className="lg:w-[60vw] xs:w-[90vw] text-sm text-left mx-auto">
          <thead className="text-xs text-white uppercase bg-primary-color font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                GitHub Usernames
              </th>
              {/* <Tooltip message={""}> */}
              <th scope="col" className="px-6 py-3">
                DPG Points
              </th>
              {/* </Tooltip> */}

              <th scope="col" className="px-6 py-3 text-center">
                Level
              </th>
              {/* <Tooltip message={""}> */}
              <th scope="col" className="px-6 py-3">
                Activity Badges
              </th>
              {/* </Tooltip> */}
              {/* <Tooltip message={""}> */}
              <th scope="col" className="px-6 py-3">
                Contribution Badges
              </th>
              {/* </Tooltip> */}
            </tr>
          </thead>
          <tbody>
            {leaderboardData &&
              leaderboardData?.length > 0 &&
              leaderboardData?.map((data, index) => (
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 text-black">{index + 1}</td>
                  <td className="px-6 py-4 text-[#395f9c] underline">
                    <a href={data?.github_url}>
                      {data?.github_url?.slice("19")}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-black">{data?.points}</td>
                  <td className="px-6 py-4 text-black text-center min-w-[150px]">
                    {data?.points >= 100 && (
                      <div className="rounded-full bg-gray-200 py-2">
                        Level 3
                      </div>
                    )}
                    {data?.points < 100 && data?.points >= 50 && (
                      <div className="rounded-full bg-green-200 py-2">
                        Level 2
                      </div>
                    )}
                    {data?.points < 50 && data?.points >= 10 && (
                      <div className="rounded-full bg-yellow-200 py-2">
                        Level 1
                      </div>
                    )}
                  </td>
                  <td className="flex my-3 px-2 min-w-[250px]">
                    {data?.apprentice_badge && (
                      <Tooltip message={"Apprentice Badge"}>
                        <img
                          src="/assets/badges/Apprentice.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                    {data?.converser_badge && (
                      <Tooltip message={"Conversor Badge"}>
                        <img
                          src="/assets/badges/Converser.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                    {data?.rockstar_badge && (
                      <Tooltip message={"Rockstar Badge"}>
                        <img
                          src="/assets/badges/Rockstar.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                    {data?.github_x_discord_badge && (
                      <Tooltip message={"GitHub Discord Badge"}>
                        <img
                          src="/assets/badges/DiscordGithub.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                  </td>
                  <td className="my-2 px-2 min-w-[100px]">
                    <div className="flex">
                      {data?.enthusiast_badge && (
                        <Tooltip message={"Enthusiast Badge"}>
                          <img
                            src="/assets/badges/Enthusiast.png"
                            className="w-[60px] rounded-full"
                          />
                        </Tooltip>
                      )}
                      {data?.rising_star_badge && (
                        <Tooltip message={"Rising Star Badge"}>
                          <img
                            src="/assets/badges/RisingStar.png"
                            className="w-[60px] rounded-full"
                          />
                        </Tooltip>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="my-5 relative overflow-x-auto">
        <table className="lg:w-auto xs:w-[90vw] text-sm text-left mx-auto">
          <thead className="text-xs text-white uppercase bg-primary-color font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">
                Badges
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/DiscordGithub.png"
                  className="w-[50px] rounded-full"
                />
              </td>
              <td className="px-6 py-2 text-black">
                Rewarded on connecting GitHub with Discord to help track coding
                activity.
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/DiscordGithub.png"
                  className="w-[50px] rounded-full"
                />
              </td>
              <td className="px-6 py-2 text-black">
                Rewarded on connecting GitHub with Discord to help track coding
                activity.
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Apprentice.png"
                  className="w-[50px] rounded-full"
                />
              </td>
              <td className="px-6 py-2 text-black">
                Contributor has introduced themselves on the introductions
                channel.
              </td>
            </tr>
            <tr className="bg-white border-b">
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Converser.png"
                  className="w-[50px] rounded-full"
                />
              </td>
              <td className="px-6 py-2 text-black">
                Contributor has shared atleast 10 messages on the Discord
                community.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderBoard;

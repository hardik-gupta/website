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
        <table className="lg:w-auto xs:w-[90vw] text-sm text-left mx-auto">
          <tbody>
            <tr className="border-b text-white bg-primary-color text-center text-xs font-bold uppercase">
              <td className="px-6 py-2">Level 1</td>
              <td className="px-6 py-2">Level 2</td>
              <td className="px-6 py-2">Level 3</td>
              <td className="px-6 py-2">Level 4</td>
              <td className="px-6 py-2">Level 5</td>
            </tr>
            <tr className="bg-white border-b text-center">
              <td className="py-2 text-black">
                <img
                  src="/assets/badges/Enthusiast.png"
                  className="w-[50px] rounded-full mx-auto"
                />
                <div>Enthusiast</div>
              </td>
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/RisingStar.png"
                  className="w-[50px] rounded-full mx-auto"
                />
                <div>Rising Star</div>
              </td>
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Wizard.jpeg"
                  className="w-[50px] rounded-full mx-auto"
                />
                <div>Wizard</div>
              </td>
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Ninja.jpg"
                  className="w-[50px] rounded-full mx-auto"
                />
                <div>Ninja</div>
              </td>
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Warrior.jpeg"
                  className="w-[50px] rounded-full mx-auto"
                />
                <div>Warrior</div>
              </td>
            </tr>
            <tr className="bg-white border-b text-black text-center">
              <td className="px-6 py-2">&gt;= 10</td>
              <td className="px-6 py-2">&gt;= 50</td>
              <td className="px-6 py-2">&gt;= 100</td>
              <td className="px-6 py-2">&gt;= 175</td>
              <td className="px-6 py-2">&gt;= 275</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-5 relative overflow-x-auto">
        <table className="lg:w-[60vw] xs:w-[90vw] text-sm text-left mx-auto">
          <thead className="text-xs text-white bg-primary-color font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                GITHUB USERNAMES
              </th>

              <th scope="col" className="px-6 py-3">
                <Tooltip
                  message={"Points that are earned solving & reviewing tickets"}
                  className=""
                >
                  DPG POINTS
                </Tooltip>
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                LEVEL
              </th>

              <th scope="col" className="px-6 py-3">
                <Tooltip
                  message={
                    "Badges that are awarded on collecting DPG points & levelling up. "
                  }
                  className=""
                >
                  CONTRIBUTION BADGES
                </Tooltip>
              </th>
              <th scope="col" className="px-6 py-3">
                <Tooltip
                  message={
                    "Badges that are awarded on completion of an activity/milestone."
                  }
                  className=""
                >
                  ACTIVITY BADGES
                </Tooltip>
              </th>
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
                  <td className="my-2 px-2 min-w-[100px]">
                    <div className="flex">
                      {data?.enthusiast_badge && (
                        <Tooltip message={"Enthusiast Badge"} className="badge">
                          <img
                            src="/assets/badges/Enthusiast.png"
                            className="w-[60px] rounded-full"
                          />
                        </Tooltip>
                      )}
                      {data?.rising_star_badge && (
                        <Tooltip message={"Rising Star Badge"} className="badge">
                          <img
                            src="/assets/badges/RisingStar.png"
                            className="w-[60px] rounded-full"
                          />
                        </Tooltip>
                      )}
                    </div>
                  </td>
                  <td className="flex my-3 px-2 min-w-[250px]">
                    {data?.apprentice_badge && (
                      <Tooltip
                        message={"Apprentice Badge"}
                        className="Apprentice Badge - Introducing yourself on the introduction channel on Discord"
                      >
                        <img
                          src="/assets/badges/Apprentice.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                    {data?.converser_badge && (
                      <Tooltip
                        message={
                          "Converser Badges - Shared at least 10 messages on Discord"
                        }
                        className=""
                      >
                        <img
                          src="/assets/badges/Converser.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                    {data?.rockstar_badge && (
                      <Tooltip
                        message={
                          "Rockstar Badge - Received at least 5 reactions to a message on Discord"
                        }
                        className=""
                      >
                        <img
                          src="/assets/badges/Rockstar.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                    {data?.github_x_discord_badge && (
                      <Tooltip
                        message={
                          "DiscordXGitHub Badge - Linking C4GT Discord & GitHub profiles"
                        }
                        className=""
                      >
                        <img
                          src="/assets/badges/DiscordGithub.png"
                          className="w-[50px] rounded-full"
                        />
                      </Tooltip>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderBoard;

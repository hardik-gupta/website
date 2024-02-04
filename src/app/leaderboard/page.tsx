"use client";
import { getLeaderboard } from "@/component/api";
import Tooltip from "@/component/constants/tooltip";
import React, { useEffect, useState } from "react";

const BadgeCard = ({ level, name, points }: { level: number, name: string, points: number }) => {
  return (
    <div className="border min-w-[170px] text-center sm:mb-8 xs:mb-8 md:my-2 xs:max-mx-10">
      <div className="px-6 py-2 border-b bg-primary-color text-white font-bold uppercase">
        Level {level}
      </div>
      <div className="py-2 text-black border-b">
        <img
          src={`/assets/badges/${name.replace(/\s/g, "")}.webp`}
          className="lg:w-[150px] xs:w-[80px] md:w-[80px] sm:w-[80px] rounded-full mx-auto"
        />
        <div className="font-bold">{name}</div>
      </div>
      <div className="px-6 py-2 text-black">{points} points</div>
    </div>
  )
}

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
      {/* <h1 className="text-center font-bold">Contributor Badges</h1> */}
      <div className="lg:flex lg:w-[80vw] lg:justify-between mx-auto my-4">
        <BadgeCard level={1} name="Enthusiast" points={10} />
        <BadgeCard level={2} name="Rising Star" points={50}/>
        <BadgeCard level={3} name="Wizard" points={100}/>
        <BadgeCard level={4} name="Ninja" points={175}/>
        <BadgeCard level={5} name="Warrior" points={275}/>
        {/* <div className="border min-w-[170px] text-center sm:mb-8 xs:mb-8 md:my-2 xs:max-mx-10">
          <div className="px-6 py-2 border-b bg-primary-color text-white font-bold uppercase">
            Level 1
          </div>
          <div className="py-2 text-black border-b">
            <img
              src="/assets/badges/Enthusiast.png"
              className="lg:w-[150px] xs:w-[80px] md:w-[80px] sm:w-[80px] rounded-full mx-auto"
            />
            <div className="font-bold">Enthusiast</div>
          </div>
          <div className="px-6 py-2 text-black">10 points</div>
        </div>

        <div className="border min-w-[170px] text-center sm:mb-8 xs:mb-8 md:my-2 xs:max-mx-10">
          <div className="px-6 py-2 border-b bg-primary-color text-white font-bold uppercase">
            Level 2
          </div>
          <div className="py-2 text-black border-b">
            <img
              src="/assets/badges/RisingStar.png"
              className="lg:w-[150px] xs:w-[80px] md:w-[80px] sm:w-[80px] rounded-full mx-auto"
            />
            <div className="font-bold">Rising Star</div>
          </div>
          <div className="px-6 py-2 text-black">50 points</div>
        </div>
        <div className="border min-w-[170px] text-center sm:mb-8 xs:mb-8 md:my-2 xs:max-mx-10">
          <div className="px-6 py-2 border-b bg-primary-color text-white font-bold uppercase">
            Level 3
          </div>
          <div className="py-2 text-black border-b">
            <img
              src="/assets/badges/Wizard.jpeg"
              className="lg:w-[150px] xs:w-[80px] md:w-[80px] sm:w-[80px] rounded-full mx-auto"
            />
            <div className="font-bold">Wizard</div>
          </div>
          <div className="px-6 py-2 text-black">100 points</div>
        </div>
        <div className="border min-w-[170px] text-center sm:mb-8 xs:mb-8 md:my-2 xs:max-mx-10">
          <div className="px-6 py-2 border-b bg-primary-color text-white font-bold uppercase">
            Level 4
          </div>
          <div className="py-2 text-black border-b">
            <img
              src="/assets/badges/Ninja.jpg"
              className="lg:w-[150px] xs:w-[80px] md:w-[80px] sm:w-[80px] rounded-full mx-auto"
            />
            <div className="font-bold">Ninja</div>
          </div>
          <div className="px-6 py-2 text-black">175 points</div>
        </div>
        <div className="border min-w-[170px] text-center sm:mb-8 xs:mb-8 md:my-2 xs:max-mx-10">
          <div className="px-6 py-2 border-b bg-primary-color text-white font-bold uppercase">
            Level 5
          </div>
          <div className="py-2 text-black border-b">
            <img
              src="/assets/badges/Warrior.jpeg"
              className="lg:w-[150px] xs:w-[80px] md:w-[80px] sm:w-[80px] rounded-full mx-auto"
            />
            <div className="font-bold">Warrior</div>
          </div>
          <div className="px-6 py-2 text-black">275 points</div>
        </div> */}
      </div>
      {/* <div className="my-5 relative overflow-x-auto">
        <table className="lg:w-auto xs:w-[90vw] text-sm text-left mx-auto">
          <tbody>
            <tr className="border-b text-white bg-primary-color text-center text-xs font-bold uppercase">
              <td className="px-6 py-2">Level 2</td>
              <td className="px-6 py-2">Level 3</td>
              <td className="px-6 py-2">Level 4</td>
              <td className="px-6 py-2">Level 5</td>
            </tr>
            <tr className="bg-white border text-center">
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/RisingStar.png"
                  className="w-[100px] rounded-full mx-auto"
                />
                <div>Rising Star</div>
              </td>
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Wizard.jpeg"
                  className="w-[100px] rounded-full mx-auto"
                />
                <div>Wizard</div>
              </td>
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Ninja.jpg"
                  className="w-[100px] rounded-full mx-auto"
                />
                <div>Ninja</div>
              </td>
              <td className="px-6 py-2 text-black">
                <img
                  src="/assets/badges/Warrior.jpeg"
                  className="w-[100px] rounded-full mx-auto"
                />
                <div>Warrior</div>
              </td>
            </tr>
            <tr className="bg-white border text-black text-center">
              <td className="px-6 py-2">50 points</td>
              <td className="px-6 py-2">100 points</td>
              <td className="px-6 py-2">175 points</td>
              <td className="px-6 py-2">275 points</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <div className="my-5 relative overflow-x-auto">
        <table className="lg:w-[80vw] xs:w-[90vw] text-sm text-left mx-auto">
          <thead className="text-[16px] text-white bg-primary-color font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">
                S.No
              </th>
              <th scope="col" className="px-6 py-3">
                GITHUB USERNAMES
              </th>

              <th scope="col" className="px-6 py-3 flex justify-center">
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
                <tr className="bg-white border text-[16px]">
                  <td className="px-6 py-4 text-black">{index + 1}</td>
                  <td className="px-6 py-4 text-[#395f9c] underline">
                    <a href={data?.github_url} target="_blank">
                      {data?.github_url?.slice("19")}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-black text-center">{data?.points}</td>
                  <td className="px-6 py-4 text-black text-center min-w-[150px]">
                    {data?.points >= 100 && (
                      <div className="rounded-full bg-green-200 py-2">
                        Level 3
                      </div>
                    )}
                    {data?.points < 100 && data?.points >= 50 && (
                      <div className="rounded-full bg-orange-200 py-2">
                        Level 2
                      </div>
                    )}
                    {data?.points < 50 && data?.points >= 10 && (
                      <div className="rounded-full bg-yellow-200 py-2">
                        Level 1
                      </div>
                    )}
                    {data?.points < 10 && data?.points >= 1 && (
                      <div className="rounded-full bg-pink-200 py-2">
                        Beginner
                      </div>
                    )}
                  </td>
                  <td className="my-2 px-2 min-w-[100px]">
                    <div className="flex">
                      {data?.enthusiast_badge && (
                        <Tooltip message={"Enthusiast Badge"} className="badge">
                          <img
                            src="/assets/badges/Enthusiast.webp"
                            className="w-[60px] rounded-full"
                          />
                        </Tooltip>
                      )}
                      {data?.rising_star_badge && (
                        <Tooltip
                          message={"Rising Star Badge"}
                          className="badge"
                        >
                          <img
                            src="/assets/badges/RisingStar.webp"
                            className="w-[60px] rounded-full"
                          />
                        </Tooltip>
                      )}
                    </div>
                  </td>
                  <td className="flex my-3 px-2 min-w-[250px]">
                    {data?.apprentice_badge && (
                      <Tooltip
                        message={
                          "Apprentice Badge - Introducing yourself on the introduction channel on Discord"
                        }
                        className=""
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

"use client";

import { useState } from "react";
import ButtonBanner from "@/components/button-banner";
import Sidebar from "@/components/sidebar";
import ChatAppPage from "@/app/projects/chat-app";
import PennCloudPage from "@/app/projects/penn-cloud";
import EmailServerPage from "@/app/projects/email-server";
import PlaylistGeneratorPage from "@/app/projects/playlist-generator";
import WebScraperPage from "@/app/projects/web-scraper";
import GuiImageSegmentatorPage from "@/app/projects/gui-image-segmentator";
import VideoConferencePage from "@/app/projects/video-conference-emotion-detector";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("chat-app");
  return (
    <main>
      <ButtonBanner activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-col items-center min-h-screen text-black px-4 py-5">
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl flex overflow-hidden border border-gray-200">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="flex-1 overflow-y-auto">
            {activeTab === "chat-app" && <ChatAppPage />}
            {activeTab === "penn-cloud" && <PennCloudPage />}
            {activeTab === "email-server" && <EmailServerPage />}
            {activeTab === "playlist-generator" && <PlaylistGeneratorPage />}
            {activeTab === "web-scraper" && <WebScraperPage />}
            {activeTab === "gui-image-segmentator" && (
              <GuiImageSegmentatorPage />
            )}
            {activeTab === "video-conference-emotion-detector" && (
              <VideoConferencePage />
            )}
          </main>
        </div>
      </div>
    </main>
  );
}

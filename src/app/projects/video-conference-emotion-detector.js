"use client";

import Image from "next/image";
import Link from "next/link";

export default function VideoConferencePage() {
  return (
    <main>
      <div className="bg-slate-300 p-8">
        <div className="text-3xl font-bold">
          SERENITY: Emotion-Detecting Video Conferencing App
        </div>
        <p className="text-lg leading-relaxed mt-3">
          View my code on{" "}
          <a
            href="https://github.com/mikth3372/DragonHacks"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold inline-flex"
          >
            GitHub
          </a>
        </p>
        <div className="text-lg leading-relaxed">
          <div className="font-bold inline-flex">Techstack: </div> Python,
          Flask, Javascript, OpenAI API, HumeAI API, Zoom API
        </div>
        <p className="text-lg font-bold leading-relaxed">
          Best Domain Awards at MLH DragonHacks Hackathon
        </p>
      </div>
      <div className="space-y-10 text-gray-800 p-8">
        {/* Project Summary */}
        <section id="summary">
          <h2 className="text-3xl font-bold mb-4">Project Summary</h2>
          <p className="text-lg leading-relaxed">
            Serenity is a full stack application, with embedded Zoom video
            conferencing, that analyzes participant&apos;s emotions real-time
            and provides suggestions on what to say/how to behave based on
            detected emotions.
          </p>
        </section>

        {/* Screenshots */}
        <section id="screenshots">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <div className="sm:grid-cols-2 gap-4 w-full">
            <Image
              src="/serenity-login.png"
              alt="Login Page"
              width={800}
              height={600}
              className="rounded-lg border"
            />
            <Image
              src="/serenity-happy.png"
              alt="Happy example"
              width={800}
              height={600}
              className="rounded-lg border"
            />
            <Image
              src="/serenity-sad.png"
              alt="Sad example"
              width={800}
              height={600}
              className="rounded-lg border"
            />
          </div>
        </section>

        {/* System Design */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">Main Features</h2>
          <p>
            The application integrates many third party APIs, including Zoom
            API, OpenAI API, and HumeAI API, to provide the following features:
          </p>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-2">
            <li>Embedded Zoom video conferencing</li>
            <li>Real-time visual analysis on participant&apos;s emotions</li>
            <li>
              Suggestions on what to say/ how to behave based on detected
              emotions
            </li>
          </ol>
        </section>

        {/* How to Run */}
        <section id="instructions">
          <h2 class="text-3xl font-bold mb-4">
            Project Compilation and Execution
          </h2>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-3">
            <li>
              <strong>Generate Zoom meeting SDK via HTTP request:</strong>
              <div className="bg-slate-300 p-2">
                cd meetingsdk-auth-endpoint-sample
              </div>
              <div className="bg-slate-300 p-2">npm install</div>
              <div className="bg-slate-300 p-2">npm run start</div>
            </li>
            <li>
              <strong>Run backend server:</strong>
              <div className="p-2">
                Naviagate to DragonHacks folder, install dependencies, and run
                server
              </div>
              <div className="bg-slate-300 p-2">flask run</div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

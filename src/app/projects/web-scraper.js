"use client";

import Image from "next/image";
import Link from "next/link";

export default function WebScraperPage() {
  return (
    <main>
      <div className="bg-slate-300 p-8">
        <div className="text-3xl font-bold">
          NomNomGuide: Web Scraper for Restaurant Reservations
        </div>
        <p className="text-lg leading-relaxed mt-3">
          View my code on{" "}
          <a
            href="https://github.com/yousungk/nomnomguide-fullstack"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold inline-flex"
          >
            GitHub
          </a>
        </p>
        <div className="text-lg leading-relaxed">
          <div className="font-bold inline-flex">Techstack: </div>
          Next.js, Selenium Web Scraper, Python, SQL, Cronjob
        </div>
      </div>
      <div className="space-y-10 text-gray-800 p-8">
        {/* Project Summary */}
        <section id="summary">
          <h2 className="text-3xl font-bold mb-4">Project Summary</h2>
          <p className="text-lg leading-relaxed mb-5">
            NomNomGuide is a data analytics application that helps users
            identify the optimal time to book reservations at high-demand
            restaurants. Built for food enthusiasts and travelers, it presents
            booking trends and statistics to improve users’ chances of securing
            a table at top-rated spots.
          </p>
          <p className="text-lg leading-relaxed">
            The core technical components of NomNomGuide include automated web
            scraping using Selenium and Python to collect live reservation data
            from Google. The scraped data is stored in a time-series database
            and analyzed in real-time to compute metrics such as daily average
            bookings, monthly trends, booking lead times, and peak booking days.
            A backend pipeline schedules data updates with crontab, while the
            frontend displays interactive analytics dashboards using React.
          </p>
        </section>

        {/* Screenshots */}
        <section id="screenshots">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <div className="sm:grid-cols-2 gap-4 w-full">
            <Image
              src="/nomnom-main.png"
              alt="NomNom Main Page"
              width={800}
              height={600}
              className="rounded-lg border mb-5"
            />
            <Image
              src="/nomnom-list.png"
              alt="NomNom Restaurant List"
              width={800}
              height={600}
              className="rounded-lg border mb-5"
            />
            <Image
              src="/nomnom-info.png"
              alt="NomNom Restaurant Info"
              width={800}
              height={600}
              className="rounded-lg border mb-5"
            />
            <Image
              src="/nomnom-analytics.png"
              alt="NomNom Analytics"
              width={800}
              height={600}
              className="rounded-lg border mb-5"
            />
          </div>
        </section>

        {/* System Design */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
          <p className="text-lg leading-relaxed">
            I used Next.js, full-stack framework, to develop both the frontend
            and the backend server logic. It can server as both a web server and
            a backend server, using features such as App Router and built-in
            support for React.
          </p>
        </section>

        {/* How to Run */}
        <section id="instructions">
          <h2 class="text-3xl font-bold mb-4">
            Project Compilation and Execution
          </h2>
          <p class="text-lg leading-relaxed pb-3">
            To compile project, please run <code>make</code> in the project home
            directory. There are 5 processes that must be running:
          </p>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-3">
            <li>
              <strong>Navigate to the website folder:</strong>
              <div className="bg-slate-300 p-2">cd website</div>
            </li>
            <li>
              <strong>Install all required modules:</strong>
              <div className="bg-slate-300 p-2">npm install</div>
            </li>
            <li>
              <strong>Start the application:</strong>
              <div className="bg-slate-300 p-2">npm run dev</div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

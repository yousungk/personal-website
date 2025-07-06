import ButtonBanner from "@/components/button-banner";
export default function Resume() {
  return (
    <main>
      <ButtonBanner />
      <div className="mx-20 mb-20 mt-10">
        <div>
          <div className="space-y-2">
            <div className="font-bold text-4xl">Yousung (Ally) Kim</div>
            <div>yousungkim98@gmail.com | (201) 370-3231 </div>
          </div>
          <div className="flex flex-row content-center items-center space-x-4 my-2">
            <div className="items-center">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="items-center">
              <a href="mailto:yousungkim98@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                  height="24"
                  width="24"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
            </div>
            <div className="items-center">
              <a
                href="https://github.com/yousungk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#1B1F23"
                  />
                </svg>
              </a>
            </div>
            <div className="items-center">
              <a
                href="https://www.linkedin.com/in/allykim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mb-3">
            I&apos;m a backend software engineer passionate about building
            distributed, scalable systems that power high-performance
            applications. With a dual background in computer science and
            finance, I&apos;m particularly interested in the intersection of
            technology and financial systems. Outside of work, I enjoy exploring
            new programming languages and studying real-world system
            architectures used across the tech industry.
          </div>

          <div>Let&apos;s connect!</div>
        </div>
        <hr className="border-gray-500 my-5" />
        <div className="my-5">
          <span className="font-bold text-2xl">Education</span>
          <div className="flex flex-row place-content-between mt-3">
            <div>
              <div className="font-bold text-lg">
                University of Pennsylvania
              </div>
              <div>Masters of Science, Computer Science</div>
              <div>GPA: 4.0, Summa Cum Laude</div>
              <div>
                2024 UPenn MCIT Hackathon - Honorable Mention | 2024 DragonHacks
                MLS Hackathon - Best Domain Awards
              </div>
            </div>
            <div className="rounded-lg bg-gray-200 p-1 px-2 self-start">
              Dec 2024
            </div>
          </div>
          <div className="flex flex-row place-content-between mt-2">
            <div className="font-bold text-lg">Princeton University</div>
            <div className="rounded-lg bg-gray-200 p-1 px-2 self-start">
              May 2021
            </div>
          </div>
          <div>Bachelors of Arts, Economics</div>
          <div>GPA: 3.86, Magna Cum Laude</div>
        </div>
        <hr className="border-gray-500 my-5" />
        <div>
          <span className="font-bold text-2xl">Experience</span>
          <div className="grid grid-cols-4 gap-4 mt-3 pb-3 ">
            <div className="col-span-3">
              <div className="font-bold text-lg">Morgan Stanley</div>
              <div className="my-2">
                <span className="rounded-lg bg-red-200 p-1 px-2 font-bold mr-3">
                  Software Engineer
                </span>
                <span className="rounded-lg bg-white p-1 px-2 mr-3">NYC</span>
                <span className="rounded-lg bg-lime-300 p-1 px-2 font-bold mr-3">
                  Quantitative Investment Strategies Team
                </span>
              </div>
              <li>
                Developed internal analytics platform utilized by over 2,000
                internal supply chain executives to track and analyze over 1M
                supplier spending, invoice, and contracts data
              </li>
              <li>
                Built a feature for publishing and downloading interactive data
                reports, by designing database, developing pipeline for storing
                reports metadata, and implementing APIs and optimized SQL
                queries for efficient reports search
              </li>
              <li>
                Created an admin usage metrics dashboard by developing scripts
                that collect and store web traffic data
              </li>
              <div className="mt-3">
                <span className="rounded-lg bg-blue-200  p-1 px-2 font-bold mr-3">
                  Node.js
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  React.js
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  SQL
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  REST APIs
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  Snowflake Cloud
                </span>
              </div>
            </div>
            <span className="col-span-1 rounded-lg bg-gray-200 py-1 px-2 self-start justify-self-end">
              May - Aug 2024
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-3 pb-3 ">
            <div className="col-span-3">
              <div className="font-bold text-lg">AT&T</div>
              <div className="my-2">
                <span className="rounded-lg bg-red-200 p-1 px-2 font-bold mr-3">
                  Software Engineer Intern
                </span>
                <span className="rounded-lg bg-white p-1 px-2 mr-3">
                  Dallas, TX
                </span>
                <span className="rounded-lg bg-lime-300 p-1 px-2 font-bold mr-3">
                  Data Analytics and Insights Team
                </span>
              </div>
              <li>
                Developed internal analytics platform utilized by over 2,000
                internal supply chain executives to track and analyze over 1M
                supplier spending, invoice, and contracts data
              </li>
              <li>
                Built a feature for publishing and downloading interactive data
                reports, by designing database, developing pipeline for storing
                reports metadata, and implementing APIs and optimized SQL
                queries for efficient reports search
              </li>
              <li>
                Created an admin usage metrics dashboard by developing scripts
                that collect and store web traffic data
              </li>
              <div className="mt-3">
                <span className="rounded-lg bg-blue-200  p-1 px-2 font-bold mr-3">
                  Node.js
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  React.js
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  SQL
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  REST APIs
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  Snowflake Cloud
                </span>
              </div>
            </div>
            <span className="col-span-1 rounded-lg bg-gray-200 py-1 px-2 self-start justify-self-end">
              May - Aug 2024
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-3 pb-3">
            <div className="col-span-3">
              <div className="font-bold text-lg">Keep.ID</div>
              <div className="my-2">
                <span className="rounded-lg bg-red-200 p-1 px-2 font-bold mr-3">
                  Software Engineer Intern
                </span>
                <span className="rounded-lg bg-white p-1 px-2">Remote</span>
              </div>
              <li>
                Developed multi-paged front-end feature that allows users to
                update personal account information
              </li>
              <li>
                Refactored codebase to incorporate static site generation,
                server-side rendering, and advanced caching techniques to create
                low latency web application, reducing web rendering time by 60
                percent
              </li>
              <div className="mt-3">
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  React.js
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  Java
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  Apache Maven
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  MongoDB
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <span className="col-span-1 rounded-lg bg-gray-200 py-1 px-2 self-start justify-self-end">
              Oct 2023 - Present
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-3">
            <div className="col-span-3">
              <div className="font-bold text-lg">The Brattle Group</div>
              <div className="my-2">
                <span className="rounded-lg bg-red-200 p-1 px-2 font-bold mr-3">
                  Research / Data Analyst
                </span>
                <span className="rounded-lg bg-white p-1 px-2 mr-3">NYC</span>
                <span className="rounded-lg bg-lime-300 p-1 px-2 font-bold mr-3">
                  Financial Securities Group
                </span>
              </div>
              <li>
                Built data pipeline with automated scripts for extracting,
                standardizing, and ingesting over 40 million unstructured
                telecommunications data into SQL server, visualized on
                interactive dashboard used by 100+ client lawyers
              </li>
              <li>
                Developed a search algorithm that identifies matching phone
                calls referenced in 100+ legal documents with 99% match accuracy
                rate, and created automated process to query data from database
                and export into formatted client deliverables
              </li>
              <li>
                Designed an automated investment activity tracing script that
                calculates stakeholder&apos;s minute-level financial return for
                securities and options, which became the firm&apos;s template
                script for tracing casework
              </li>
              <li>
                Developed script that calculates cryptocurrency price
                differentials and transaction flows across different exchange
                platforms to identify arbitrage opportunities, which helped
                secure long-term contract with client company
              </li>
              <li>
                Implemented cloud solution for PDF data extraction, reducing
                completion time by 75% and error rate to less than 1%
              </li>
              <div className="mt-3">
                <span className="rounded-lg bg-blue-200  p-1 px-2 font-bold mr-3">
                  Python
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  R
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  Stata
                </span>
                <span className="rounded-lg bg-blue-200 p-1 px-2 font-bold mr-3">
                  SQL
                </span>
              </div>
            </div>
            <span className="col-span-1 rounded-lg bg-gray-200 py-1 px-2 self-start justify-self-end">
              May 2021 - Aug 2023
            </span>
          </div>
        </div>
        <hr className="border-gray-500 my-5" />
        <div>
          <span className="font-bold text-2xl">Technical Skills</span>
          <div className="mt-3">
            <div className="flex flex-row">
              <div className="font-bold">Languages: </div>
              <div className="ml-2">
                {" "}
                C++, Java, Python, Scala, Javascript/Typescript, HTML, CSS
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-bold">Web Development: </div>
              <div className="ml-2">
                {" "}
                React.js, Angular, Next,js, Node.js, Express.js, Bootstrap,
                Tailwind, Docker
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-bold">Database: </div>
              <div className="ml-2">
                {" "}
                AWS RDS, MongoDB, MySQL, PostgreSQL, SQLite, Neo4j
              </div>
            </div>
            <div className="flex flex-row">
              <div className="font-bold">Data Analytics / BI Tools: </div>
              <div className="ml-2">
                {" "}
                R, Stata, PowerBI, Advanced Microsoft Excel, Jupyter Notebook
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function PennCloudPage() {
  return (
    <main>
      <div className="bg-slate-300 p-8">
        <div className="text-3xl font-bold">
          PennCloud & PennEmail: Distributed Key Value Storage
        </div>
        <p className="text-lg leading-relaxed mt-3">
          UPenn CIS505 Group Project
        </p>
        <p className="text-lg leading-relaxed">
          View my code on{" "}
          <a
            href="https://github.com/yousungk/chat-application"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold inline-flex"
          >
            GitHub
          </a>
        </p>
        <div className="text-lg leading-relaxed">
          <div className="font-bold inline-flex">Techstack: </div> C++,
          Javascript, HTML, CSS
        </div>
      </div>
      <div className="space-y-10 text-gray-800 p-8">
        {/* Project Summary */}
        <section id="summary">
          <h2 className="text-3xl font-bold mb-4">Project Summary</h2>
          <p>
            This project is a small cloud platform that supports webmail service
            and storage service, similar to Gmail and Google Drive. There is a
            set of frontend servers that runs a stateless web server. It also
            has a set of backend servers that provides a distributed key-value
            storage, supporting the operations PUT, GET, CPUT, and DELETE. The
            storage service supports data replication and fault tolerance (data
            is accessible as long as at least one replica is alive). The backend
            servers can be monitored with an admin console, which provides
            ability to detect server failures and to restart servers.
          </p>
        </section>

        {/* Screenshots */}
        <section id="screenshots">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <div className="sm:grid-cols-2 gap-4 w-full">
            <Image
              src="/penn-cloud-homepage.png"
              alt="Penn Cloud Home"
              width={800}
              height={600}
              className="rounded-lg border"
            />
            <Image
              src="/penn-cloud-file-upload.png"
              alt="Penn Cloud File Upload"
              width={800}
              height={600}
              className="rounded-lg border"
            />
            <Image
              src="/penn-cloud-admin-console.png"
              alt="Penn Cloud Admin Console"
              width={800}
              height={600}
              className="rounded-lg border"
            />
            <Image
              src="/penn-cloud-read-email.png"
              alt="Penn Cloud Email"
              width={800}
              height={600}
              className="rounded-lg border"
            />
          </div>
        </section>

        {/* System Design */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
          <Image
            src="/penn-cloud-design.png"
            alt="Penn Cloud Screenshot"
            width={800}
            height={600}
            className="rounded-lg border mb-5"
          />
          <p className="text-lg leading-relaxed pb-5">
            Our system broadly consists of (1) PennCloud Email: an email system
            where users can send emails to both external and PennCloud users,
            and receive emails from PennCloud users; and (2) PennCloud Drive: a
            file storage system where users can upload files and store them for
            later use. Both components make use of stateless frontend servers, a
            frontend load balancer, a backend coordinator node, and backend
            storage servers.
          </p>
          <p className="text-lg leading-relaxed pb-5">
            Communication between the frontend and backend servers is
            coordinated through the master backend coordinator node. When a
            frontend server wants to execute a command, it first contacts the
            coordinator to ask for the address of a storage server in the
            relevant partition. After obtaining the address from the
            coordinator, the frontend server submits the command to the relevant
            backend server. The backend servers perform the operation and return
            a response to the frontend. The aforementioned communication steps
            are implemented via stream sockets using the Transfer Control
            Protocol (TCP).
          </p>{" "}
          <p className="text-lg leading-relaxed pb-5">
            The backend coordinator is connected to every backend storage server
            in order to keep track of active servers and current primaries. The
            identities of the backend servers are determined at compile time,
            while the availabilities are determined at runtime through
            heartbeats. Separately, the frontend servers send periodic
            heartbeats to the master frontend load balancer. The identities and
            availability of the frontend servers are determined dynamically at
            runtime.
          </p>
          <p className="text-lg leading-relaxed pb-5">
            A separate SMTP server handles all requests for delivering emails.
            The server supports local clients such as Thunderbird and Telnet,
            client requests to deliver emails to PennCloud inboxes (i.e.,
            @penncloud.com), and client requests to deliver emails to external
            inboxes (i.e., @seas.penn.edu).
          </p>
          <p className="text-lg leading-relaxed pb-5">
            Finally, an admin console displays the current status, IP address,
            and port of both frontend and backend servers. Data stored in the
            backend servers can also be accessed read-only via the admin
            console. The admin console also enables a privileged user to shut
            down and restart backend servers.
          </p>
          <p className="text-lg leading-relaxed">
            Download the full project report{" "}
            <a
              href="/PennCloud_Report_21.pdf"
              download="PennCloud_Report_21.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold inline-flex"
            >
              here
            </a>
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
              <strong>Frontend Server:</strong>
              <div className="bg-slate-300 p-2">
                ./fserver -v -p [PORT] frontend/config.secret
                backend/coordinator_server.txt
              </div>
            </li>
            <li>
              <strong>Frontend Load Balancer:</strong>
              <div className="bg-slate-300 p-2">
                ./flb -v frontend/config.secret
              </div>
            </li>
            <li>
              <strong>SMTP Server:</strong>
              <div className="bg-slate-300 p-2">./smtp_server -v</div>
            </li>
            <li>
              <strong>Backend Coordinator:</strong>
              <div className="bg-slate-300 p-2">
                ./bcoordinator -v backend/coordinator_server.txt
                backend/storage_servers.txt
              </div>
            </li>
            <li>
              <strong>Backend Storage Server:</strong>
              <div className="bg-slate-300 p-2">
                ./btable -v backend/coordinator_server.txt
                backend/storage_servers.txt [NODE_IDX]
              </div>
            </li>
          </ol>
          <p class="text-lg leading-relaxed mt-5 mb-5">
            You can include the optional -v verbose flag in all commands above.
            For less verbose outputs to stdout, feel free to omit this flag.
          </p>
          <p class="text-lg leading-relaxed">
            Each command line command should be run in a separate shell
            environment. There are 6 backend storage nodes specified in our{" "}
            backend/storage_servers.txt configuration file; therefore, the
            backend storage server command should be run in 6 different
            terminals, where [NODE_IDX] is equal to integer values from 1 to 6
            inclusive. There can be any arbitrary number of frontend servers; to
            run a frontend server binded to a particular integer port value,
            replace the [PORT] variable above with the appropriate port value.
            The default port value is 2121.
          </p>
        </section>
      </div>
    </main>
  );
}

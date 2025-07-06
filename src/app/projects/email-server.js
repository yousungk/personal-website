"use client";

import Image from "next/image";
import Link from "next/link";

export default function EmailServerPage() {
  return (
    <main>
      <div className="bg-slate-300 p-8">
        <div className="text-3xl font-bold">SMTP & POP3 Email Server </div>
        <div className="text-lg leading-relaxed mt-3">
          {" "}
          <div className="font-bold inline-flex">Techstack: </div> C++
        </div>
      </div>
      <div className="space-y-10 text-gray-800 p-8">
        {/* Project Summary */}
        <section id="summary">
          <h2 className="text-3xl font-bold mb-4">Project Summary</h2>
          <p className="text-lg leading-relaxed">
            This project involved building two multithreaded servers
            implementing core email protocols: SMTP for sending emails and POP3
            for retrieving emails. I focused on implementing the core
            functionalities, such as HELO, MAIL FROM, RCPT TO, DATA, QUIT for
            the SMTP server, and USER, PASS, STAT, DELE, etc. for the POP3
            server. The servers are multithreaded to handle concurrent
            connections, and has been set up to interact with the Thunderbird
            email client.
          </p>
        </section>

        <section id="design">
          <h2 className="text-3xl font-bold mb-4">
            SMTP Protocols Implemented:
          </h2>
          <p className="text-lg leading-relaxed">
            <ul class="list-disc pl-6 text-lg leading-relaxed">
              <li>
                <strong>HELO &lt;domain&gt;:</strong> Starts a connection.
              </li>
              <li>
                <strong>MAIL FROM:</strong> Tells the server who the sender of
                the email is.
              </li>
              <li>
                <strong>RCPT TO:</strong> Specifies the recipient.
              </li>
              <li>
                <strong>DATA:</strong> Followed by the text of the email and
                then a dot (.) on a line by itself.
              </li>
              <li>
                <strong>QUIT:</strong> Terminates the connection.
              </li>
              <li>
                <strong>RSET:</strong> Aborts a mail transaction.
              </li>
              <li>
                <strong>NOOP:</strong> Does nothing.
              </li>
            </ul>
          </p>
        </section>

        <section id="design">
          <h2 className="text-3xl font-bold mb-4">
            POP3 Protocols Implemented:
          </h2>
          <p className="text-lg leading-relaxed">
            <ul class="list-disc pl-6 text-lg leading-relaxed">
              <li>
                <strong>USER:</strong> Tells the server which user is logging
                in.
              </li>
              <li>
                <strong>PASS:</strong> Specifies the user's password.
              </li>
              <li>
                <strong>STAT:</strong> Returns the number of messages and the
                size of the mailbox.
              </li>
              <li>
                <strong>UIDL:</strong> Shows a list of messages, along with a
                unique ID for each message.
              </li>
              <li>
                <strong>RETR:</strong> Retrieves a particular message.
              </li>
              <li>
                <strong>DELE:</strong> Deletes a message.
              </li>
              <li>
                <strong>QUIT:</strong> Terminates the connection.
              </li>
              <li>
                <strong>LIST:</strong> Shows the size of a particular message,
                or all the messages.
              </li>
              <li>
                <strong>RSET:</strong> Undeletes all the messages that have been
                deleted with DELE.
              </li>
              <li>
                <strong>NOOP:</strong> Does nothing.
              </li>
            </ul>
          </p>
        </section>
      </div>
    </main>
  );
}

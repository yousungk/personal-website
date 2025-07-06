"use client";

import Image from "next/image";
import Link from "next/link";

export default function ChatAppPage() {
  return (
    <main>
      <div className="bg-slate-300 p-8">
        <div className="text-3xl font-bold">Distributed Chat Application</div>
        <p className="text-lg leading-relaxed mt-3">
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
          <div className="font-bold inline-flex">Techstack: </div> C++, Apache
          Kafka, Apache Cassandra, Docker, Javascript, CSS
        </div>
      </div>
      <div className="space-y-10 text-gray-800 p-8">
        {/* Project Summary */}
        <section id="summary">
          <h2 className="text-3xl font-bold mb-4">Project Summary</h2>
          <p className="text-lg leading-relaxed">
            This is a high-performance, full-stack distributed chat application
            built for real-time messaging. It features user authentication and
            message persistence using Apache Cassandra, a distributed
            wide-column store. The application is horizontally scalable via
            Kafka and custom partitioning logic, ensuring chat messages are
            delivered with minimal latency. The backend server is written
            entirely using C++, leveraging raw TCP sockets and event-driven
            architecture to handle efficient message routing. The web server is
            multi-threaded to handle concurrent client connections, and handles
            WebSocket connections, HTTP requests, and user authentication. It is
            built with C++, vanilla JavaScript, and CSS.
          </p>
        </section>

        {/* Screenshots */}
        <section id="screenshots">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <div className="sm:grid-cols-2 gap-4 w-full">
            <Image
              src="/chat-app-screenshot.png"
              alt="Chat Application Screenshot"
              width={800} // Set the desired width
              height={600}
              className="rounded-lg border"
            />
          </div>
        </section>

        {/* System Design */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
          <Image
            src="/system-architecture.png"
            alt="System Architecture"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <div>
            <div className="text-2xl pb-3">Key Points:</div>
            <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
              <li>
                Backend server creates Kafka producer and consumer clients to
                send and receive messages. Based on connected user IDs, backend
                serve dynamically subscribes/unsubscribes to the appropriate
                Kafka topic partition.
              </li>
              <li>
                Backend uses event-driven architecture with select() to handle
                concurrent frontend connections and incoming messages. Separate
                thread is used to handle Kafka message delivery and data writes
                to Cassandra.
              </li>
              <li>
                Frontend uses multi-threading to handle multiple client
                connections. TCP pool is used to handle backend connections.
              </li>
            </ul>
          </div>
        </section>

        {/* How to Run */}
        <section id="run">
          <h2 className="text-3xl font-bold mb-4">How to Run</h2>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-2">
            <li>
              Install dependencies: Apache Kafka, Apache Cassandra, C++ build
              tools
            </li>
            <li>
              Set up Kafka cluster: set Kafka topic, number of partitions,
              replication factor, and port
              <div className="bg-slate-300 p-2">
                bin/kafka-topics.sh --create \ --topic chat_messages \
                --partitions 3 \ --replication-factor 3 \ --bootstrap-server
                localhost:9092
              </div>
            </li>
            <li>
              For each Kafka broker, format storage directory
              <div className="bg-slate-300 p-2">
                bin/kafka-storage.sh format -t $(bin/kafka-storage.sh
                random-uuid) -c config/server-1.properties
              </div>
            </li>
            <li>
              Start each Kafka broker instance
              <div className="bg-slate-300 p-2">
                bin/kafka-server-start.sh config/server-1.properties
              </div>
            </li>
            <li>
              Install Docker, pull Cassandra Docker image, and run Cassandra
              using a specific port
              <div className="bg-slate-300 p-2">
                docker run --name my-cassandra -p 9042:9042 -d cassandra:latest
              </div>
            </li>
            <li>
              Set up CassandraDB keyspace and tables using built-int cqlsh
              client
            </li>
            <li>
              Compile the frontend and backend C++ servers using Makefiles
              <div className="bg-slate-300 p-2">Ex. make all</div>
            </li>
            <li>
              Run backend server, providing IP, port, and server ID
              <div className="bg-slate-300 p-2">
                ./backendserver -v [IP:port] [serverID]
              </div>
            </li>
            <li>
              Run frontend server, providing backend IP and port, frontend
              server IP and port, and server ID
              <div className="bg-slate-300 p-2">
                ./frontend_server_real [backend IP:port] [frontend IP:accept
                client port:connect to backend port] [frontend-server-ID]
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

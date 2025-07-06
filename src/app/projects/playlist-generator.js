"use client";

import Image from "next/image";
import Link from "next/link";

export default function PlaylistGeneratorPage() {
  return (
    <main>
      <div className="bg-slate-300 p-8">
        <div className="text-3xl font-bold">
          THEMEDIA: Multimedia Playlist Generator
        </div>
        <p className="text-lg leading-relaxed mt-3">
          View my code on{" "}
          <a
            href="https://github.com/Soohyun-CHOI/multimedia-recommender"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold inline-flex"
          >
            GitHub
          </a>
        </p>
        <div className="text-lg leading-relaxed">
          <div className="font-bold inline-flex">Techstack: </div> Python,
          React.js, Node.js, MySQL, AWS
        </div>
      </div>
      <div className="space-y-10 text-gray-800 p-8">
        {/* Project Summary */}
        <section id="summary">
          <h2 className="text-3xl font-bold mb-4">Project Summary</h2>
          <p className="text-lg leading-relaxed mb-4">
            THEMEDIA is a multi-media playlist generator. Unlike traditional
            playlist generators that focus on a single type of media, this
            platform recommends a collection of different media consisting of
            games, music, movies, TV shows, and books. Suggested media are
            tailored to user-selected keywords or &quot;moods.&quot; For
            example, users can select moods like &quot;cheerful&quot; and
            &quot;summer,&quot; and our generator will curate a selection of
            media, such as upbeat music and movies filmed on a sunny day, that
            reflect the chosen moods. A
          </p>
          <p className="text-lg leading-relaxed">
            The main technical focus of the project was designing the database
            schemas and SQL queries to generate the set of media with minimal
            latency. This involved using database techniques such as indexes and
            views.
          </p>
        </section>

        {/* System Design */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">Database & Query Design</h2>
          <p className="text-lg leading-relaxed mb-4">
            The main focus of this project is to develop design the database and
            the SQL queries used to generate the playlist. The queries were
            called in the backend REST APIs, where the data was hosted in AWS.
          </p>
          <Image
            src="/themedia-er-diagram.png"
            alt="THEMEDIA ER Diagram"
            width={800}
            height={600}
            className="rounded-lg border"
          />
          <p>
            <em>ER diagram of datasets</em>
          </p>
          <p className="text-lg leading-relaxed mb-4 mt-4">
            To enable fast and scalable media recommendations, I applied several
            SQL optimization strategies:
          </p>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-3">
            <li>
              <strong>Preprocessing and Caching:</strong>
              <div className="">
                Each dataset was preprocessed to assign mood relevance scores
                based on metadata such as lyrics, plot summaries, and
                descriptions. The scores were then stored in a centralized
                MediaMoods table. This preprocessing step offloads heavy
                computation from runtime queries.
              </div>
            </li>
            <li>
              <strong>Indexed Temporary Tables:</strong>
              <div className="">
                At query time, media entries are dynamically ranked by the
                weighted sum of selected mood scores and stored in an indexed
                temporary table. This allows for efficient filtering and
                retrieval during recommendation generation.
              </div>
            </li>
            <li>
              <strong>Efficient Ranking and Sampling: </strong>
              <div className="">
                I use SQL window functions (1) to assign a ranking per media
                type (ROW_NUMBER() OVER (PARTITION BY media_type ORDER BY
                mood_sum DESC)) and (2) to randomly sample from the top results
                (ORDER BY RAND()), enabling balanced diversity and relevance.
              </div>
            </li>
            <li>
              <strong>Staged Recommendation Strategy: </strong>
              <div className="">
                Recommendations are drawn randomly from the top 50 matching
                media per type to prioritize highly relevant content. Once
                exhausted, suggestions progress to ranks 51 to 100, and so on,
                enabling progressive fallback without reranking.
              </div>
            </li>
          </ol>
        </section>

        {/* System Design */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">Datasets</h2>
          <p className="text-lg leading-relaxed">
            The application uses public datasets from Kaggle.
          </p>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-3">
            <li>
              <strong>Movies Dataset:</strong>
              <div className="">45,466 rows</div>
              <div className="">
                Data on movies released on or before July 2017. Attributes
                include but are not limited to movie title, release date,
                overview, and cast.
              </div>
              <div>
                https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset?select=movies_metadata.csv
              </div>
            </li>
            <li>
              <strong>TV Shows:</strong>
              <div className="">48,700 rows</div>
              <div className="">
                List of TV shows and web series scraped from IMDB. Attributes
                include series title, release year, synopsis, runtime, rating,
                genre, and cast.
              </div>
              <div>
                https://www.kaggle.com/datasets/muralidharbhusal/50000-imdb-tv-and-web-series
              </div>
            </li>
            <li>
              <strong>Music:</strong>
              <div className="">~5 million rows</div>
              <div className="">
                List of songs with lyrics scraped from Genius. Key attributes
                include tags and lyrics.
              </div>
              <div>
                https://www.kaggle.com/datasets/carlosgdcj/genius-song-lyrics-with-language-information
              </div>
            </li>
            <li>
              <strong>Book:</strong>
              <div className="">~212,000 rows</div>
              <div className="">
                Dataset of books sold on Amazon from 1996 to 2014. Key
                attributes include description and categories.
              </div>
              <div>
                https://www.kaggle.com/datasets/mohamedbakhet/amazon-books-reviews?select=books_data.csv
              </div>
            </li>
            <li>
              <strong>Games:</strong>
              <div className="">85,000 rows</div>
              <div className="">
                Parsed data containing information on video games from Steam.
                Key attributes for categorization analysis are “about the game,”
                reviews, notes, categories, genres, and tags.
              </div>
              <div>
                https://www.kaggle.com/datasets/fronkongames/steam-games-dataset
              </div>
            </li>
          </ol>
        </section>

        {/* How to Run */}
        <section id="instructions">
          <h2 class="text-3xl font-bold mb-4">
            Project Compilation and Execution
          </h2>
          <p class="text-lg leading-relaxed pb-3">
            To run the project, you need to run both the client and the server:
          </p>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-3">
            <li>
              <strong>Client Setup</strong>
              <div className="bg-slate-300 p-2">cd client</div>
              <div className="bg-slate-300 p-2">npm install</div>
              <div className="bg-slate-300 p-2">npm start</div>
            </li>
            <li>
              <strong>Server Setup</strong>
              <div className="bg-slate-300 p-2">cd server</div>
              <div className="bg-slate-300 p-2">npm install</div>
              <div className="bg-slate-300 p-2">npm start</div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

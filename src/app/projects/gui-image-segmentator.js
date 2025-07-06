"use client";

import Image from "next/image";
import Link from "next/link";

export default function GuiImageSegmentatorPage() {
  return (
    <main>
      <div className="bg-slate-300 p-8">
        <div className="text-3xl font-bold">
          Warholizer: Pop Art Image Converter
        </div>
        <p className="text-lg leading-relaxed mt-3">
          View my code on{" "}
          <a
            href="https://github.com/yousungk/Warholizer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold inline-flex"
          >
            GitHub
          </a>
        </p>
        <div className="text-lg leading-relaxed">
          <div className="font-bold inline-flex">Techstack: </div> Java, Java
          Swing <div className="font-bold inline-flex">Strategy: </div>{" "}
          Union-Find Algorithm
        </div>
      </div>
      <div className="space-y-10 text-gray-800 p-8">
        {/* Project Summary */}
        <section id="summary">
          <h2 className="text-3xl font-bold mb-4">Project Summary</h2>
          <p className="text-lg leading-relaxed">
            Warholizer is a GUI-based application that converts black and white
            images into Andy Warhol&apos;s inspired images. Users can upload
            images onto the app and view the converted image directly on the
            application. The main motivation of this project was to learn more
            about the underlying mechanism behind image processing algorithms.
          </p>
        </section>

        {/* Screenshots */}
        <section id="screenshots">
          <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
          <div className="sm:grid-cols-2 gap-4 w-full">
            <Image
              src="/warholizer-before.png"
              alt="Before Warholizer"
              width={500}
              height={500}
              className="rounded-lg border"
            />
            <p className="mt-3 mb-3">
              <em>Before Warholizer</em>
            </p>
            <Image
              src="/warholizer-after.png"
              alt="After Warholizer"
              width={500}
              height={500}
              className="rounded-lg border"
            />
            <p className="mt-3 mb-3">
              <em>After Warholizer</em>
            </p>
          </div>
        </section>

        {/* Algorithm */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">Union-Find Algorithm</h2>
          <p className="text-lg leading-relaxed">
            Main algorithm used is union-find. After grayscaling the uploaded
            image, I iterate through image pixels, where for each pixel, I look
            at its neighboring pixel and UNION if the pixel and the neighboring
            pixel are of the same color. After creating clusters of identical,
            contiguous pixels, I assign a unique ID to each cluster and also
            save the size of each cluster. I use the cluster size as the KEY to
            the hash table of (cluster size, Andy Warhol color) to assign a new
            color to the clusters.
          </p>
        </section>

        {/* System Design */}
        <section id="design">
          <h2 className="text-3xl font-bold mb-4">System Design</h2>
          <Image
            src="/warholizer-1.png"
            width={500}
            height={500}
            className="rounded-lg border mb-5"
          />
          <Image
            src="/warholizer-2.png"
            width={500}
            height={500}
            className="rounded-lg border mb-5"
          />
          <Image
            src="/warholizer-3.png"
            width={500}
            height={500}
            className="rounded-lg border"
          />
        </section>

        {/* How to Run */}
        <section id="instructions">
          <h2 class="text-3xl font-bold mb-4">
            Project Compilation and Execution
          </h2>
          <ol className="list-decimal list-inside text-lg leading-relaxed space-y-3">
            <li>Download and navigate to src folder</li>
            <li>Open the files on an IDE (ex. IntelliJ)</li>
            <li>Navigate to WarholizerApp and start program on the IDE</li>
            <li>
              Click on upload image button to load an image (should be a black
              and white image for optimal result). Then click on
              &quot;Warholize&quot; button to convert image
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

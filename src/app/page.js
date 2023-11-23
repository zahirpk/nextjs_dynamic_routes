import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen justify-center py-5">
      <div>
        <h1 className="text-3xl text-red-700">Table of content</h1>
        <ul>
          <li>Dynamic Routes</li>
          <div className="italic text-gray-400 text-sm py-5">
            <p>Create a folder with openning and closing square ([ ]) brackets,like [studentinfo](in my case)</p>
            <p>when you type localhost:3000/ something,in your local machine,show your typed url address</p>
          </div>
          <li>Catch all Routes</li>
          <div className="italic text-gray-400 text-sm py-5">
            <p>Create a folder with openning, closing square brackets and three ... ([... ]) ,like [...car](in my case)</p>
            <p>when you type localhost:3000/something/something/ something ,in your local machine,show your typed url address</p>
          </div>
        </ul>
      </div>
    </main>
  );
}

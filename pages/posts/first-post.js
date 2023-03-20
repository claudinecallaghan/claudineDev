import Link from "next/link";

export default function FirstPost() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </div>
  );
}

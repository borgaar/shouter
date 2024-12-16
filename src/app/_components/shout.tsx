export default function Shout({
  id,
  user: { name, image },
  content,
  likes,
  createdAt,
}: {
  id: string;
  user: { name: string; image: string };
  content: string;
  likes: number;
  createdAt: Date;
}) {
  return (
    <div className="flex w-full flex-row items-center justify-start rounded-lg border-2 border-black bg-secondary p-4 text-black">
      <img className="h-16 rounded-full" src={image} alt={name} />
      <div className="flex flex-col px-4">
        <p className="text-slate-600">
          {createdAt.toLocaleDateString()} {createdAt.toLocaleTimeString()}
        </p>
        <div>{content}</div>
      </div>
    </div>
  );
}

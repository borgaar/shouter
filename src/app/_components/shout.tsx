export default function Shout({
  user: { name, image },
  content,
  likes,
  createdAt,
}: {
  user: { name: string; image: string };
  content: string;
  likes: number;
  createdAt: Date;
}) {
  return (
    <div className="items-center justify-start">
      <img className="rounded-full" src={image} alt={name} />
    </div>
  );
}

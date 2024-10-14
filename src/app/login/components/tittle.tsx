export default function Tittle({ text1, text2 }: { text1: string; text2: string }) {
  return (
    <h1 className="w-[331px] text-[40px] font-bold leading-[56px]">
      {text1} <br />
      {text2}
    </h1>
  );
}

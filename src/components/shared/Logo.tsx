import Link from "next/link";
import { TypographyH4 } from "../ui/typography";

export default function Logo() {
  return (
    <TypographyH4 className="w-[8ch] text-[20px] font-bold">
      <Link href="/" className="text-primary">CiphraGuard</Link>
    </TypographyH4>
  );
}

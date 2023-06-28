import Link from "next/link";

export const data = [
  {
    id: crypto.randomUUID(),
    component: (
      <>
        <Link href="#">Button</Link>
      </>
    ),
  },
  {
    id: crypto.randomUUID(),
    component: (
      <>
        <Link href="#">Form</Link>
      </>
    ),
  },
  {
    id: crypto.randomUUID(),
    component: (
      <>
        <Link href="#">Input</Link>
      </>
    ),
  },
];

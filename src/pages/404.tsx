import * as React from "react";
import { useRouter } from "next/router";

export default function FourOhFour() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
  }, [router]);

  return null;
}

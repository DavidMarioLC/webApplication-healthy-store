import { useEffect } from "react";
import { useRouter } from "next/router";
type Props = {};

const Page404 = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
};

export default Page404;

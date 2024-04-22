import { useRouter } from "next/router";
import { useEffect } from "react";

const PlaceholderPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default PlaceholderPage;

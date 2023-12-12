/** @format */

import { useQuery } from "@tanstack/react-query";

const getHeaderData = (headerNumber) => {
  const {
    data: header = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["header1"],
    enabled: !!headerNumber,
    queryFn: async () => {
      const res = await fetch(
        `https://dynamic-landing-page-server.vercel.app/header_compo?header=${headerNumber}`
      );

      return res.json();
    },
  });

  return { header, isLoading, refetch };
};

export default getHeaderData;

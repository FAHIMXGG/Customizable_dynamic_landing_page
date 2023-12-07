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
        `http://localhost:3000/header_compo?header=${headerNumber}`
      );

      return res.json();
    },
  });

  return { header, isLoading, refetch };
};

export default getHeaderData;

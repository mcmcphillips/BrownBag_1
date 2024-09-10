import React, { useMemo } from "react";
import List from "./List";

// val is an integer
export default function CardList({ val }) {
  const memoizedList = useMemo(() => <List items={val} />, [val]);
  return <>{memoizedList}</>;
}

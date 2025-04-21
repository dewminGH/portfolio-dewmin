import dynamic from "next/dynamic";

const LazyTechStack = dynamic(() => import("./index"), { ssr: false });

export default LazyTechStack;

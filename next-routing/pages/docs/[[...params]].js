import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();
  //   const params = router.query.params || [];
  const { params = [] } = router.query;
  if (params.length === 3) {
    return (
      <p>
        docs of {params[0]} explaining {params[1]} using {params[2]}
      </p>
    );
  } else if (params.length === 2) {
    return (
      <p>
        docs of {params[0]} explaining {params[1]}
      </p>
    );
  } else if (params.length === 1) {
    return <p>docs of {params[0]}</p>;
  } else {
    return <p>Docs home page</p>;
  }
}

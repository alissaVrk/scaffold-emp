import { useAllPathsQuery } from "../data/allPathsQueries";

export function AllPaths() {
  const { paths, error } = useAllPathsQuery();

  if (error) {
    return <div className="text-error-red p-4">Error loading paths</div>;
  }
  if (!paths) {
    return (
      <div className="p-4" data-testid="loading">
        loading...
      </div>
    );
  }
  return (
    <div className="p-4">
      <h3>All Paths</h3>
      {paths.map((path) => (
        <div key={path.id}>{path.name}</div>
      ))}
    </div>
  );
}

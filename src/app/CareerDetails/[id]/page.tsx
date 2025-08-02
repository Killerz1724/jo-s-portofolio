export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;

  return <div>page {id}</div>;
}

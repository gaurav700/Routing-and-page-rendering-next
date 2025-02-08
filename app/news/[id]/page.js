export default function IdPage({ params }) {
  const slug = params.id;
  return (
    <>
    <div>Link</div>
      <li>{slug}</li>
    </>
  );
}

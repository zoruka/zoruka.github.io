export default function HomePage() {
  return (
    <>
      <h1>About</h1>

      {new Array(10).fill(0).map((_, i) => (
        <p key={i}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          quidem autem itaque sint vitae laudantium hic quaerat quo tempore.
          Perferendis debitis animi voluptatem aperiam cum temporibus nemo
          blanditiis iure exercitationem?
        </p>
      ))}
    </>
  );
}

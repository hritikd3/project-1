const Intro = () => {
  return (
    <video
      controls
      style={{
        width: '100%',
        height: '600px',
        backgroundColor: '#191919',
      }}
    >
      <source src='./videos/intro.mp4' type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};
export default Intro;

function Blog({ time, preview }) {
  return (
    <p>
      Rendered at {time}, preview mode: {preview ? "on" : "off"}
    </p>
  );
}

export async function getStaticProps(context) {
  const time = new Date().getTime();
  return {
    props: {
      time,
      preview: context.preview || false,
    },
  };
}

export default Blog;

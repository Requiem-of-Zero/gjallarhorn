import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}
export default function About({ products }) {
  return (
    <div>
      <div className="w-screen min-h-screen">
        <Header {...products} />
        <div className="max-w-[1000px] m0a text-white">
          <h1 className="text-3xl pt-4 font-semibold">ABOUT US</h1>
          <h2 className="py-4">
            gjallahorn{" "}
            <span className="text-light-grey">{`[gahlahorn, ghalahhorn]`}</span>
          </h2>
          <p className="text-light-grey pb-4">noun</p>
          <article className="text-light-grey">
            In Norse mythology, Gjallarhorn &#40;Old Norse&#58;
            &#91;&#39;ɡjɑl&#58;ɑr&#44;horn&#93;&#59; &quot;hollering
            horn&quot;&#91;1&#93; or &quot;the loud sounding
            horn&quot;&#91;2&#93;&#41; is a horn associated with the god
            Heimdallr and the wise being Mímir. The sound of Heimdallr&#39;s
            horn will herald the beginning of Ragnarök, the sound of which will
            be heard in all corners of the world. Gjallarhorn is attested in the
            Poetic Edda, compiled in the 13th century from earlier traditional
            material, and the Prose Edda, written in the 13th century by Snorri
            Sturluson.
          </article>
        </div>
      </div>
    </div>
  );
}

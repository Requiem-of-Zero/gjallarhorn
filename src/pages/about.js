import { useCallback, useEffect } from "react";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";
import Router from "next/router";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}
export default function About({ products }) {
  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );
    
  useEffect(() => {
    Router.events.on('routeChangeComplete', resetWindowScrollPosition);
  
    return() => {
      Router.events.off('routeChangeComplete', resetWindowScrollPosition)
    }
  }, [])
  
  return (
    <>
      <div className="w-screen min-h-screen">
        <Header {...products} />
        <div className="max-w-[1000px] m0a text-white pb-20">
          <section>
            <h1 className="lgl:text-3xl pt-4 font-semibold">ABOUT US</h1>
            <h2 className="py-4">
              gjallahorn{" "}
              <span className="text-[#7d807d]">{`[gahlahorn, ghalahhorn]`}</span>
            </h2>
            <p className="text-[#7d807d] pb-4">noun</p>
            <article className="text-[#7d807d]">
              In Norse mythology&#44; Gjallarhorn &#40;Old Norse&#58;
              &#91;&#39;ɡjɑl&#58;ɑr&#44;horn&#93;&#59; &quot;hollering
              horn&quot;&#91;1&#93; or &quot;the loud sounding
              horn&quot;&#91;2&#93;&#41; is a horn associated with the god
              Heimdallr and the wise being Mímir&#46; The sound of
              Heimdallr&#39;s horn will herald the beginning of Ragnarök&#44;
              the sound of which will be heard in all corners of the world&#46;
              Gjallarhorn is attested in the Poetic Edda&#44; compiled in the
              13th century from earlier traditional material&#44; and the Prose
              Edda&#44; written in the 13th century by Snorri Sturluson&#46;
            </article>
          </section>
          <section>
            <h1 className="lgl:text-2xl py-3">Our Mission Statement</h1>
            <article>
              At Gjallahorn&#44; we are dedicated to providing the freshest&#44;
              highest-quality seafood to our customers through our modern&#44;
              digital approach to business&#46; Our mission is to make it easy
              and convenient for seafood lovers to enjoy sustainably sourced and
              expertly prepared seafood&#44; whether they are at home&#44; at
              work&#44; or on the go&#46; We strive to use the latest technology
              and innovative techniques to streamline our operations&#44;
              minimize waste&#44; and reduce our environmental impact&#46; Our
              goal is to become the go-to seafood provider for consumers who
              demand the best in taste&#44; quality&#44; and convenience&#44;
              while upholding the highest standards of ethics&#44;
              transparency&#44; and customer service&#46;
            </article>
          </section>
          <section>
            <h1 className="lgl:text-2xl py-3 font-semibold">Our Story</h1>
            <article className="text-[#7d807d]">
              From our founder&#58;
              <br />
              <br />
              <p>
                In the year 1980&#44; a young Chinese immigrant arrived in the
                United States with little more than a dream of starting his own
                business&#46; He had grown up in a small fishing village in
                China&#44; where he learned the art of catching and preparing
                fresh seafood from his father and grandfather&#46; Despite the
                many challenges he faced as a newcomer to a foreign land&#44; he
                was determined to carry on this family tradition and share his
                love of seafood with the American people&#46;
              </p>
              <br />
              <p>
                As he settled into his new life in the U&#46;S&#46;&#44; he
                quickly realized that the seafood industry here was vastly
                different from what he was used to back in China&#46; The market
                was highly competitive and dominated by large corporations&#44;
                and there was little emphasis on sustainability or quality&#46;
                Undaunted&#44; he set out to carve his own niche in this crowded
                field by offering something truly unique: the freshest&#44;
                highest-quality seafood&#44; sourced directly from local
                fishermen and prepared using traditional Chinese techniques&#46;
              </p>
              <br />
              <p>
                He started small&#44; selling his catches at local farmers'
                markets and building up a loyal customer base through word of
                mouth&#46; As his reputation grew&#44; he began to expand his
                operations&#44; opening his own seafood shop and later launching
                a website to reach customers across the country&#46; Along the
                way&#44; he faced numerous setbacks and challenges&#44; from
                supply chain issues to the constant threat of competition from
                larger rivals&#46;
              </p>
              <br />
              <p>
                But through it all&#44; he remained committed to his values of
                sustainability&#44; quality&#44; and authenticity&#46; He
                developed close relationships with local fishermen&#44; learning
                about their fishing methods and working with them to ensure that
                his customers always had access to the freshest&#44; most
                sustainably caught seafood&#46; He also invested heavily in
                technology&#44; using the latest digital tools and data
                analytics to optimize his operations and streamline his supply
                chain&#46;
              </p>
              <br />
              <p>
                Over time&#44; his hard work and perseverance paid off&#46; His
                business grew steadily&#44; and he became known as one of the
                most respected and innovative seafood providers in the
                country&#46; Along the way&#44; he imparted many valuable
                lessons to his employees and customers alike&#44; teaching them
                the importance of hard work&#44; honesty&#44; and respect for
                the environment&#46;
              </p>
              <br />
              <p>
                Today&#44; his company continues to thrive&#44; with a loyal
                customer base and a reputation for excellence that extends far
                beyond its origins as a small Chinese immigrant business&#46;
                And while he has achieved great success over the years&#44; he
                never forgets the lessons he learned as a young fisherman in
                China&#44; and the values that have guided him on his remarkable
                journey&#46;
              </p>
              <p className="pt-4">- Chris</p>
              <br />
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

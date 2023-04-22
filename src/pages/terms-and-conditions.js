import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";
import { Router } from "next/router";
import { useCallback, useEffect } from "react";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}

export default function Terms({ products }) {
  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );

  useEffect(() => {
    Router.events.on("routeChangeComplete", resetWindowScrollPosition);

    return () => {
      Router.events.off("routeChangeComplete", resetWindowScrollPosition);
    };
  }, []);

  return (
    <div>
      <div className="w-screen min-h-screen">
        <Header {...products} />
        <div className="max-w-[1000px] m0a text-white pb-20">
          <section>
            <h1 className="text-3xl font-semibold pt-4">TERMS OF USE</h1>
            <h2 className="text-lg py-4">AGGREEMENT TO TERMS</h2>
            <p className="text-[#7d807d]">
              Welcome to our website. By accessing and using this website, you
              agree to be bound by these terms and conditions. If you do not
              agree to these terms and conditions, you should not use this
              website.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">ACCEPTABLE USE</h2>
            <p className="text-[#7d807d]">
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of, or restrict or
              inhibit the use and enjoyment of, this website by any third party.
              Prohibited behavior includes harassing or causing distress or
              inconvenience to any person, transmitting obscene or offensive
              content, or disrupting the normal flow of dialogue within this
              website.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">INTELLECTUAL PROPERTY</h2>
            <p className="text-[#7d807d]">
              All content on this website, including but not limited to text,
              graphics, logos, images, and software, is the property of our
              company and is protected by copyright and other intellectual
              property laws. You may not use, reproduce, modify, or distribute
              any content from this website without our prior written consent.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">DISCLAIMER OF WARRANTIES</h2>
            <p className="text-[#7d807d]">
              This website is provided on an "as is" basis and without any
              warranties, either express or implied. We do not warrant that this
              website will be uninterrupted or error-free, or that the content
              provided on this website will be accurate, complete, or current.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">LIMITATION OF LIABILITY</h2>
            <p className="text-[#7d807d]">
              We shall not be liable for any damages arising out of or in
              connection with your use of this website, including but not
              limited to direct, indirect, incidental, consequential, or
              punitive damages. This limitation of liability applies even if we
              have been advised of the possibility of such damages.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">INDEMNIFICATION</h2>
            <p className="text-[#7d807d]">
              You agree to indemnify and hold us harmless from any claims,
              damages, or expenses arising out of your use of this website, or
              any violation of these terms and conditions.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">TERMINATION</h2>
            <p className="text-[#7d807d]">
              We reserve the right to terminate your access to this website at
              any time, without notice, for any reason.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">GOVERNING LAW</h2>
            <p className="text-[#7d807d]">
              These terms and conditions shall be governed by and construed in
              accordance with the laws of the state or country in which our
              company is located.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">CHANGES TO TERMS AND CONDITIONS</h2>
            <p className="text-[#7d807d]">
              We reserve the right to change these terms and conditions at any
              time, without notice. Your continued use of this website after any
              such changes constitutes your acceptance of the new terms and
              conditions.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">ENTIRE AGREEMENT</h2>
            <p className="text-[#7d807d]">
              These terms and conditions constitute the entire agreement between
              you and our company with respect to your use of this website. Any
              other agreements, representations, or warranties, whether oral or
              written, are hereby superseded and of no force or effect.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

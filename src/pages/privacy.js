import getEntryById from "../contentful/client";
import Header from "../components/Header/Header";
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

export default function Privacy({ products }) {
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
            <h1 className="text-3xl font-semibold py-4">PRIVACY POLICY</h1>
            <p className="text-[#7d807d]">
              Thank you for choosing to be part of our community at Gjallahorn.
              inc, doing business as Gjallahorn ("Gjallahorn", "we", "us",
              "our"). We are committed to protecting your personal information
              and your right to privacy. If you have any questions or concerns
              about this privacy notice, or our practices with regards to your
              personal information, please contact us at{" "}
              <a
                href="mailto:gjallahorn-imports@gmail.com"
                className="cursor-pointer text-light-grey"
              >
                {" "}
                gjallahorn-imports@gmail.com
              </a>
              . When you visit our website{" "}
              <a href="https://gjallahorn.vercel.app">
                https://gjallahorn.vercel.app
              </a>{" "}
              (the "Website"), and more generally, use any of our services (the
              "Services", which include the Website), we appreciate that you are
              trusting us with your personal information. We take your privacy
              very seriously. In this privacy notice, we seek to explain to you
              in the clearest way possible what information we collect, how we
              use it and what rights you have in relation to it. We hope you
              take some time to read through it carefully, as it is important.
              If there are any terms in this privacy notice that you do not
              agree with, please discontinue use of our Services immediately.
              This privacy notice applies to all information collected through
              our Services (which, as described above, includes our Website), as
              well as, any related services, sales, marketing or events.
            </p>
            <h2 className="text-lg py-4">INFORMATION WE COLLECT</h2>
            <p className="text-[#7d807d]">
              We may collect personal information from you when you use our
              website, place an order, or contact us. This information may
              include your name, email address, mailing address, phone number,
              and payment information.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">HOW WE USE YOUR INFORMATION</h2>
            <p className="text-[#7d807d]">
              We may use your personal information to process your orders,
              respond to your inquiries, and provide you with information about
              our products and services. We may also use your information for
              marketing purposes, such as sending you promotional emails or
              newsletters. You may opt-out of these communications at any time.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">HOW WE PROTECT YOUR INFORMATION</h2>
            <p className="text-[#7d807d]">
              We take appropriate measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
              We use industry-standard security measures, such as encryption and
              firewalls, to protect your data. We also limit access to your
              personal information to employees who need to know this
              information in order to perform their duties.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">COOKIES</h2>
            <p className="text-[#7d807d]">
              We may use cookies and similar technologies to collect information
              about your browsing behavior and preferences. Cookies are small
              files that are stored on your device when you visit a website. You
              may disable cookies in your browser settings, but this may limit
              your ability to use certain features of our website.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">THIRD-PARTY LINKS</h2>
            <p className="text-[#7d807d]">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              websites. We encourage you to read the privacy policies of these
              websites before providing any personal information.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">CHILDREN'S PRIVACY</h2>
            <p className="text-[#7d807d]">
              Our website is not intended for children under the age of 18. We
              do not knowingly collect personal information from children under
              the age of 18.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">CHANGES TO THIS PRIVACY POLICY</h2>
            <p className="text-[#7d807d]">
              We reserve the right to modify this privacy policy at any time.
              Any changes will be posted on this page, and the date of the last
              revision will be updated.
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">CONTACT US</h2>
            <p className="text-[#7d807d]">
              If you have any questions or concerns about this privacy policy,
              please contact us at{" "}
              <a
                href="mailto:gjallahorn-imports@gmail.com"
                className="cursor-pointer text-light-grey"
              >
                {" "}
                gjallahorn-imports@gmail.com
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-lg py-4">CONSENT</h2>
            <p className="text-[#7d807d]">
              By using our website, you consent to the collection, use, and
              protection of your personal information as described in this
              privacy policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

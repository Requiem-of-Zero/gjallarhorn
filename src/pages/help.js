import { useCallback, useEffect } from "react";
import Header from "../components/Header/Header";
import getEntryById from "../contentful/client";
import { Router } from "next/router";

export async function getServerSideProps() {
  const products = await getEntryById("2wkr5VcBa9PYCsBQqvvvbl");

  return {
    props: {
      products,
    },
  };
}
export default function Help({ products }) {
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
            <h1 className="lgl:text-3xl pt-4 font-semibold">HELP</h1>
            <h2 className="py-4 text-xl">Customer Support</h2>
            <article className="text-[#7d807d] break-word">
              We pride ourselves on providing responsive and accurate customer
              support. You can reach our customer support team expect at
              <a
                href="mailto:gjallahorn-imports@gmail.com"
                className="cursor-pointer text-light-grey"
              >
                {" "}
                gjallahorn-imports@gmail.com
              </a>
              , and you can expect a response within 24 hours &#40;sometimes
              less&#41; for requests made during business hours, Monday -
              Friday, 9:00 AM - 5:00 PM, Pacific Standard Time &#40;except
              holidays&#41;. Before reaching out to us, see if your question or
              request is addressed below. Please note that we will respond to
              inquiries made outside of business hours the next business day.
              When making requests, include all relevant information including
              the order number.
            </article>
          </section>
          <section>
            <article className="break-word">
              <h1 className="text-xl py-4">Shipping</h1>
              <p className="text-[#7d807d]">
                For the following shipping rates, Gjallahorn will choose the
                shipping carrier and shipping method at its own discretion.
                Expect average shipment times to range from 1-2 days for West
                Coast addresses to 5-6 days for East Coast addresses.
              </p>
              <h2 className="text-xl py-3">$125+ Free Shipping</h2>
              <p className="text-[#7d807d]">
                Free shipping is available to orders shipped within the
                contiguous US. Unless otherwise noted, the value of the order
                must exceed $125 after discounts are applied. Fundraising gifts
                do not count towards the total order value.
              </p>
              <h2 className="text-xl py-3">$4.99 Small Package Shipping</h2>
              <p className="text-[#7d807d]">
                We offer a discounted rate for shipping small items like a jar
                of shrimp or a jar of clams. To qualify for the discounted rate,
                the size and weight of the order must fit under certain
                conditions. The discounted rate will appear on the checkout
                screen if your order qualifies.
              </p>
              <h2 className="text-xl py-3">$9.99 Flat Rate Shipping</h2>
              <p className="text-[#7d807d]">
                Flat rate shipping is available for orders of all sizes. The
                shipping method will be determined by us at our discretion. If
                there is a need for faster service, please contact us at{" "}
                <a
                  href="mailto:gjallahorn-imports@gmail.com"
                  className="cursor-pointer text-light-grey"
                >
                  {" "}
                  gjallahorn-imports@gmail.com
                </a>{" "}
                after placing your order.
              </p>
              <h2 className="text-xl py-3">International Shipping Rates</h2>
              <p className="text-[#7d807d]">
                Gjallahorn ships internationally for most countries. To
                determine if international shipping is available to your
                country, follow the standard checkout procedure. Discounted
                rates from shipping carriers will be displayed for countries
                that we ship to.
              </p>
            </article>
            <article>
              <h2 className="text-xl py-3">FAQ</h2>
              <h3 className="text-xl">Products</h3>
              <h3 className="pb-3 pt-2 text-xl">
                Do you carry a specific product?
              </h3>
              <p className="text-[#7d807d]">
                Our website is designed to show all the products that we carry.
                It also indicates the current stock status so you can be sure
                that what you order will be available to ship.
              </p>
              <h3 className="py-3 text-xl">
                I want to purchase something out of stock. When will it come
                back in stock?
              </h3>
              <p className="text-[#7d807d]">
                We are constantly trying to maintain stock for all the items
                listed on our website, but due to the nature of the seasonal
                nature of the market, lead times for inventory are hard to
                determine. We consistently update the site every work day, so
                keep checking the site to see when the product you are looking
                for is back in stock.
              </p>
            </article>
            <article>
              <h2 className="pt-3 pb-2 text-xl">Ordering</h2>
              <h3 className="pb-3 text-xl">
                I received an error during checkout, did my order go through?
              </h3>
              <p className="text-[#7d807d]">
                All confirmed orders will receive a email confirmation stating
                that order has been placed. Make sure you check your spam folder
                if this is the first time ordering from us. If you have not
                received an email confirmation, then your order did not go
                through.
              </p>
            </article>
            <article>
              <h2 className="text-xl pt-4 pb-2">Shipping</h2>
              <h3 className="text-lg">What carriers do you use?</h3>
              <p className="text-[#7d807d] py-3">
                We currently use USPS, UPS, and FedEx.
              </p>
              <h3 className="text-lg">
                How do I change the shipping address after I placed an order?
              </h3>
              <p className="text-[#7d807d] py-3">
                As long as your order has not been packed yet, you can change
                the shipping address by sending us an email at{" "}
                <a
                  href="mailto:gjallahorn-imports@gmail.com"
                  className="text-light-grey"
                >
                  gjallahorn-imports@gmail.com
                </a>
                . If the order has already been picked up by the shipping
                carrier, we will make a best effort in rerouting the order, but
                we can't make any guarentees. Any re-shipments due to incorrect
                shipping addresses will be charged actual shipping costs.
              </p>
              <h3 className="text-lg">
                I received my order but something came damaged. What do I do?
              </h3>
              <p className="text-[#7d807d] py-3">
                First, we apologize for your order's less-than-perfect arrival.
                Even though we ship all our products in live condition,
                sometimes products experience damage along their journey to
                their new home. Please inspect your order upon receipt and
                report and issues by contacting us at{" "}
                <a
                  href="mailto:gjallahorn-imports@gmail.com"
                  className="text-light-grey"
                >
                  gjallahorn-imports@gmail.com
                </a>
                .{" "}
              </p>
              <h3 className="text-lg">
                I think my order is lost or stolen. What do I do?
              </h3>
              <p className="text-[#7d807d] py-3">
                We know it doesn't feel good when your order appears lost or
                stolen, but we're trying to help solve the issue. Due to
                inconsistencies with shipping carriers, we ask that customers
                wait for at least a week after the last tracking scan before
                requesting support. Even if the tracking information indicates
                the shipment was delivered, it has been our experience that
                carriers will sometimes incorrectly mark a shipment as being
                delivered.
              </p>
              <p className="text-[#7d807d] py-3">
                If you haven't received your order after a week, please reach
                out to{" "}
                <a
                  href="mailto:gjallahorn-imports@gmail.com"
                  className="text-light-grey"
                >
                  gjallahorn-imports@gmail.com
                </a>{" "}
                and we will help solve the issue. Depending on the circumstance,
                this may include filing a claim with the carrier. Please bear
                with us when this occurs as we are trying our best to resolve
                the issue. Each order is as important as the next and we will
                make sure you are fully satisfied.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

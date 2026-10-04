import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

const CONTACT_EMAIL = "courtcreatives@outlook.com";

export const metadata: Metadata = {
  title: "Terms & Conditions | CourtCreatives",
  description:
    "Booking terms for CourtCreatives wedding content creation in Northern Ireland, covering deposits, payments, cancellations, delivery and usage of your content.",
  // Override the root layout's canonical ("/") so this page doesn't point at
  // the homepage.
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: { url: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="3 October 2026">
      <h2>About these terms</h2>
      <p>
        These terms apply to your use of this website and to any wedding
        content creation services booked with CourtCreatives, a business run by
        Courtney and based in Belfast, Northern Ireland. In these terms,
        &ldquo;I&rdquo; and &ldquo;me&rdquo; mean CourtCreatives, and
        &ldquo;you&rdquo; means the couple or person making the booking.
      </p>
      <p>
        When you book, you will also sign a booking contract. If anything in
        that contract differs from these terms, the contract takes priority.
        Nothing in these terms affects your statutory rights as a consumer.
      </p>

      <h2>Enquiries and quotes</h2>
      <p>
        Sending an enquiry does not reserve your date. Package details shown on
        this website, and any quotes I send, are a guide until they are
        confirmed in your booking contract. Packages can be tailored, and travel
        fees may apply depending on your venue locations.
      </p>

      <h2>Booking and payment</h2>
      <ul>
        <li>
          Your date is only secured once you have signed the booking contract
          and paid a <strong>20% deposit</strong>.
        </li>
        <li>
          The <strong>remaining balance is due 30 days before</strong> your
          wedding date.
        </li>
        <li>
          If the balance has not been paid by the due date, I will get in touch
          to remind you. If it remains unpaid, I may treat the booking as
          cancelled by you.
        </li>
        <li>
          Any agreed travel or accommodation costs will be set out in your
          booking contract and are payable with the balance.
        </li>
      </ul>

      <h2>Planning your day</h2>
      <p>
        Around 30 days before your wedding, we will have a phone call or online
        consultation to go through timings, locations, key people and the
        moments that matter most to you. Please let me know about any venue
        rules on filming or phone use so I can plan around them.
      </p>

      <h2>Changes and cancellations</h2>
      <p>
        <strong>If you need to change your date</strong>, let me know as soon as
        possible. If I am available on the new date, I will move your booking
        and your deposit will carry over. If I am not available, this will be
        treated as a cancellation.
      </p>
      <p>
        <strong>If you cancel</strong>, please tell me in writing by email. The
        deposit covers the cost of holding your date and turning away other
        couples, so it is non-refundable. If you cancel after the balance has
        been paid, I will refund the balance if I am able to rebook the date.
      </p>
      <p>
        <strong>If I have to cancel</strong> for a reason within my control, I
        will refund everything you have paid in full. If I am unable to attend
        because of serious illness, injury or an emergency, I will do my best to
        arrange a suitable replacement creator, with your agreement. If that is
        not possible or you would prefer not to, I will refund everything you
        have paid.
      </p>

      <h2>On the day</h2>
      <ul>
        <li>
          I shoot primarily on an iPhone with a gimbal and portable lighting.
          My style is candid and social-first, and I will use my creative
          judgement on how to capture your day.
        </li>
        <li>
          I will work alongside your photographer and videographer and follow
          any reasonable instructions from your venue or officiant.
        </li>
        <li>
          I will do my best to capture the moments you have asked for, but I
          cannot guarantee specific shots, particularly where timings change,
          lighting is poor or access is restricted.
        </li>
        <li>
          Coverage runs for the hours in your package. If you would like me to
          stay longer on the day, extra time can be added where I am available,
          at the rate agreed in your booking contract.
        </li>
        <li>
          I need to be able to work safely. I may stop working if I am treated
          in an abusive or unsafe way, and in that case no refund will be due
          for the time missed.
        </li>
      </ul>

      <h2>Delivery of your content</h2>
      <p>
        Your edited content will be delivered by a digital download link,
        usually within 24 to 48 hours of your wedding. Please download and back
        up your content as soon as you receive it. I keep a copy for 12 months
        after delivery, after which it is deleted. Unedited or raw footage is
        not included unless agreed in your booking contract.
      </p>

      <h2>Using your content</h2>
      <p>
        I keep the copyright in the content I create. You receive a personal
        licence to use, share and post your content however you like for
        personal, non-commercial purposes, including on your own social media.
        A tag to @courtcreatives_ is always appreciated but never required.
        Please don&apos;t sell your content or use it for commercial purposes
        (such as advertising for a supplier) without asking me first.
      </p>
      <p>
        With your permission, which you can give in your booking contract, I
        may share selected content in my portfolio, on this website and on my
        social media. You can withdraw that permission at any time by emailing
        me, and I will stop using new posts of your content and remove existing
        posts where I reasonably can.
      </p>
      <p>
        You are responsible for letting your guests know that content is being
        captured on the day. If a guest asks not to be filmed, I will respect
        that.
      </p>

      <h2>Liability</h2>
      <p>
        I take great care with your content and back it up, but in the unlikely
        event of equipment failure, loss or damage that is my fault, my total
        liability to you is limited to the total amount you have paid for your
        booking. I am not liable for events outside my reasonable control, such
        as severe weather, travel disruption or venue restrictions. Nothing in
        these terms limits liability for death or personal injury caused by
        negligence, or any other liability that cannot be limited by law.
      </p>

      <h2>Using this website</h2>
      <p>
        All photos, videos, graphics and text on this website belong to
        CourtCreatives or are used with permission. Please don&apos;t copy or
        reuse them without my written consent. I try to keep the information on
        this website accurate and up to date, but it may change without notice.
        How I handle your personal information is explained in my{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the law of Northern Ireland, and any
        disputes will be dealt with by the courts of Northern Ireland.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about these terms, email me at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}

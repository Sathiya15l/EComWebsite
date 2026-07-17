import React from "react";
import "../styles/disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <h1>Disclaimer</h1>

      <p>
        Welcome to <strong>MyShop</strong>. The information provided on this
        website is intended for general informational purposes only. By using
        this website, you acknowledge and agree to the terms outlined in this
        disclaimer.
      </p>

      <section>
        <h2>1. Product Information</h2>
        <p>
          We strive to provide accurate descriptions, pricing, and images for
          all our products. However, slight variations may occur due to
          traditional preparation methods, seasonal ingredients, or packaging
          updates.
        </p>
      </section>

      <section>
        <h2>2. Health Disclaimer</h2>
        <p>
          Our traditional food products are prepared using quality ingredients.
          Any nutritional or health-related information provided is for general
          awareness only and should not be considered medical advice. Please
          consult a qualified healthcare professional before consuming any
          product if you have allergies, medical conditions, or dietary
          restrictions.
        </p>
      </section>

      <section>
        <h2>3. Allergies</h2>
        <p>
          Some products may contain or be processed in facilities handling nuts,
          milk, sesame, wheat, or other allergens. Customers are advised to
          review product ingredients carefully before purchase.
        </p>
      </section>

      <section>
        <h2>4. Product Availability</h2>
        <p>
          Product availability is subject to stock. We reserve the right to
          modify, discontinue, or limit quantities of any product without prior
          notice.
        </p>
      </section>

      <section>
        <h2>5. Pricing</h2>
        <p>
          Prices displayed on this website are subject to change without prior
          notice. While we make every effort to ensure pricing accuracy,
          inadvertent errors may occur.
        </p>
      </section>

      <section>
        <h2>6. Images</h2>
        <p>
          Product images are for illustration purposes only. Actual products may
          vary slightly in appearance due to handmade preparation and natural
          ingredients.
        </p>
      </section>

      <section>
        <h2>7. External Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content, privacy practices, or accuracy of
          information available on those websites.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          MyShop shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from the use of our products or this
          website.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions regarding this disclaimer, please contact
          our customer support team.
        </p>
      </section>

      <p className="last-updated">
        <strong>Last Updated:</strong> June 2026
      </p>
    </div>
  );
};

export default Disclaimer;
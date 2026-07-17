import React from "react";
import "../styles/returnPolicy.css";

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <h1>Return & Refund Policy</h1>

      <p>
        At <strong>MyShop</strong>, we are committed to delivering fresh,
        high-quality traditional and healthy food products. Due to the
        perishable nature of our products, we follow a strict return and refund
        policy to ensure food safety and customer satisfaction.
      </p>

      <section>
        <h2>1. Returns</h2>
        <p>
          Food products cannot be returned once they have been delivered,
          except in cases where the product received is damaged, defective,
          expired, or incorrect.
        </p>
      </section>

      <section>
        <h2>2. Damaged or Incorrect Products</h2>
        <p>
          If you receive a damaged, leaking, expired, or incorrect item, please
          notify us within <strong>24 hours</strong> of delivery. Kindly include
          your order number along with clear photographs of the product and its
          packaging for verification.
        </p>
      </section>

      <section>
        <h2>3. Refund Eligibility</h2>
        <p>
          Refunds may be approved if:
        </p>
        <ul>
          <li>You received the wrong product.</li>
          <li>The product was damaged during transit.</li>
          <li>The product was expired at the time of delivery.</li>
          <li>Your order could not be fulfilled due to stock unavailability.</li>
        </ul>
      </section>

      <section>
        <h2>4. Non-Refundable Situations</h2>
        <ul>
          <li>Change of mind after delivery.</li>
          <li>Incorrect shipping address provided by the customer.</li>
          <li>Failure to receive the delivery after multiple attempts.</li>
          <li>Products opened, consumed, or stored improperly after delivery.</li>
        </ul>
      </section>

      <section>
        <h2>5. Refund Process</h2>
        <p>
          Once your request has been reviewed and approved, the refund will be
          processed to your original payment method within <strong>5–7 business
          days</strong>. Depending on your bank or payment provider, it may take
          additional time for the amount to reflect in your account.
        </p>
      </section>

      <section>
        <h2>6. Order Cancellation</h2>
        <p>
          Orders may be cancelled before they are processed or dispatched.
          Once an order has been shipped, it cannot be cancelled.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          For any return or refund-related queries, please contact our customer
          support team with your order details. We will be happy to assist you.
        </p>
      </section>

      <p className="last-updated">
        <strong>Last Updated:</strong> June 2026
      </p>
    </div>
  );
};

export default ReturnPolicy;
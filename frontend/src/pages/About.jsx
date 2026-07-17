import { Link } from 'react-router-dom';
import '../styles/about.css';

const About = () => {
    return (
        <main className="content-page">
            <section className="content-hero about-hero">
                <div>
                    <p className="eyebrow">About MYShop</p>
                    <h1>Traditional foods, made easier to find and enjoy.</h1>
                    <p>
                        MYShop brings wholesome traditional snacks, sweets, and health mixes
                        into one simple online store. We focus on familiar ingredients,
                        honest products, and food that feels close to home.
                    </p>
                    <Link to="/" className="btn">Explore Products</Link>
                </div>
            </section>

            <section className="content-section two-column-section">
                <div>
                    <p className="eyebrow">Our Story</p>
                    <h2>Built around everyday healthy choices</h2>
                </div>
                <div className="content-copy">
                    <p>
                        Many traditional recipes are full of natural nutrition, but they are
                        not always easy to buy online. MYShop was created to make those foods
                        more accessible, especially for people who want better snacks,
                        millet-based sweets, and homemade-style mixes.
                    </p>
                    <p>
                        From uluthang kali to sathu maavu and millet laddus, our catalog is
                        shaped around products that carry taste, memory, and practical health
                        value.
                    </p>
                </div>
            </section>

            <section className="value-grid">
                <article className="value-card">
                    <span>01</span>
                    <h3>Traditional Taste</h3>
                    <p>Products inspired by familiar South Indian food habits and recipes.</p>
                </article>
                <article className="value-card">
                    <span>02</span>
                    <h3>Better Ingredients</h3>
                    <p>Millets, pulses, jaggery, nuts, and other naturally nourishing staples.</p>
                </article>
                <article className="value-card">
                    <span>03</span>
                    <h3>Simple Shopping</h3>
                    <p>A clean store experience that helps customers discover and order easily.</p>
                </article>
            </section>

            <section className="content-section highlight-section">
                <div>
                    <p className="eyebrow">What We Care About</p>
                    <h2>Food that feels honest, useful, and comforting.</h2>
                </div>
                <p>
                    Our goal is to support healthier everyday eating without making it feel
                    complicated. MYShop is for customers who want food with roots, flavor,
                    and a little more care behind every choice.
                </p>
            </section>
        </main>
    );
};

export default About;
import FooterMain from "../../component/footer/FooterMain";
import Header from "../../component/header/Header";
import './AboutUs.css'
function AboutUs(){
    return(
        <>
        <Header/>
        <section>
            <div className="AboutMain">
                <div className="Aboutmid">
                    <h1>The Company About</h1>
<p>
  At WoodShape, we believe that every home deserves furniture and décor that
  feels warm, elegant, and timeless. Our journey started with a simple idea:
  to bring beautifully crafted wooden products into modern homes without losing
  the charm of traditional craftsmanship.
</p>
<div className="AboutDetails">
    <p> WoodShape is more than just a furniture brand. We create premium wooden
  cutting boards, home décor, restaurant interiors, office interiors, and
  handcrafted gift collections designed to make every space feel unique.
  Every product is carefully made using high-quality materials and attention
  to detail, so it not only looks beautiful but also lasts for years.

  Our team works with skilled artisans and designers who understand the beauty
  of natural wood. From selecting the finest materials to creating the final
  design, we focus on quality, comfort, and style in every step.

  We know that every customer has a different taste, which is why we offer a
  wide range of designs—from modern minimal styles to classic handcrafted
  pieces. Whether you want to decorate your home, redesign your workspace,
  or find the perfect gift, WoodShape is here to help you create a space that
  reflects your personality.

  Our mission is simple: to turn ordinary spaces into beautiful places filled
  with warmth, creativity, and natural elegance.</p>
</div>
<div className="imagespixel">
    <img src="./src/assets/img/pixel.jpg"></img>
</div>
                </div>
            </div>
        </section>
        <FooterMain/>
        </>
    )
}
export default AboutUs;
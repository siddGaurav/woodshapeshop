import Cart from "../../component/cart.jsx/CartMain";
import FooterMain from "../../component/footer/FooterMain";
import Header from "../../component/header/Header";

import CardData from './DailyUSeCuttingBoards.json'


function DailyUSeCuttingBoards(){
    return(
        <>
       <Header/>
        <section>
                <div className='HomeSec5Main'>
                    <div className='HomeSection5Mid'>
                        <div className='HeadingCart'>

                            <div className='FirstHeadingCart'>
                                <h1>Premium Range Cutting Boards</h1>

                            </div>

                        </div>
                        <div className='CartMid'>

                            {CardData.map((item) => (
                                <div className='CartDiv' key={item.id}>
                                    <Cart
                                        name={item.name}
                                        price={item.price}
                                        compareAt={item.compareAt}
                                        image={item.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
       <FooterMain/>
        </>
    )
}
export default DailyUSeCuttingBoards;
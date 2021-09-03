
const Footer = () => {
    return (<>
            <footer>
                <div className="container">
                    <section>
                        <article>
                            <h3>Cellunatic</h3>
                            <p>
                                Empresa de tecnologia
                            </p>
                            <footer>
                                <p>j-41020890-2</p>
                            </footer>
                        </article>
                        {/* <form>
                            <div className="fields">
                                <div className="field">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" ></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" value="Send Message" /></li>
                            </ul>
                        </form> */}
                    </section>
                    <section className="split contact">
                        <section className="alt">
                            <h3>Dirección</h3>
                            <p>CC gran bazar centro, Valencia Edo. Carabobo, calle comercio entre montes de oca y Carabobo, Planta alta local ML-116</p>
                        </section>
                        <section>
                            <h3>Phone</h3>
                            <p><a href="tel:+584148733690">(+58) 4148733690</a></p>
                        </section>
                        <section>
                            <h3>Email</h3>
                            <p><a href="mailto:cellunatic2017cgc.a@gmail">cellunatic2017cgc.a@gmail</a></p>
                        </section>
                        <section>
                            <h3>Social</h3>
                            <ul className="icons alt">
                                <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                            </ul>
                        </section>
                    </section>
                </div>
            </footer>
            <style jsx>
                {
                    `
                    footer{
                        width:100%;
                        background:var(--primary-color);
                    }
                    footer > div{
                        display:grid;
                    }
                    footer div h3{
                        padding:10px;
                    }
                    footer div p{
                        padding:5px 20px;
                    }
                    footer div section > p{
                        border-bottom:2px solid var(--secondary-color);
                    }
                    footer div > section:nth-child(2){
                        border-left:2px solid var(--secondary-color);
                    }
                    @media(min-width:760px){
                        footer > div{
                            grid-template-columns:repeat(2,1fr);
                        }
                    }
                    `
                }
            </style>
        </>
        )
}

export default Footer
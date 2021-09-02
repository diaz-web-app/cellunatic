
const Footer = () => {
    return (<>
            <footer>
                <div className="container">
                    <section>
                        <article>
                            <h3>Cellunatic</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus laborum perferendis voluptatum, enim magnam voluptatibus mollitia nisi iure minima, veritatis laudantium, impedit pariatur deserunt officia! Dignissimos non maxime perferendis mollitia? Reprehenderit unde, culpa alias ad voluptatem id harum reiciendis cupiditate impedit voluptatibus maiores quia nobis dolore deleniti sed accusamus soluta? Itaque voluptatibus distinctio eos enim quidem unde rem quas!
                            </p>
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
                            <h3>Address</h3>
                            <p>1234 Somewhere Road #87257<br/>
                            template, TN 00000-0000</p>
                        </section>
                        <section>
                            <h3>Phone</h3>
                            <p><a href="#">(000) 000-0000</a></p>
                        </section>
                        <section>
                            <h3>Email</h3>
                            <p><a href="#">info@untitled.tld</a></p>
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
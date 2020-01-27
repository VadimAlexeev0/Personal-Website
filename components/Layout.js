import Header from "./Header"
import Footer from "./Footer"

class Layout extends React.Component{

    render(){
        return(
            <>
                <Header />

                <main>
                    {this.props.children}
                </main>

                <Footer />

                <style jsx global>{`
                    body{
                        margin: 0;
                        background-color: #fff;

                        padding-left: 2rem;
                        padding-right: 2rem;
                        max-width: 64rem;
                        margin-right: auto;
                        margin-left: auto;

                        font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;

                    }
                    main{
                        max-width: 48rem;
                        margin-right: auto;
                        margin-left: auto;
                    }
                `}</style>
            </>
        )
    }
}

export default Layout
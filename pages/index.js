import Layout from "../components/Layout"

class Index extends React.Component{

    render(){
        return(
            <Layout>
                <h1><b>Vadim Alexeev</b>, Web Developer.</h1>

                <h3>Find me around the internet on:</h3>
                <ul>
                    <li>
                        <a href="https://github.com/uncleben69" target="_blank">GitHub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/vadim-alexeev-797a82196/" target="_blank">Linkedin</a>
                    </li>
                </ul>

                <style jsx>{`
                    h1{
                        font-weight: normal;
                    }
                    h3{
                        font-weight: normal;
                    }
                    a{
                        color: rgb(33,33,33);
                        font-size: 20px;
                    }
                    li{
                        padding-bottom: 1rem;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default Index
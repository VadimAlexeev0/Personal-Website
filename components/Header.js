import Link from './Link';

class Header extends React.Component {
        
    render(){
        return(
            <>
                <header>
                    <Link href="/">
                        <a>
                            <h1>Vadim Alexeev {new Date().getFullYear().toString()}</h1>
                        </a>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/cv">
                                    <a className="link">Experience / CV</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects">
                                    <a className="link">Projects</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <style jsx>{`
                    header{
                        padding-top: 4rem;
                        padding-bottom: 4rem;
                        
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;

                    }

                    h1{
                        color: rgb(33,33,33);
                        font-size: 1.25rem;
                        font-weight: bold;
                    }
                    li{
                        display: inline;
                    }
                    li:not(:last-child){
                        padding-right: 10px;
                    }
                    ul{
                        text-align: center;
                    }
                    a{
                        text-decoration: none;
                    }
                    .link{
                        color: #777;
                    }
                    .selected{
                        color: rgb(33,33,33)!important;
                    }
                `}</style>
            </>
        )
    }
}

export default Header;
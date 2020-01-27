import Link from './Link';

function Footer(){
    return(
        <>  
            <div className="footer">
                <p>© {new Date().getFullYear().toString()} Made by 
                    <Link href="/">
                        <a> Vadim Alexeev</a>
                    </Link>
                </p>
            </div>
            <style jsx>{`
                .footer {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                }
                
                a{
                    text-decoration: none;
                    color: rgb(33,33,33)!important;
                    font-weight: bold;
                }                
            `}</style>
        </>
    )
}

export default Footer
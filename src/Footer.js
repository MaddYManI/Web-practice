import './Footer.css'

function Footer (){
    return(
        <footer className='box' >
            <div className='box2'>
                <ul className='footer1'><b>Navigation</b>
                    <li className='footer2'>Home</li>
                    <li className='footer2'>About</li>
                    <li className='footer2'>menu</li>
                    <li className='footer2'>reservation</li>
                    <li className='footer2'>Order Online</li>
                    <li className='footer2'>Login</li>
                </ul>
                <ul className='footer1'><b>Contact</b>
                    <li className='footer2'>Address</li>
                    <li className='footer2'>Phone number</li>
                    <li className='footer2'>Email</li>
                </ul>
                <ul className='footer1'><b>Social Media Links</b>
                    <li className='footer2'>Facebook</li>
                    <li className='footer2'>Twitter</li>
                    <li className='footer2'>Whatsapp</li>
                </ul>
            </div>
        </footer>
    )

}
export default Footer;
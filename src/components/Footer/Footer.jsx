import './footer.css';
import { HomeOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const Footer = () => {
    const date = new Date().getFullYear()
    console.log(date)
    return ( 
        <>
              <div className="global-footer-div" id="footer">
           
            <div className="footer-title">
                 <h2>OscarExporton</h2>
                
                </div>
                
            <div className="contact-footer">
                <h4>Contacts</h4>
                <p><UserOutlined /><span><b>&nbsp;Oscar Jonas Jazbutis</b>&nbsp;Director</span></p>
                <p><HomeOutlined /><span><b>&nbsp;Perkūnkiemio g. 19, LT-12120 Vilnius</b></span></p>
                <p><PhoneOutlined/><span><b>&nbsp;+37067525512</b></span></p>
                 
                </div>
                <FloatButton.BackTop visibilityHeight={0} />
           
            </div>
            <div className='creator-info'>
                <p>Created by <b>Artur Oganesian</b>©{date}</p>
            </div>
        </>
      
     );
}
 
export default Footer

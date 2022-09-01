import footerStyles from '../styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from  '@fortawesome/free-brands-svg-icons';
import { faYoutube } from  '@fortawesome/free-brands-svg-icons';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (<div><table className={footerStyles.footerStyling}>
    <tbody>
        <tr className={footerStyles.headerStyling}>
            <th className={footerStyles.headerRow}>About Us</th>
            <th className={footerStyles.normalRow}>Contact Us</th>
            <th></th>
        </tr>
    </tbody>
    <tbody>
        <tr className={footerStyles.normalStyling}>
            <td className={footerStyles.text}>
            “Trịnh công sơn” là một dự án được thành lập bởi học sinh sinh viên yêu và cảm nhạc trịnh trên cả nước với mong muốn đem màu nhạc xưa, những lời ca nét bút ủa cố nhạc sĩ hay chỉ đơn giản là những mảnh chuyện nhỏ về cuộc đời ông đến thính/độc giả
            </td>
            <td className={footerStyles.contactList}>
                <ul className={footerStyles.list}>
                    <li><FontAwesomeIcon icon={faFacebook} /> TCSSPTER</li>
                    <li><FontAwesomeIcon icon={faInstagram} /> TCSSPTER</li>
                    <li><FontAwesomeIcon icon={faYoutube} /> TCSSPTER</li>
                    <li><FontAwesomeIcon icon={faPhoneAlt} /> 0314200622</li>
                </ul>
            </td>
            <td>
                <ul className={footerStyles.loginList}>
                    <li>ĐĂNG NHẬP</li>
                    <li className={footerStyles.registerButton}>ĐĂNG KÝ</li>
                </ul>
            </td>
        </tr>
    </tbody>
        </table>
    </div>)
}

export default Footer; 
import Link from 'next/link';
import tableStyles from '../styles/ScrollTable.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const ScrollerOne = () => {
    return (<div className={tableStyles.tableStyle}><table style={{borderLeft: "solid"}}>
        <tbody>
            <tr>
                <th className={tableStyles.tableScroll}><div><Link href="#"><img src= '../images/296180103_1703194346704694_878387220341538757_n.png'/></Link></div><div>Bức thư số 01: 2.9.1964</div></th>
                <th className={tableStyles.tableScroll}><div><Link href="#"><img src= '../images/298362933_609906047519340_566857087251627907_n.png' /></Link></div><div>Bức thư số 02: 3.9.1964</div></th>
                <th className={tableStyles.tableScroll}><div><Link href="#"><img src= '../images/292586863_740175090610031_2076367580784472929_n.png' /></Link></div><div>Bức thư số 03: 17.9.1964</div></th>
                <th style={{fontSize: "40px"}}><FontAwesomeIcon icon={faChevronCircleRight} /></th>
            </tr>
        </tbody>
        </table></div>)
}

export default ScrollerOne; 
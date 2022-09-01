import Link from 'next/link';
import tableStyles from '../styles/ScrollTable.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

const ScrollerTwo = () => {
    return (<div className={tableStyles.tableStyle}><table style={{borderLeft: "solid"}}>
        <tbody>
            <tr>
                <th className={tableStyles.tableScroll}><div><Link href="/firstSong"><img src='../images/301021599_470243404970495_5780728694595909875_n.png' /></Link></div><div>Diễm xưa</div></th>
                <th className={tableStyles.tableScroll}><div><Link href="#"><img src='../images/299902898_1992097317653055_4013423033695915888_n.png' /></Link></div><div>Ta thấy gì đêm nay</div></th>
                <th className={tableStyles.tableScroll}><div><Link href="#"><img src='../images/300816710_609864244008347_3530801645000959512_n.png' /></Link></div><div>Nhìn những mùa thu đi</div></th>
                <th style={{fontSize: "40px"}}><FontAwesomeIcon icon={faChevronCircleRight} /></th>
            </tr>
        </tbody>
        </table></div>)
}

export default ScrollerTwo; 
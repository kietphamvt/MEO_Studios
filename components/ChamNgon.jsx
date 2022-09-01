import ChamNgonStyles from '../styles/ChamNgon.module.scss'; 

const ChamNgon = () => {
    return (<div className={ChamNgonStyles.gridContainer}>
        <div className={ChamNgonStyles.miniGridContainer}>
            <img src='../images/301908827_2296913813802300_8116844640417043215_n.png' />
            <div>Có những ngày tuyệt vọng cùng cực, tôi và cuộc đời đã tha thứ cho nhau. Từ buổi con người sống quá rẻ rúng, tôi biết rằng vinh quang chỉ là điều dối trá. Tôi không còn gì để chiêm bái ngoài nỗi tuyệt vọng và lòng bao dung. Hãy đi đến tận cùng của tuyệt vọng để thấy tuyệt vọng cũng đẹp như một bông hoa.</div>
        </div>
        <div className={ChamNgonStyles.title}>
            <ul>
                <li>CHÂM</li>
                <li>NGÔN</li>
                <li>TRỊNH</li>
            </ul>
        </div>
    </div>)
}

export default ChamNgon; 
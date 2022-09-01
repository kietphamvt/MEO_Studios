import camStyles from '../styles/Cam.module.scss';

const Cam = () => {

    return (<div>
        <div className={camStyles.gridContainer}>
            <div className={camStyles.firstItem}>
                <div><img src='../images/300883260_620473392761235_4352669797329578477_n.png'/></div>
                <div style={{fontFamily: "iCielBC OldStyle", textAlign:"center"}}>Nói về: Em Và Trịnh</div>
            </div>
            <div className={camStyles.pictureItem}>
                <img src='../images/295857184_1119680251986565_614545389913594503_n.png' />
            </div>
            <div className={camStyles.textItem}>
                <div className={camStyles.title}>Quán văn</div>
                <div>nói về quán văn - “bệ phóng” tiếng hát Khánh Ly và nhạc Trịnh Công Sơn</div>
            </div>
            <div className={camStyles.pictureItem}>
                <img src='../images/295620703_463785918995942_4935214630351764047_n.png' />
            </div>
            <div className={camStyles.textItem}>
                <div className={camStyles.title}>Người nay hát nhạc người xưa?</div>
                <div>Tranh cãi từ dự án âm nhạc “Gen Z và Trịnh”: Những màn kết hợp lạc lối?</div>
            </div>
        </div>
        <div className={camStyles.seeMoreButton}>Xem thêm</div>
    </div>);
}

export default Cam; 
import bigPictureStyles from "../styles/BigPicture.module.scss"

const BigPicture = () => {
    return (<div className={bigPictureStyles.bigPicture}>
    <table>
    <tbody>
        <tr>
            <th className={bigPictureStyles.searchBarSide}>
                <input type="text" className={bigPictureStyles.searchBar}></input>
            </th>
            <th>
                <ul className={bigPictureStyles.text}>
                    <li>TRỊNH</li>
                    <li>CÔNG</li>
                    <li>SƠN</li>
                </ul>
            </th>
        </tr>
    </tbody>
    </table>
        </div>);
}

export default BigPicture;
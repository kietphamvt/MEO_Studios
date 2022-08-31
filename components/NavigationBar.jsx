import navigationBarStyles from "../styles/NavigationBar.module.scss";

const NavigationBar = () => {
    return (
    <nav className={navigationBarStyles.navBar}>
        <ul className={navigationBarStyles.linksContainer}>
            <li className={navigationBarStyles.musicalNote}>♫</li>
            <li>TIỂU SỬ</li>
            <li>MỤC LỤC</li>
            <li>TÌM KIẾM</li>
            <li>LIÊN HỆ</li>
        </ul>
        <ul className={navigationBarStyles.linksContainer}>
            <li>ĐĂNG NHẬP</li>
            <li className={navigationBarStyles.registerButton}>ĐĂNG KÝ</li>
        </ul>
    </nav>);
}

export default NavigationBar;
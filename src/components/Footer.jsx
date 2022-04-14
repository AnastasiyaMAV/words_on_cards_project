import { Button } from "antd";
import { useTheme } from "./hooks/useTheme";

function Footer() {
    const { theme, setTheme } = useTheme();

    const handleLight = () => {
        setTheme('light');
        console.log(theme);
    }

    const handleDark = () => {
        setTheme('dark');
        console.log(theme);
    }

    return (
        <div className="footer">
            <div className="btnTheme">
                <Button onClick={handleLight}>Light</Button>
                <Button onClick={handleDark}>Dark</Button>
            </div>

            <div className="inscription">
                <img src='./assets/images/copyright.png' alt="copyright" className="copyrightImg" 
                    title="Urheberschaft: https://www.flaticon.com/ru/" />
                <span>Anastasiya Vostrikova</span>
            </div>

        </div>
    );
}

export default Footer;
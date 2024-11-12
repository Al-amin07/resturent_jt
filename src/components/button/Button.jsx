

const Button = ({text, size = '16px'}) => {
    return (
        <button style={{
            fontSize: size
        }} className={` py-[10px]  px-3 lg:px-6 roboto bg-[#FEBF00] uppercase font-bold text-[#0A1425] `}>{text}</button>
    );
};

export default Button;
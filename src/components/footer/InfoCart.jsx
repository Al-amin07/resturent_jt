
import PropTypes from 'prop-types'
const InfoCart = ({item}) => {
    const {icon: Icon, title, details } = item
    return (
        <div className="  text-center">
            <Icon className='text-[#FEBF00] mx-auto mb-6' size={35}/>
            <h2 className=" text-2xl bebas  text-white">{title}</h2>
            <ul className=" mt-4">
                {
                    details?.map((info, index) => <li className="text-white roboto " key={index}>{info?.label}{info?.value}</li>)
                }
            </ul>
        </div>
    );
};

InfoCart.propTypes = {
    item: PropTypes.object
}

export default InfoCart;
import './styles.css';

export const ImageContent = ({ imgSrc, imgAlt = 'logo redonda' }) => {
    return <div className="image_container">
        <img src={imgSrc} alt={imgAlt} /> 
    </div>
}

export const SquareLogo = ({ imgSrc, imgAlt = 'logo quadrada'}) => {
    return <div className="square-image_container">
        <img src={imgSrc} alt={imgAlt} /> 
    </div>
}
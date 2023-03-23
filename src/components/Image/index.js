import './styles.css';

export const ImageContent = ({ imgSrc, imgAlt = '' }) => {
    console.log({ imgSrc })
    return <div className="image_container">
        <img src={imgSrc} alt={imgAlt} /> 
    </div>
}
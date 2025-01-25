import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;
    return (
        <div className="card card-compact bg-base-100 border p-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            <figure className="">
                <img className=""
                    src={image_url} />
            </figure>
            {
                details.length > 200 ?
                    <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-yellow-600 font-bold">Read More</Link></p>
                    : <p>{details}</p>

            }
            <div>

            </div>
        </div>
    );
};

export default NewsCard;
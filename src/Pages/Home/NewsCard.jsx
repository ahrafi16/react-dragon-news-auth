import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";



const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, rating, total_view, author } = news;
    return (
        <div className="card card-compact bg-base-100 border p-4 mt-3">
            <div className="flex justify-between bg-gray-200 p-4">
                <div className="flex gap-2 items-center">
                    <div>
                        <img className="w-10 rounded-full" src={author.img} alt="" />
                    </div>
                    <div>
                        <h1 className="font-bold">{author.name}</h1>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <FaRegBookmark className="text-2xl" />
                    <CiShare2 className="text-2xl" />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
            <figure className="">
                <img className=""
                    src={image_url} />
            </figure>
            {
                details.length > 200 ?
                    <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-yellow-600 font-bold ">Read More</Link></p>
                    : <p>{details}</p>

            }
            <div className="flex justify-between py-5 border-t items-center">
                <div className="rating gap-2">
                    <div>
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-xl">{rating.number}</p>
                </div>
                <div className="flex gap-2">
                    <IoEyeSharp className="text-2xl" />
                    {
                        total_view ? total_view : "00"
                    }
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
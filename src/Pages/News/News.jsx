import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSidenav from "../Shared/RightSidenav/RightSidenav";
import Navbar from "../Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";


const News = () => {
    const news = useLoaderData();
    const { id } = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2>Dragon news</h2>
                    {
                        news.map(singleNews => {
                            if (singleNews._id == id) {
                                return <div className="card card-compact p-4 bg-base-100">
                                    <figure>
                                        <img className="w-full"
                                            src={singleNews.image_url} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{singleNews.title}</h2>
                                        <p className="text-justify">{singleNews.details}</p>
                                    </div>
                                    <button className="btn bg-[#D72050] text-white w-1/2"><FaArrowLeft /> All news in this category</button>
                                </div>
                            }
                        })
                    }
                </div>
                <div>
                    <RightSidenav></RightSidenav>
                </div>
            </div>
        </div>
    );
};

export default News;
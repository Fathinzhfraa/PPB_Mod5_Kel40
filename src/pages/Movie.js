import { Fragment } from "react";
import { useNavigate } from 'react-router-dom'; 

import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Halloween 2018", id: 1,
            rate: 2,
            genre: "Thriller",
            img: "https://image.tmdb.org/t/p/original/1On6CLPD2i7nZtTiOyoFq59PMCf.jpg",
            desc:"Film Halloween (2018) akan melanjutkan kisah dari film pertamanya di mana masih mengisahkan Laurie Strode (Jamie Lee Curtis) yang akan menghadapi pertemuan terakhirnya dengan Michael Myers. Setelah menghilang hampir sepuluh tahun, Myers kembali memburu para calon korbannya. Ia merupakan sosok bertopeng yang terus-terusan meneror Laurie. Teror ini masih ada bahkan setelah Laurie melarikan diri dari pembunuhan yang terjadi di malam Halloween empat puluh tahun yang lalu"

          
        },
        {
            title: "Frozen II", id: 2,
            rate: 5,
            genre: "Fantasy",
            img: "https://th.bing.com/th/id/R.c187b72bc9a452b6911b447f07575259?rik=yOkd%2b3Ctjg62Bg&riu=http%3a%2f%2fwww.kiwithebeauty.com%2fwp-content%2fuploads%2f2020%2f02%2ffrozen-2-poster.jpg&ehk=Iexe5bt6e4A%2fYoNMsNqXQUnUAdVKUX810vKDXwYuVo4%3d&risl=&pid=ImgRaw&r=0",
            desc:"Frozen II bercerita tentang Anna, Kristoff, dan Olaf, Elsa berangkat menuju hutan ajaib tersebut dengan penuh rintangan badai, gelombang laut, monster dan kekuatan sihir"
        },
        {
            title: "AVATAR 2", id: 3,
            rate: 5,
            genre: "Fantasy, Action",
            img: "https://th.bing.com/th/id/R.28d5ee67b088fb3fa35814977b0ab6d3?rik=ooaIt2qyJa8roA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ze0RH7YOQuI%2fVfq1ZGEhsgI%2fAAAAAAAAAIQ%2fups22IUGAtw%2fs1600%2favatar-hollywood-movie-desktop-hd-wallpapers-free-download-here-w-o-ibackgroundz.com.jpg&ehk=0GkuLC61OYOEAEN6Zfd1UYvpjWQDJ2KFbJ7UY1lFWns%3d&risl=&pid=ImgRaw&r=0",
            desc:"Avatar 2: The Way of Water, mengisahkan keluarga Jake Sully bersama keluarga barunya yang terbentuk di planet Pandora. Setelah ancaman lama kembali menyerang untuk menyelesaikan apa yang sebelumnya dimulai, Jake harus bekerja sama dengan Neytiri dan tentara ras Na’vi untuk melindungi planet tercinta mereka."
        },
        {
            title: "Tinker Bell", id: 4,
            rate: 4,
            genre: "Fantasy",
            img: "https://image.tmdb.org/t/p/original/reMKdmruRDWXnZf3quP9qnwaTTL.jpg",
            desc: "Sebuah mitos kuno tentang makhluk besar memicu rasa ingin tahu Tinker Bell dan teman baiknya Fawn, peri binatang yang tidak takut melanggar aturan untuk membantu binatang yang membutuhkan. Tetapi makhluk ini tidak diterima di Pixie Hollow – dan peri pengintai bertekad untuk menangkap binatang misterius itu, yang mereka khawatirkan akan menghancurkan rumah mereka. Fawn harus meyakinkan teman-teman perinya untuk mempertaruhkan segalanya untuk menyelamatkan NeverBeast"
        },
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/movie/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailPage(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
                                onClick={() => navigateToDetailPage(item)} 
                            />
                            {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
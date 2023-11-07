import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Book.css";

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Hujan", id: 1,
            rate: 5,
            genre: "Fiksi",
            img: "https://th.bing.com/th/id/OIP.KukgtCZVLvdbZ1917ZSezQHaK9?w=202&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            desc:"novel yang mengisahkan kisah cinta serta perjuangan hidup Lail. Saat usianya baru menginjak 13 tahun, Lail menjadi seorang yatim piatu akibat ayah dan ibu Lail yang terkena letusan Gunung Api Purba dan gempa yang membuat kota tempat mereka tinggal hancu"
        },
        {
            title: "Harry Potter", id: 2,
            rate: 5,
            genre: "Fantasy",
            img: "https://th.bing.com/th/id/OIP.UA3CReYoRvS0DgVyEAhC9QHaLH?pid=ImgDet&rs=1",
            desc:"Novel ini mengisahkan tentang petualangan seorang penyihir remaja bernama Harry Potter dan sahabatnya, Ron Weasley dan Hermione Granger, yang merupakan pelajar di Sekolah Sihir Hogwarts"
        },
        {
            title: "Petjah", id: 3,
            rate: 4.5,
            genre: "Teenfiction",
            img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482457648l/33548853._SY475_.jpg",
            desc:"Dalam rangka merayakan hari jadi ke-50 tahun, Majalah Bobo menerbitkan koleksi spesial karya-karya terbaiknya dalam satu eksemplar bersampul emas ini. Majalah Bobo Edisi Koleksi Terbatas 50 Tahun berisi 50 lebih cerita bergambar yang hanya bisa kita temukan di Majalah Bobo, hasil kurasi dari edisi-edisi favorit pembaca."
        },
        
    ];
    
    const navigateToDetailPage = (item) => {
        navigate(`/book/detail/${item.id}`, { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Books</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} onClick={() => navigateToDetailPage(item)}
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
                        
                        <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} rate={item.rate}
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
import { Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import CardBig from "../component/CardBig"; import CardSmall from "../component/CardSmall"; import "./Game.css";

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "Among Us", id: 1,
            rate: 3,
            img: "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/06/15112219/game-android-populer-among-us.jpg",
            desc:"Game ini berfokus pada sekelompok tim astronot yang harus menyelesaikan serangkaian misi, di saat ada penipu di antara mereka pemain yang lain harus berdiskusi dan menebak penipu itu."
        },
        {
            title: "Life After", id: 2,
            rate: 3,
            img: "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/06/15113411/Life-After2-384x216.jpg",
            desc:"Para pemain game ini memiliki musuh utama yakni Zombie. Permainan ini menyuruh para pemainnya untuk bertahan hidup dari perubahan cuaca ekstrim yang ada di bumi hingga serangan virus zombie."
        },
        {
            title: "Minecraft", id: 3,
            rate: 4,
            img: "https://cdnwpseller.gramedia.net/wp-content/uploads/2021/06/15114020/Minecraft_cover.png",
            desc:"permainan sandbox yang dikembangkan oleh pengembang permainan asal Swedia Mojang Studios. Permainan ini dibuat dalam bahasa pemrograman Java"
        },
        
    ];

    const navigateToDetailPage = (item) => {
        navigate(`/game/detail/${item.id}`, { state: { movieData: item } });
    };
    

    return (
        <>
            <p id="movies">Top Games</p>
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
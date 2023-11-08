
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Gallery = () => {

    const images = [
        'https://p16-sign-va.lemon8cdn.com/tos-maliva-v-ac5634-us/79d834c95abb446a9ac6b1547f8f7a21~tplv-tej9nj120t-shrink:1080:0:q50.webp?source=seo_feed_list&x-expires=1728216000&x-signature=imQsRUCBt0GMItBPry3lI70Akm8%3D',
        'https://www.picclickimg.com/mXgAAOSwC3dlIm5c/The-Far-Side-Gallery-5-by-Gary-Larson.webp',
        'https://blog-cdn.reedsy.com/directories/gallery/82/large_50c05cfba09243d8b05a251e2205c6ec.jpg',
        'https://external-preview.redd.it/gallery-of-novel-covers-english-taiwanese-vietnamese-korean-v0-eAn_rela0zTM1wLLYqFRdFzCrFUrI7vDJAsFkxPw_jg.jpg?auto=webp&s=4c0e6fb83d2e04346d056d268ec1b1ae67906883',
        'https://i.pinimg.com/564x/af/6a/48/af6a487ff263c6a61ade1d4e66d1ac2b.jpg',
        'https://m.media-amazon.com/images/I/715Nun56IAL._AC_UF1000,1000_QL80_.jpg',

    ]

    return (
        <div className='my-20' >
            <div>
                <h1 className='mx-auto text-center pb-2 uppercase font-bold text-3xl border-b-2 w-[17rem] border-[#2f85b8]' >Book Gallery</h1>
            </div>
            <div className='md:px-[20rem] px-8 mt-10'>
                <PhotoProvider>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                        {images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <img className='w-full h-full object-cover shadow-2xl p-3' src={item} alt="" />
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
};

export default Gallery;
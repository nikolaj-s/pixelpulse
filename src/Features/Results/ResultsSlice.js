import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Axios from 'axios';
import { setQuery } from "../Navigation/NavigationSlice";

export const searchImages = createAsyncThunk(
    "ResultsSlice/searchImages",
    async (_, {rejectWithValue, getState, dispatch}) => {

        try {

            let search_term;

            const {query} = getState().NavigationSlice;

            const urlParams = new URLSearchParams(window.location.search);

            if (query.length === 0 && urlParams.has('q')) {
                search_term = urlParams.get('q');
            } else {
                search_term = query;
            }

            if (search_term.length === 0) return rejectWithValue({message: 'invalid search'});

            console.log(search_term);

            urlParams.set('q', search_term);

            let new_url = window.location.protocol + "//" + window.location.host + '/search?' + urlParams.toString();

            window.history.pushState({}, '', new_url);

            const images = [
                {
                    "image": "https://sun9-63.userapi.com/impg/Onsp5mRHYgMuDfuSB2uyXWaUQm12JVBA4KOr-w/Xf2A3uhvTe4.jpg?size=728x1080&quality=95&sign=c98c3a75d26e6e6343618368d363c126&c_uniq_tag=Zf8XRZLpl_3D6Y0v8UwUfDF2MAD3YdAhGvDlNSihlGg&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=ca01246114c474c6cdeca70559d96e5db52418f4-9601511-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Сочный орех 2023 Man's Art ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 728,
                    "height": 1080,
                    "bytes": 0,
                    "snippet": {
                        "title": "Сочный орех 2023 Man's Art ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-149667587_1771"
                    }
                },
                {
                    "image": "https://sun9-58.userapi.com/impg/SwdDFXdp1bSHOyv1R3j7hdk0FDDc9VxSNFSLhw/sUt7oUGGa-k.jpg?size=807x605&quality=96&sign=58120bb3ddd3a27a94d2c4151dc64368&c_uniq_tag=iTuphrAjBSS9HENvOsW7fqPmennfjc3-op7-7BT-DCo&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=f90b0d297e57587a2ce5cf9382017892a2e03633fc31473a-12149467-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Как вам такая попа? 2024 Красивые попы ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 807,
                    "height": 605,
                    "bytes": 0,
                    "snippet": {
                        "title": "Как вам такая попа? 2024 Красивые попы ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-136459909_35034"
                    }
                },
                {
                    "image": "https://a.d-cd.net/6f8c5804k137-1920.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=50c4cee12fbc8e3e0fe3f5b60ebf65fd-5102865-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Подвеска, или делаем упругую, , попу, , - Dodge Caliber, 2 л, 2008 года своими р",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1920,
                    "height": 1280,
                    "bytes": 0,
                    "snippet": {
                        "title": "Подвеска, или делаем упругую, , попу, , - Dodge Caliber, 2 л, 2008 года своими р",
                        "domain": "drive2.ru",
                        "url": "https://www.drive2.ru/l/502368513072038200/"
                    }
                },
                {
                    "image": "https://sun9-80.userapi.com/impg/qiOBlIRCd0aS4ledevKjnPAdholgSa3oolji4w/9w9SI9FTV-8.jpg?size=807x504&quality=95&sign=e5f5d4d23487d15ee2c8dcecaad1babf&c_uniq_tag=LtB_8YrcPGMfiBzSXv7eIp9bEA8yXh0ATo8fgRm6XvE&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=a51f40bf3f26dbdfba20d98861c4c0e75301bd7f-9709143-images-thumbs&n=13",
                    "type": "image",
                    "tags": "#titan #titanclub #sexy #sexygirls #girls #девушка #попа #попка #ноги #ножки #гр",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 807,
                    "height": 504,
                    "bytes": 0,
                    "snippet": {
                        "title": "#titan #titanclub #sexy #sexygirls #girls #девушка #попа #попка #ноги #ножки #гр",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-182632263_8430"
                    }
                },
                {
                    "image": "https://sun9-74.userapi.com/impg/Dal6JXKSeKetNe1-wv1uXPkQpvhC1OwHiVDHbA/pt_SvZi6-1E.jpg?size=604x403&quality=96&sign=ca6b837096058d487739727a0fe71e36&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=fc3c92e7dc7692705d400c3463133bb77f74f43f-8176762-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Как вам такая попа? 2022 Красивые попы ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 604,
                    "height": 403,
                    "bytes": 0,
                    "snippet": {
                        "title": "Как вам такая попа? 2022 Красивые попы ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-136459909_30612"
                    }
                },
                {
                    "image": "https://sun9-81.userapi.com/impf/c837337/v837337159/40a7b/nWXFTeeXytw.jpg?size=1280x852&quality=96&sign=b05619146ab22e68e0bb5011df90104d&c_uniq_tag=iyT3MylheP6G3hbrCi-zkUyqVacISgUfQpvs4ERbhLU&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=0a0c4e4bb5e39db445c1cba527e8ebade4573ce2-8498339-images-thumbs&n=13",
                    "type": "image",
                    "tags": "#пунчик# красота# девушки# секс 2017 ЛГБТ-паблик: \"Дневник Бибоя\" ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1280,
                    "height": 852,
                    "bytes": 0,
                    "snippet": {
                        "title": "#пунчик# красота# девушки# секс 2017 ЛГБТ-паблик: \"Дневник Бибоя\" ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-97709999_515"
                    }
                },
                {
                    "image": "https://sun9-38.userapi.com/impg/phf4LJntdQOz6yJSN3aciUmgArpNk0caR7GCzg/F2ujKL7JQyc.jpg?size=604x402&quality=96&sign=074a9f7296427f17b19e1727cf12427a&c_uniq_tag=FXKGE6tnGciOrDCPrNo7yjgG5E5eIEuYYIhzFlxX9s4&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=702038cf5b92d68fe65641ea75e5fa1f2bf88a86-9843420-images-thumbs&n=13",
                    "type": "image",
                    "tags": "#эрокайф #эротика #девушки #секс 2023 ЭроКайф ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 604,
                    "height": 402,
                    "bytes": 0,
                    "snippet": {
                        "title": "#эрокайф #эротика #девушки #секс 2023 ЭроКайф ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-164737772_1200"
                    }
                },
                {
                    "image": "https://cs.pikabu.ru/post_img/big/2013/08/15/8/1376571440_1366764588.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=d549eec4a5a6ebc398e44b6276a490cec59e50a2-4080417-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Для эстетического наслаждения. Пикабу",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1200,
                    "height": 748,
                    "bytes": 0,
                    "snippet": {
                        "title": "Для эстетического наслаждения. Пикабу",
                        "domain": "pikabu.ru",
                        "url": "https://pikabu.ru/story/dlya_yesteticheskogo_naslazhdeniya_1476790?cid=14872455"
                    }
                },
                {
                    "image": "https://cs4.pikabu.ru/post_img/big/2015/02/01/9/1422806353_1870959691.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=e6bb4f530bea6a955b541f44d02f11cf4ba05df3-10465776-images-thumbs&n=13",
                    "type": "image",
                    "tags": "clover Пикабу",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1500,
                    "height": 1000,
                    "bytes": 0,
                    "snippet": {
                        "title": "clover Пикабу",
                        "domain": "pikabu.ru",
                        "url": "https://pikabu.ru/story/clover_3042369?cid=41031688"
                    }
                },
                {
                    "image": "https://sun1-56.userapi.com/impg/cr5dVnO575bkQhz2PMj9995XgpD1RiK9VCkCsw/9Obt5-wX2To.jpg?size=926x1000&quality=95&sign=cec843e1fd61d2ab3b327e68e9fac67e&c_uniq_tag=iV2xcMoWqnZkG41x6l83qDgcSuvhk1UWxSH6sfANQ8M&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=4a94725fb4c9c3110753b4b0217841216ed398c8-10779221-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Шикарная? 2023 Мужской журнал ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 926,
                    "height": 1000,
                    "bytes": 0,
                    "snippet": {
                        "title": "Шикарная? 2023 Мужской журнал ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-196442386_729"
                    }
                },
                {
                    "image": "https://i.ytimg.com/vi/lyIEyYAdDIw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgRyhJMA8=&rs=AOn4CLCukahRI-1HIXVVSDFTn3xcjoxQnA",
                    "preview": "https://avatars.mds.yandex.net/i?id=efea557cbf131b68546a8c5a65d744439700128b-7765566-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Serg Smirnov - Brabus (Original Mix) - YouTube",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1280,
                    "height": 720,
                    "bytes": 0,
                    "snippet": {
                        "title": "Serg Smirnov - Brabus (Original Mix) - YouTube",
                        "domain": "youtube.com",
                        "url": "https://www.youtube.com/watch?v=lyIEyYAdDIw"
                    }
                },
                {
                    "image": "https://cs6.pikabu.ru/post_img/big/2014/07/29/11/1406655269_630600068.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=ef46f705ed76a21f3cb43174eb667a8a87976a59-4580245-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Вечерняя попка мужчинам) Пикабу",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1366,
                    "height": 768,
                    "bytes": 0,
                    "snippet": {
                        "title": "Вечерняя попка мужчинам) Пикабу",
                        "domain": "pikabu.ru",
                        "url": "https://pikabu.ru/story/vechernyaya_popka_muzhchinam_2524169"
                    }
                },
                {
                    "image": "https://sun9-80.userapi.com/impg/M65PbMzqp2l0U54ZBelZv9R6-_Y9OFoUngGa_g/K82Ax_2Xkq8.jpg?size=1280x853&quality=95&sign=c7faf7404230c7d1d61683d650c37c0a&c_uniq_tag=mFqsBywZTWFg9ehfsfa5dsjWyS3pmj79vmtSNaQD-J0&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=83b07c0b4a3046781e7fd9c5698f600705c1837d-9123151-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Fedor Shmidt 2023 e_sfr ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1280,
                    "height": 853,
                    "bytes": 0,
                    "snippet": {
                        "title": "Fedor Shmidt 2023 e_sfr ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-220156495_86"
                    }
                },
                {
                    "image": "https://ftopx.com/images/201212/ftop.ru_43951.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=5fe7975434fea10e5ef6ad6bf9f4d425f6d0f569-9229208-images-thumbs&n=13",
                    "type": "image",
                    "tags": "#hot ass - @babevoyeur2 on Tumblr",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 2200,
                    "height": 1375,
                    "bytes": 0,
                    "snippet": {
                        "title": "#hot ass - @babevoyeur2 on Tumblr",
                        "domain": "tumblr.com",
                        "url": "https://www.tumblr.com/babevoyeur2/tagged/hot%20ass"
                    }
                },
                {
                    "image": "https://sun9-26.userapi.com/impg/6PtHhYJrkxq51lf5QvHsX4X3DQHwQQNeMrjaJw/MF4sXi0lSfI.jpg?size=1366x768&quality=96&sign=6a8d8cb12f1c18a289ebe4578832e247&c_uniq_tag=QQx3IYOskd2ORIl_DDUb3nx0eyNJPhKaKYkenXMv4-4&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=b26afc3346785d31889486cf9b6f7b5b389a9d34a19921c0-12753091-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Как вам такая попа? 2022 Красивые попы ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1366,
                    "height": 768,
                    "bytes": 0,
                    "snippet": {
                        "title": "Как вам такая попа? 2022 Красивые попы ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-136459909_30937"
                    }
                },
                {
                    "image": "https://static10.tgstat.ru/channels/_0/00/00568c13cf03ef77d4d751828717635d.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=a599751bcf6391f981403c70d77f71c90f8378e2-8342740-images-thumbs&n=13",
                    "type": "image",
                    "tags": "🔥 Бомбические девчонки 🔥 🤩 (@best_fitogirls) - Пост #93",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 640,
                    "height": 640,
                    "bytes": 0,
                    "snippet": {
                        "title": "🔥 Бомбические девчонки 🔥 🤩 (@best_fitogirls) - Пост #93",
                        "domain": "tgstat.ru",
                        "url": "https://tgstat.ru/channel/@best_fitogirls/93"
                    }
                },
                {
                    "image": "https://cs2.pikabu.ru/post_img2/big/2014/01/23/6/1390463799_1508765944.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=ff6e86e29d84162c891db850da2185dce7a390c5-5230282-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Персик :-) Пикабу",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1280,
                    "height": 854,
                    "bytes": 0,
                    "snippet": {
                        "title": "Персик :-) Пикабу",
                        "domain": "pikabu.ru",
                        "url": "https://pikabu.ru/story/persik__1898706?cid=21113388"
                    }
                },
                {
                    "image": "https://img10.joyreactor.cc/pics/post/full/%D0%AD%D1%80%D0%BE%D1%82%D0%B8%D0%BA%D0%B0-%D0%B8%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BE%D0%BF%D0%B0-erotic-368761.jpeg",
                    "preview": "https://avatars.mds.yandex.net/i?id=7dca3efd5f1ab2b0c72671b20f177ec1d74b2b20-9106703-images-thumbs&n=13",
                    "type": "image",
                    "tags": "идеальная / смешные картинки и другие приколы: комиксы, гиф анимация, видео, луч",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 3000,
                    "height": 1930,
                    "bytes": 0,
                    "snippet": {
                        "title": "идеальная / смешные картинки и другие приколы: комиксы, гиф анимация, видео, луч",
                        "domain": "joyreactor.cc",
                        "url": "https://joyreactor.cc/tag/%D0%B8%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F"
                    }
                },
                {
                    "image": "https://i.mycdn.me/image?id=854786579891&t=50&plc=WEB&tkn=*JxWyT99Ny-5-0lBSDrFV_cZU2Dw&fn=external_8",
                    "preview": "https://avatars.mds.yandex.net/i?id=d7a29e046d6da3a11a278dfe908d2724182c4a19-10139465-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Смотрите видео \"Как отличить порнографию от эротики?\" в ОК. Плеер Видео",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 720,
                    "height": 405,
                    "bytes": 0,
                    "snippet": {
                        "title": "Смотрите видео \"Как отличить порнографию от эротики?\" в ОК. Плеер Видео",
                        "domain": "ok.ru",
                        "url": "https://ok.ru/videoembed/285145762483"
                    }
                },
                {
                    "image": "https://img10.joyreactor.cc/pics/post/full/%D0%BF%D0%BE%D0%BF%D0%BA%D0%B0-%D0%AD%D1%80%D0%BE%D1%82%D0%B8%D0%BA%D0%B0-Ura-Pechen-3091278.jpeg",
                    "preview": "https://avatars.mds.yandex.net/i?id=37833b6611d8fa1918de37f3d0cedbade092abb6-5419089-images-thumbs&n=13",
                    "type": "image",
                    "tags": "попка :: Эротика :: Ura Pechen - JoyReactor",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1920,
                    "height": 1280,
                    "bytes": 0,
                    "snippet": {
                        "title": "попка :: Эротика :: Ura Pechen - JoyReactor",
                        "domain": "m.joyreactor.cc",
                        "url": "https://m.joyreactor.cc/post/2622606"
                    }
                },
                {
                    "image": "https://sun9-44.userapi.com/impf/NfOVxmSXJpBIsE3c9lwlnnSNNptcO55DWT0G0Q/RCdY08akfPY.jpg?size=604x340&quality=96&sign=df27edd1cc1e71ece80fdfc1eabca8e7&c_uniq_tag=z_gPm9Hy5yj7yP20MAm58oz-IIf1etBuNxpN61p8BgQ&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=652eca193c43da6cc6ea23845ca65436e464d15b-4720151-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Take a Barbell T.a.B ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 604,
                    "height": 340,
                    "bytes": 0,
                    "snippet": {
                        "title": "Take a Barbell T.a.B ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/club22635213"
                    }
                },
                {
                    "image": "https://cs12.pikabu.ru/post_img/2022/08/07/10/og_og_1659890245242659724.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=0ee7bb3039d89f8824e98801362b8f84bf85443b-8253234-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Самый лучший вид с утра Пикабу",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1200,
                    "height": 628,
                    "bytes": 0,
                    "snippet": {
                        "title": "Самый лучший вид с утра Пикабу",
                        "domain": "pikabu.ru",
                        "url": "https://pikabu.ru/story/samyiy_luchshiy_vid_s_utra_9347448?mv=2"
                    }
                },
                {
                    "image": "https://sun9-20.userapi.com/impg/gm1PpUE7fp8btb1bkEjW1WcPBI5EXM5XXFsR6g/SSI4PbxuNnI.jpg?size=650x929&quality=96&sign=4d42c545767cf9497e90730229840b60&c_uniq_tag=j0dhNN_W2YtPY6o5LqShQFHo1qEAjce8sFvmHP2LzX0&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=1df6d0d829fd51087f570ffaa42a3d58675a200f-6339443-images-thumbs&n=13",
                    "type": "image",
                    "tags": "RUero.com - Эротика для умных: записи сообщества ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 650,
                    "height": 929,
                    "bytes": 0,
                    "snippet": {
                        "title": "RUero.com - Эротика для умных: записи сообщества ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-9544262?offset=400"
                    }
                },
                {
                    "image": "https://geo-media.beatport.com/image_size/1400x1400/fefe19e0-adf2-4fcc-955c-2417c947f0f4.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=a58073143ad2e442c47423ec775712fe7793bdef-10024314-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Arthur D'Amour - I Wanna Be Down More Records Music & Downloads on Beatport",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1400,
                    "height": 1400,
                    "bytes": 0,
                    "snippet": {
                        "title": "Arthur D'Amour - I Wanna Be Down More Records Music & Downloads on Beatport",
                        "domain": "beatport.com",
                        "url": "https://www.beatport.com/nl/release/i-wanna-be-down/2019941"
                    }
                },
                {
                    "image": "https://i.ytimg.com/vi/UfXtedmBKc8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgRyg_MA8=&amp;rs=AOn4CLB8fVQ6qxxTw67mTy3-gWEBHeB_Sw",
                    "preview": "https://avatars.mds.yandex.net/i?id=d0af7c8bb8d23302edf792e0ef454daecd732298-8340522-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Sharam Jey & West K - Stay (Original Mix) - YouTube",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1280,
                    "height": 720,
                    "bytes": 0,
                    "snippet": {
                        "title": "Sharam Jey & West K - Stay (Original Mix) - YouTube",
                        "domain": "youtube.com",
                        "url": "https://www.youtube.com/watch?v=UfXtedmBKc8"
                    }
                },
                {
                    "image": "https://sun9-86.userapi.com/impg/eTak8cLU4PybuS1ScVWdAqHH3BaZP_tLSHUFFA/MCA_CrH1dg4.jpg?size=1280x960&quality=96&sign=2928708da41b06d475e065ee979b949a&c_uniq_tag=Mo8NCORJB15Trj35QXky9mDpKI29n4ZZRIHsM99muKg&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=89b9caaa8747c763693044b604a3024a59dd49d3-6235060-images-thumbs&n=13",
                    "type": "image",
                    "tags": "What do you think of that? 2023 Красивые попы VK",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1280,
                    "height": 960,
                    "bytes": 0,
                    "snippet": {
                        "title": "What do you think of that? 2023 Красивые попы VK",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-136459909_31258?lang=en"
                    }
                },
                {
                    "image": "https://sun9-26.userapi.com/impf/dyy4_7Cc2F2hT7HEN-sLrpg-q16YB0UKgR4Eqg/6jRuUEnO3jQ.jpg?size=604x393&quality=96&sign=e35277adc5533b7aba9be71c513ab39c&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=8f417a48859383dbea8bb63b3d59321ac4daff73-5858058-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Сиси, писи, попы - Фотография 20 из 80 ВКонтакте",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 604,
                    "height": 393,
                    "bytes": 0,
                    "snippet": {
                        "title": "Сиси, писи, попы - Фотография 20 из 80 ВКонтакте",
                        "domain": "vk.com",
                        "url": "https://vk.com/photo-76272400_338425660"
                    }
                },
                {
                    "image": "https://cs6.pikabu.ru/post_img/2017/08/19/8/og_og_150314816027622653.jpg",
                    "preview": "https://avatars.mds.yandex.net/i?id=236cc0b4a8598e20aaae70e28e976d6b815a1a2c-5342042-images-thumbs&n=13",
                    "type": "image",
                    "tags": "Учись считать до 10-ти правильно) Пикабу",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1200,
                    "height": 628,
                    "bytes": 0,
                    "snippet": {
                        "title": "Учись считать до 10-ти правильно) Пикабу",
                        "domain": "pikabu.ru",
                        "url": "https://pikabu.ru/story/uchis_schitat_do_10ti_pravilno_5276211?cid=93908543"
                    }
                },
                {
                    "image": "https://sun9-10.userapi.com/impg/09PmAhlg4HBUf-ST8yevs5lA59e87ad2yuZ_RA/8FMevhp1NYs.jpg?size=807x504&quality=95&sign=d01d9152cf986ad9b0c2390c1437552d&c_uniq_tag=NbjTWF_VCAguYTbZz-_3rkG9PqCUleLCiEPHqi_KBj0&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=8ffaf94f1f0850ebeea04254ebeef4d48393660d-5869551-images-thumbs&n=13",
                    "type": "image",
                    "tags": "#попа #эротика #девушки #красиво 2023 Приятные попы каждый день - Gorgeous butts",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 807,
                    "height": 504,
                    "bytes": 0,
                    "snippet": {
                        "title": "#попа #эротика #девушки #красиво 2023 Приятные попы каждый день - Gorgeous butts",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-216826929_1921"
                    }
                },
                {
                    "image": "https://sun9-9.userapi.com/impg/rQu4ihyrHWibLdaPQpzeW8-FNZVrdk-eKVIv7w/lTvU3xydZCw.jpg?size=1280x800&quality=96&sign=200328157b4e74e72d7094b33fe537f3&c_uniq_tag=g3hQ-nFlK7zPBHdjNdJufSSH5DBZCkUXxCaOA9PXAgo&type=album",
                    "preview": "https://avatars.mds.yandex.net/i?id=a991caa106438a511bb2addca0cf51fa3afe34a464416a90-12640276-images-thumbs&n=13",
                    "type": "image",
                    "tags": "What do you think of that? 2022 Красивые попы VK",
                    "nsfw": true,
                    "alt_links": [],
                    "width": 1280,
                    "height": 800,
                    "bytes": 0,
                    "snippet": {
                        "title": "What do you think of that? 2022 Красивые попы VK",
                        "domain": "vk.com",
                        "url": "https://vk.com/wall-136459909_30834?lang=en"
                    }
                }
            ]
            // const images = await Axios({
            //     method: "POST",
            //     url: 'http://10.0.0.38:3333/search-for-images',
            //     data: {
            //         query: query,
            //     }
            // }).then(res => {
            //     return res.data;
            // }).catch(error => {
            //     console.log(error);
            // })

            console.log(images)
            return images;
        
        } catch (error) {
            console.log(error);
            return;
        }
    }
)

const ResultsSlice = createSlice({
    name: "ResultsSlice",
    initialState: {
        loading: false,
        results: [],
        loadingMore: false
    },
    extraReducers: {
        [searchImages.pending]: (state, action) => {
            state.loading = true;
            state.results = [];
        },
        [searchImages.fulfilled]: (state, action) => {
            state.loading = false;
            state.results = action.payload;
        }
    }
})

export const selectResults = state => state.ResultsSlice.results;

export const selectLoadingState = state => state.ResultsSlice.loading;

export default ResultsSlice.reducer;
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getAllBooks, getBookByID } from "../Service"



const Content = () => {

    let { bookId } = useParams()
    console.log(bookId)
    console.log('------------------')

    const [thisBook, setThisBook] = useState([]);

    //  useEffect(()=> {
    //     getAllBooks().then( res => {
    //        setThisBook(res.data.filter(book => book.id==bookId))
    //  })},[]);


    useEffect(() => {

        getBookByID(bookId).then(res => {

            setThisBook(res.data)


        })
    }, []);

    console.log(thisBook);

    return (

        <div>
            <h1 style={{ textAlign: "center" }}>{thisBook.title}</h1>
            <p style={{ textAlign: "center" }}>By: {thisBook.author}</p>
            <img src={thisBook.picture} style={{ height: "450px", alignSelf: "center", marginLeft: "40%" }} />
            <p style={{ textAlign: "justify" }}>
                CHAPTER I <br /> <br />
                Integer pretium velit a orci convallis, sed varius nisi consectetur. Etiam convallis, augue non dapibus semper, diam augue lacinia quam, sit amet luctus nulla ante ac magna. Aenean feugiat sit amet erat a cursus. Donec ultrices erat risus, et volutpat diam molestie scelerisque. Aenean lorem urna, congue sit amet mollis at, dignissim vel sem. Maecenas sit amet est justo. Cras id dui pretium, congue dui sit amet, tincidunt enim. Phasellus felis est, imperdiet eget nunc nec, interdum rhoncus nisl. Nullam eget dui in nisi aliquet accumsan vitae in eros. Vivamus tortor tellus, volutpat quis luctus at, consectetur ac nibh. Nulla pellentesque a odio eget sollicitudin. Nulla a quam in velit varius dapibus ac id dolor. Nunc venenatis dignissim facilisis. Integer nisi turpis, suscipit sit amet ultricies a, pretium et metus. Mauris volutpat a felis vitae mattis.

                Nulla facilisis bibendum lectus, sed fringilla nisl ullamcorper nec. Mauris felis velit, porta rutrum magna non, fringilla vestibulum est. Fusce imperdiet eget massa non consequat. Cras consectetur mattis leo at facilisis. Mauris ut consequat orci. Vivamus mattis quam sed risus pharetra, ut tristique augue mollis. Cras iaculis leo id feugiat venenatis. Maecenas et pretium ipsum. Nunc egestas maximus odio vel eleifend. Nunc pulvinar elementum ante, at fermentum velit sagittis a. Proin in quam varius, molestie justo in, ultrices lectus. Aliquam congue egestas mollis. Vestibulum feugiat leo id interdum hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ut velit eu nisi efficitur scelerisque vitae viverra leo. Donec non facilisis tellus.

                Curabitur libero eros, semper id pulvinar vitae, faucibus quis quam. Aenean ante est, sollicitudin commodo nisi eget, mattis vehicula neque. Maecenas vitae facilisis velit. Maecenas ac elit nisl. Nulla facilisi. In ultrices quam urna, sit amet faucibus libero elementum et. Maecenas porttitor dignissim interdum. Nulla ut dui et purus posuere commodo et et elit. Nulla semper risus a nunc eleifend maximus nec a turpis. Mauris elementum lorem eu ligula congue, quis aliquam nisi sollicitudin. Mauris tincidunt ultrices nisl ut laoreet. Maecenas condimentum rhoncus risus at aliquet.

                Quisque consequat justo in tellus rutrum volutpat.   Nullam a enim libero. Donec ipsum tellus, cursus vitae leo at, tincidunt auctor neque. In non pellentesque elit, non pulvinar diam. Cras in ante molestie, ultricies augue et, viverra ante. Cras ut malesuada turpis. Morbi ac semper mi. Donec dapibus purus id enim cursus, ornare dictum arcu feugiat. Pellentesque fringilla turpis eget blandit maximus. Quisque vehicula tortor nec consequat consectetur. Pellentesque congue elit sit amet pellentesque hendrerit. Sed ex magna, luctus sit amet quam vitae, mollis mattis neque. Morbi a ullamcorper massa, scelerisque efficitur mauris. Aliquam vitae semper elit. Sed vel felis viverra, maximus odio eget, fringilla quam.

                Praesent id metus non eros facilisis pellentesque et accumsan ante. Morbi malesuada auctor molestie. Pellentesque dignissim dui erat, in ultrices magna mollis nec. Phasellus auctor consectetur metus, pellentesque tempus felis hendrerit eu. Praesent viverra lectus dui, aliquet accumsan velit porta eget. Fusce ac risus eleifend, commodo tellus ut, faucibus turpis. Proin egestas ligula efficitur sem feugiat, eu imperdiet tellus fermentum. Sed finibus laoreet arcu, eget fermentum sem tincidunt vestibulum. Proin tincidunt, ex ac aliquam blandit, nibh dolor vehicula nibh, et varius eros lectus ut lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a scelerisque augue.

                Aliquam a turpis eu nibh sodales consectetur. Nullam a dolor rutrum, venenatis nunc venenatis, eleifend sapien. Sed sed vehicula est, eu imperdiet arcu. Donec tincidunt, enim sed aliquet ultrices, massa nulla porttitor ligula, id vulputate lacus quam sit amet tellus. Integer quis odio nec mi pulvinar consequat. Sed nec mattis arcu. Quisque fermentum ex quis nulla vehicula, at sollicitudin sem fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Donec scelerisque enim lorem, quis tincidunt metus luctus ut. Donec eu tellus mauris. Nulla nec lacus molestie, aliquet magna eget, sagittis turpis. Nam ut eros ac libero posuere laoreet. Donec a placerat nibh. Nam ante neque, luctus sed mauris sit amet, pharetra placerat mauris. Integer odio tortor, lacinia sed blandit placerat, pharetra ac lorem. Vivamus in mi lobortis, tristique risus vitae, accumsan justo. Ut commodo auctor laoreet. Sed suscipit dui sed consectetur condimentum.

                Integer lobortis vitae nisl id iaculis. <br />  <br /> CHAPTER II <br /> <br /> Integer at arcu felis. Morbi facilisis, nulla non efficitur sagittis, felis est consectetur sapien, ut tincidunt diam nisl ut dui. Cras fermentum, felis eget vestibulum rutrum, tortor urna vehicula tortor, nec imperdiet velit dolor vitae ligula. Donec fringilla tristique ex et pharetra. Fusce finibus urna quis erat auctor ultrices. Nam vestibulum diam id massa blandit, a pharetra enim cursus. Phasellus volutpat fermentum magna ut elementum. Fusce dictum dignissim diam, sed vestibulum enim. Mauris bibendum nec metus a rhoncus. Vivamus egestas magna sed ligula fringilla, ac accumsan magna eleifend. Nunc dapibus congue nisl, non ornare leo rutrum ut. Morbi maximus dictum risus scelerisque molestie. Praesent justo lorem, suscipit in pellentesque in, volutpat ac velit. Quisque mattis faucibus libero nec tristique.

                Proin id justo auctor, aliquet sem id, facilisis neque. Cras et urna purus. Praesent eget mollis enim, ut rutrum risus. Vivamus molestie porttitor leo, eget feugiat ex efficitur nec. Aliquam accumsan lectus ac purus blandit dapibus. Pellentesque ante ipsum, eleifend scelerisque dignissim non, egestas vel nulla. Cras in nulla tristique, finibus tellus nec, lobortis risus.

                Sed placerat magna tellus, eu placerat ligula posuere eleifend. Nunc maximus efficitur commodo. Donec convallis convallis erat non vehicula. Vestibulum augue urna, placerat quis lectus blandit, tincidunt volutpat tellus. Pellentesque sagittis turpis a dolor convallis malesuada. Ut a orci in nisi pulvinar aliquet hendrerit in velit. Mauris ultricies odio diam, vitae eleifend magna aliquam aliquam.</p>
        </div>
    )

}

export default Content
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ManuCard() {

    const card = [{
        img: "https://cdn.pixabay.com/photo/2021/11/01/15/52/spring-roll-6760871_1280.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "9.7$"
    },
    {
        img: "https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "197$"
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "78$"
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "17$"
    },
    {
        img: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "797$"
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/07/28/14/29/macarons-2548827_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "797$"
    },
    {
        img: "https://cdn.pixabay.com/photo/2014/06/16/23/10/spices-370114_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "7$"
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "77$"
    }, {
        img: "https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "97$"
    }, {
        img: "https://cdn.pixabay.com/photo/2017/01/30/13/49/pancakes-2020863_640.jpg",
        name: "Veg Mixer",
        para: "Tomota surger gain",
        price: "77$"
    },
]
    return (


        <>
            <div className="manucard">
            {
                card.map((items) => {
                    return (
                        <div>
                            <Card style={{ width: '18rem', margin:'10px 20px'}}>
                                <Card.Img variant="top" src={items.img} />
                                <Card.Body>
                                    <Card.Title>{items.name}</Card.Title>
                                    <Card.Text>
                                      {items.para}
                                    </Card.Text>
                                    <Button variant="primary">{items.price}</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }

</div> 
        </>
    );
}

export default ManuCard;
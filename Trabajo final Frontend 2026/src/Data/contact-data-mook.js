const now = new Date()
const createDate = (daysAgo, hours = 0, minutes = 0) => {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysAgo, hours, minutes)
}

const contact_list_server = [
    {
        id: 1,
        name: 'David',
        last_connection: createDate(0, 15, 43),
        image: '/DavidGahan.jpg',
        messages: [
            {
                id: 1,
                content: 'Estoy teniendo un paseo con mi mejor amigo',
                author: 'David',
                created_at: createDate(0, 14, 30),
                status: 'seen'
            },
            {
                id: 2,
                content: 'Estás con Martin?',
                author: 'YO',
                created_at: createDate(0, 14, 32),
                status: 'seen'
            },
            {
                id: 3,
                content: 'Si, espero que no me decepcione de nuevo',
                author: 'David',
                created_at: createDate(0, 14, 40),
                status: 'unseen'
            }
        ]
    },
    {
        id: 2,
        name: 'Jeff',
        last_connection: createDate(1, 14, 30),
        image: '/Ament.jpg',
        messages: [
            {
                id: 1,
                content: 'Hey qué tal? Hay que juntarnos! La semana que viene es mi cumple y estas invitada',
                author: 'Jeff',
                created_at: createDate(1, 14, 30),
                status: 'seen'
            },
            {
                id: 2,
                content: 'Genial, Jeff, estoy!',
                author: 'YO',
                created_at: createDate(1, 14, 31),
                status: 'unseen'
            }
        ]
    },
    {
        id: 3,
        name: 'Oscar Miaustri',
        last_connection: createDate(3, 8, 21),
        image: '/OscarMiaustri.jpeg',
        messages: [
            {
                id: 1,
                content: 'Miau miau miau',
                author: 'Oscar Miaustri',
                created_at: createDate(3, 8, 21),
                status: 'unseen'
            },
            {
                id: 2,
                content: 'Miau miau',
                author: 'Oscar Miaustri',
                created_at: createDate(3, 8, 22),
                status: 'unseen'
            },
            {
                id: 3,
                content: 'Miau miau miau miau',
                author: 'Oscar Miaustri',
                created_at: createDate(3, 8, 23),
                status: 'unseen'
            }
        ]
    },
    {
        id: 4,
        name: 'Juanjo',
        last_connection: createDate(7, 12, 15),
        image: '/Fred.jpg',
        messages: [
            {
                id: 1,
                content: 'Holaaaaaaa, tanto tiempo',
                author: 'Juanjo',
                created_at: createDate(7, 12, 15),
                status: 'unseen'
            }
        ]
    },
    {
        id: 5,
        name: 'Ricardo',
        last_connection: createDate(15, 9, 35),
        image: '/Iorio.jpeg',
        messages: [
            {
                id: 1,
                content: 'Genial, Marcos, estoy!',
                author: 'Ricardo',
                created_at: createDate(15, 9, 35),
                status: 'seen'
            }
        ]
    },
    {
        id: 6,
        name: 'Viaje Calamuchita 2027',
        type: 'group',
        image: null,
        members: ['David', 'Jeff', 'Oscar Miaustri', 'Juanjo', 'Ricardo'],
        last_connection: createDate(0, 12, 0),
        messages: [
            { 
                id: 1, 
                author: 'Oscar Miaustri', 
                content: '¡Miau miau miau miau!', 
                created_at: createDate(1, 10, 0), 
                status: 'unseen'
            },
            { 
                id: 2, 
                author: 'David', 
                content: '¿Cómo hacemos al final?', 
                created_at: createDate(1, 10, 5), 
                status: 'unseen'
            },
            { 
                id: 3, 
                author: 'Jeff', 
                content: '¿Vamos en micro o en auto hasta allá?', 
                created_at: createDate(1, 10, 7), 
                status: 'unseen'
            },
            {
                id: 4, 
                author: 'Ricardo', 
                content: 'Por mi vayamos en auto, pero como ustedes quieran!!', 
                created_at: createDate(0, 9, 30), 
                status: 'unseen'
            },
            {
                id: 5,
                author: "Juanjo",
                content: "Yo para ir en micro tendría que juntar unos pesos",
                created_at: createDate(0, 11, 0),
                status: "unseen"
            }
        ]
    }
]

export default contact_list_server
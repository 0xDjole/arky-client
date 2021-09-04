import { IPostState } from '../../types'

const initialState: IPostState = {
    postGetRandomData: {
        id: '',
        name: '',
        image: '',
        categories: [],
        createdAt: new Date(),
        location: {
            longitude: 0,
            latitude: 0
        },
        address: '',
        city: '',
        country: ''
    },
    postGetRandomLoading: false,
    postGetRandomError: ''
}

export default initialState

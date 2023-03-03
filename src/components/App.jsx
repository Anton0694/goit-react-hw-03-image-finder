import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { getGallery } from '../API'
import { Searchbar } from './Searchbar/Searchbar';

import { ToastContainer, toast} from 'react-toastify';
import { APP, ButtonLoad} from './App.styled'



export class App extends Component {
  state = {
    searchText: '',
    images: [],
    page: 1,
    isLoad: false,
    errorOfSerch: false,
    error: false,
    showModal: false,
    modalData: '',
    
  }

  onHandleSubmit = event => {
    const { page } = this.state
    const searchText = event.target.name.value.toLowerCase()
    event.preventDefault();

    if (searchText.trim() === '') {
      return toast.error("Empty field!")
    }
   
    this.setState({
      searchText: searchText,
      isLoad: true,
      images: [],

    })

  setTimeout(() => {
     try {
       getGallery(searchText, page)
        .then(({ data }) => {
          if (data.hits.length === 0) {
            this.setState({ erorOfSerch: true })
          } this.setState({ images: data.hits })

        }).finally(this.setState({ isLoad: false }))
     } catch (error) {
       this.setState({ error: true })
     }
      
    }, 1000);

    
    this.setState(prevState => 
      ({page: prevState.page + 1})
    )
    
    event.target.reset()
    
  } 

onLoadMoreBtnClick = () => { 
    const { searchText, page } = this.state
    
    this.setState({ isLoad: true })

    setTimeout(() => {

      try {
        getGallery(searchText, page)
      .then(({ data }) => this.setState((prevState) =>
            ({ images: [...prevState.images, ...data.hits] })))
      .finally(this.setState({isLoad: false}))
      } catch (error) {
        this.setState({ error: true })
      }
    }, 1000);

    this.setState(prevState => 
      ({page: prevState.page + 1})
  )

  }
    
    onSelect = (data) => {

    this.setState({
      modalData: data,
      isModal: true
    })
  }
   
 toggleModal = (event) => {
    if (event.target === event.currentTarget) {
      this.setState(prevState => ({showModal: !prevState.showModal}))
    }
    
  }
  closeModal = () => {
    this.setState(prevState => ({showModal: !prevState.showModal}))
  }

  

  render() {
    const errorMessage = toast.error("No images found by request")
    setTimeout(() => {errorMessage}, 1000);


    const { showModal, isLoad, images, errorOfSerch, modalData } = this.state;

    return (
    <APP>
        <Searchbar onHandleSubmit={this.onHandleSubmit} />
      <ImageGallery  images={images} onSelect={this.onSelect}></ImageGallery>
        {showModal && <Modal closeModal={this.closeModal} onModalClick={this.toggleModal} data={modalData} />}
        {errorOfSerch && errorMessage }
        {isLoad ?
          <Loader /> :
          images.length > 0 &&
          <ButtonLoad onClick={this.onLoadMoreBtnClick}>Load</ButtonLoad> 
        }
        <ToastContainer />
    </APP>
  );
  }
  
};

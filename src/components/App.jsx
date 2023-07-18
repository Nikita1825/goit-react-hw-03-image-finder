import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from 'react';
import { PixFetch } from "./Api/Api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';








export default class App extends Component {
  state = {
    images: [],
    page: 1,
    search: '',
    total: 0,
    showModal: false,
    selectedImage: '',
    isLoading: false,
    error: null,
    total: 0,
  };
  handleSearch = search => {
     if (search.trim() === '') {
      toast.error('You wrote nothing', this.toaster);
     } 
   else if (this.state.search !== search) {
      this.setState({ images: [], page: 1, search });
    }
  };
  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages(page, search);
    }
  }
  

  fetchImages = async (page, search) => {
    const toaster = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    }
  
    this.setState({ isLoading: true });
    try {
       
      const { hits, totalHits } = await PixFetch(search, page);
      if (hits.length === 0) {
        toast.error(
          "'There are no images found. Please, enter a valid value'",
          this.toaster
        );
      } else {
        toast.success("'Your posts were successfuly fetched!", this.toaster);
      }
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...hits],
          total: totalHits,
        };
        
      });
       
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message, toaster)
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };


  render() {
   const totalPage = Math.ceil(this.state.total / 12);
  return (
    <div>
      <Searchbar onSearch={this.handleSearch} />
      {this.state.isLoading && <Loader />}
      <ImageGallery images={this.state.images} />
      {this.state.images.length > 0 && totalPage > this.state.page && (
        <Button onLoadMore={this.handleLoadMore} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
}

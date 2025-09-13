import axios from 'axios';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.js';

const API_BASE_URL = 'http://localhost:8000';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.map(product => ({
      ...product,
      image: product.image || 'https://via.placeholder.com/250x200?text=No+Image'
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const uploadImage = async (file, productId) => {
  try {
    const storageRef = ref(storage, `products/${productId}/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

import { useState } from 'react';
import BasicData from './BasicData';
import ImagesData from './ImagesData';

function AddProduct() {
  const [showBasicData, setShowBasicData] = useState(true);

  const handleImagesClick = () => {
    setShowBasicData(false);
  };

  const handleBasicDataClick = () => {
    setShowBasicData(true);
  };

  return (
<BasicData /> 
  );
}

export default AddProduct;

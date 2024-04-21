import { useState } from 'react';
import BasicData from './BasicData';
import ImagesData from './ImagesData';
import Measure from './MeasureInput';

function AddProduct() {
  const [showBasicData, setShowBasicData] = useState(true);

  const handleImagesClick = () => {
    setShowBasicData(false);
  };

  const handleBasicDataClick = () => {
    setShowBasicData(true);
  };

  return (
    <div>

      <BasicData />

    </div>
  );
}

export default AddProduct;

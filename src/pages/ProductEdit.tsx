import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IImages }  from '../interfaces/images';
import { IInstrument }  from '../interfaces/instrument';
import { useParams } from 'react-router-dom';
import { buttonStyle } from '../utils/button-style';
import Button from '../components/Button';
import { useGetInstrumentByIdQuery } from '../services/instruments';
import Spinner from '../components/Spinner';
import { rtkErrorHelper } from '../services/rtkErrorHelper';

const ProductEdit: React.FC = (props: any) => {
  const productId: number = Number(useParams().productId);

  // const [ instrument, setInstrument ] = useState<IInstrument>();
  const { data, error, isLoading } = useGetInstrumentByIdQuery(productId);
  const { register: registerImage, handleSubmit: handleSubmitImage } = useForm<{productImage: FileList}>();

  useEffect(() => {
    console.log(productId);
  }, [])

  // const fetchInstrument = async() => {
  //   const res = await fetch(`${BASE_URL}/instruments/${pid}`)
  //   const data = await res.json();
  //   setInstrument(data);
  // }

  const onSubmitImage = handleSubmitImage(async (data: {productImage: FileList}) => {
    try {
      const imagesArray: IImages[] = await uploadImages(data.productImage);

      // TODO useMutation
      // const res = await fetch(`${BASE_URL}/images`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(imagesArray),
      // })
    } catch(err) {
      console.log(err);
    }
  })

  const uploadImages = async(images: FileList) => {
    console.log('image uploading');
    const data: FormData = new FormData();
    const imagesArray: IImages[] = [];
    
    for(let i = 0; i < images.length; i++) {
      data.append('file', images[i]);
      data.append('upload_preset', 'music-inst');

      try {
        // TODO singed upload
        const res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CNAME}/image/upload`, {
          method: 'POST',
          body: data,
        });
        const resData = await res.json();

        const productImages: IImages = {
          instrumentId: Number(productId),
          imageUrl: resData.secure_url,
        }

        imagesArray.push(productImages)
      } catch (err) {
        console.log('Upload error:', err);
      }
    }

    return imagesArray;
  }

  return (
    <main className="flex space-justify-between space-x-2">

      {(() => {
        if(isLoading) return <Spinner />
        if(error) return rtkErrorHelper(error);
        if(data) {
          return (
            <>
              <figure>
                <form onSubmit={onSubmitImage} className="flex flex-col space-y-2">
                  <div>image</div>
                  <div>// carousel </div>
                  <input type="file" {...registerImage('productImage')} multiple />
                  <Button style={buttonStyle.orange}>Upload</Button>
                </form>
              </figure>
              <div>
                <span>Name: {data?.name}</span><br />
                <span>Brand: {data?.brand} </span><br />
                <span>Price: {data?.price}</span><br />
                <span>Status: {data?.status}</span><br />
                <span>Info: {data?.info}</span><br />       
              </div>
            </>
          )
        }

      })()}

    </main>
  )
}

export default ProductEdit;
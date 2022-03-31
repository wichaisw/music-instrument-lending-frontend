import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import toast from 'react-hot-toast';

const rtkErrorHelper = (error: FetchBaseQueryError | SerializedError): string => {
  let errMsg: string;
  if ('status' in error) {
    console.log('FetchBaseQueryError: ', error);
    errMsg = 'error' in error ? error.error : 
      typeof error.data === 'string' ? error.data : JSON.stringify(error.data);
  }
  else {
    console.log('SerializedError: ', error);
    errMsg = 'message' in error ? error.message as string : 'unexpected error';
  }

  toast.error(errMsg);
  return errMsg;
}

export {
  rtkErrorHelper
}
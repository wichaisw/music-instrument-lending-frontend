import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

const rtkErrorHelper = (error: FetchBaseQueryError | SerializedError) => {
  if ('status' in error) {
    console.log('FetchBaseQueryError');
    console.log(error);
    const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

    return (
      <div>
        <div>An error has occurred:</div>
        <div>{errMsg}</div>
      </div>
    )
  }
  else {
    console.log('SerializedError');
    return <div>{error.message}</div>
  }
}

export {
  rtkErrorHelper
}
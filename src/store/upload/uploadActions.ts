import { API } from '../../utils/axios';

import { ExtendedFile, UploadStatusEnum } from '../../model/extendedFile';
import { uploadApi } from './$upload';

/**
 * Returns 0-100 for percent of sent data
 * @param {*} callback
 */
const onUploadProgress = (file: ExtendedFile) => (e: any) => {
  const totalLength = e.lengthComputable
    ? e.total
    : e.target.getResponseHeader('content-length') ||
      e.target.getResponseHeader('x-decompressed-content-length');
  if (totalLength !== null) {
    const uploadProgress = Math.round((e.loaded * 100) / totalLength);
    const uploadStatus =
      uploadProgress >= 100
        ? UploadStatusEnum.success
        : UploadStatusEnum.started;
    uploadApi.updateFileProgress({ id: file.id, uploadProgress });
    uploadApi.updateFileStatus({ id: file.id, uploadStatus });
  }
};

interface IOptions {
  file: ExtendedFile;
  dir?: string;
  private?: boolean;
}

export const API_uploadFile = ({ file }: IOptions) => {
  const formData = new FormData();
  formData.append('file', file.file);

  return API.post('/items/upload/file', formData, {
    onUploadProgress: onUploadProgress(file),
    timeout: Infinity,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).catch((e) => {
    uploadApi.updateFileStatus({
      id: file.id,
      uploadStatus: UploadStatusEnum.failed,
    });
    throw e;
  });
};

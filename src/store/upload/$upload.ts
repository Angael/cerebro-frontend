import { createApi, createStore } from 'effector';
import PQueue from 'p-queue';
import { ExtendedFile, UploadStatusEnum } from '../../interfaces/extendedFile';

interface IUploadStore {
  files: ExtendedFile[];
}

export const uploadQueue = new PQueue({ concurrency: 1 });

export const $upload = createStore<IUploadStore>({
  files: [],
});

export const uploadApi = createApi($upload, {
  addFiles: (_s, files: ExtendedFile[]) => ({
    ..._s,
    files: [..._s.files, ...files],
  }),
  clearFiles: (_s) => ({
    ..._s,
    files: [],
  }),
  removeFile: (_s, id: string) => ({
    ..._s,
    files: _s.files.filter((f) => f.id !== id),
  }),
  updateFileProgress: (
    _s,
    { id, uploadProgress }: Pick<ExtendedFile, 'id' | 'uploadProgress'>,
  ) => ({
    ..._s,
    files: _s.files.map((file) =>
      file.id === id ? { ...file, uploadProgress } : file,
    ),
  }),
  updateFileStatus: (
    _s,
    { id, uploadStatus }: Pick<ExtendedFile, 'id' | 'uploadStatus'>,
  ) => ({
    ..._s,
    files: _s.files.map((file) =>
      file.id === id ? { ...file, uploadStatus } : file,
    ),
  }),
});

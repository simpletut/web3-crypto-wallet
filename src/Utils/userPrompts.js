import toastr from 'toastr';

toastr.options.positionClass = 'toast-bottom-right';
toastr.options.progressBar = true;

export const promptWarning = (msg) => {
  toastr.error(msg);
};

export const promptInfo = (msg) => {
  toastr.info(msg);
};


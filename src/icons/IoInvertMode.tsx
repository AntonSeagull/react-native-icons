import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M256,176V336a80,80,0,0,0,0-160Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M256,48V176a80,80,0,0,0,0,160V464C141.12,464,48,370.88,48,256S141.12,48,256,48Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

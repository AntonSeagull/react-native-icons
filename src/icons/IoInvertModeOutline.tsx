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
        "d": "M256,176V336a80,80,0,0,1,0-160Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M256,48V176a80,80,0,0,1,0,160V464c114.88,0,208-93.12,208-208S370.88,48,256,48Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

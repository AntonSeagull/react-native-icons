import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "512",
    "height": "512",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

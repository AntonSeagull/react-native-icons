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
        "d": "M448,16H64L32,176V320H480V176ZM436,176H320a64,64,0,0,1-128,0H76L98,58H414Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M320,352a64,64,0,0,1-128,0H32V496H480V352Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M448,64H64L32,256V448H480V256ZM436,256H320a64,64,0,0,1-128,0H76L98,106H414Z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

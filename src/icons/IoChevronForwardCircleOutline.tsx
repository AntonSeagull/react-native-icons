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
        "d": "M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z",
        "style": "fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

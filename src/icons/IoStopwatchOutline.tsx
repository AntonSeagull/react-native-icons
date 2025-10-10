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
        "d": "M256,96A176,176,0,1,0,432,272,176,176,0,0,0,256,96Z",
        "style": "fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z",
        "style": "fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M232,160a72,72,0,1,0,72,72A72,72,0,0,0,232,160Z",
        "style": "fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

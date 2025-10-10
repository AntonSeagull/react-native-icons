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
        "d": "M176,112V40a8,8,0,0,1,8-8H328a8,8,0,0,1,8,8v72",
        "style": "fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M336,400v72a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V400",
        "style": "fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

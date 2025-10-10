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
        "d": "M224,232a32,32,0,0,1,64,0",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M64,200c0,96,16,128,80,128s80-32,80-128c0,0-16-16-80-16S64,200,64,200Z",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M448,200c0,96-16,128-80,128s-80-32-80-128c0,0,16-16,80-16S448,200,448,200Z",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M256,104v56h56a56,56,0,1,0-56-56Z",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M256,104c0,15.46,0,56,0,56H200a56,56,0,1,1,56-56Z",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M416,272V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V272",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

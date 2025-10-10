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
        "d": "M342,444h46a56,56,0,0,0,56-56V342",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M444,170V124a56,56,0,0,0-56-56H342",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M170,444H124a56,56,0,0,1-56-56V342",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M68,170V124a56,56,0,0,1,56-56h46",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

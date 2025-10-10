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
        "d": "M384,368h24a40.12,40.12,0,0,0,40-40V168a40.12,40.12,0,0,0-40-40H104a40.12,40.12,0,0,0-40,40V328a40.12,40.12,0,0,0,40,40h24",
        "style": "fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M384,128V104a40.12,40.12,0,0,0-40-40H168a40.12,40.12,0,0,0-40,40v24",
        "style": "fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

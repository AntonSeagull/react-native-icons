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
        "d": "M352,320c9.74-19.41,16-40.81,16-64,0-23.51-6-44.4-16-64",
        "style": "fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M400,368c19.48-34,32-64,32-112s-12-77.7-32-112",
        "style": "fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z",
        "style": "fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M336,224.3v23.92c0,39.42-40.58,71.48-80,71.48h0c-39.42,0-80-32.06-80-71.48V224.3",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

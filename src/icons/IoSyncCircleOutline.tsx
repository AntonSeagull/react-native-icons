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
        "d": "M351.82,271.87v-16A96.15,96.15,0,0,0,184.09,192m-24.2,48.17v16A96.22,96.22,0,0,0,327.81,320",
        "style": "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

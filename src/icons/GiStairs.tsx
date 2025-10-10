import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 512 512"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "#000",
        "d": "M64 448v-64h64v-64h64v-64h64v-64h64v-64h64V64h64v384z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

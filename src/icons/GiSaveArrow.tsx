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
        "d": "M224 30v256h-64l96 128 96-128h-64V30h-64zM32 434v48h448v-48H32z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

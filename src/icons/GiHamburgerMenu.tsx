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
        "d": "M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

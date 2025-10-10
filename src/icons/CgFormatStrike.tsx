import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M13 7H17V5H7V7H11V10H13V7Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M11 19V14H13V19H11Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M5 13H19V11H5V13Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

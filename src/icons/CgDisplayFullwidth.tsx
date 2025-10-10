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
        "d": "M2 5H22V3H2V5Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M2 21H22V19H2V21Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M2 7V17H22V7H2ZM4 9H20V15H4V9Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

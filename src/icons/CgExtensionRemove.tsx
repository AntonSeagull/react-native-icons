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
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        "d": "M12 11V5H4V19H18V11H12ZM6 7H10V11H6V7ZM10 13V17H6V13H10ZM16 13V17H12V13H16Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 7H14V9H20V7Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

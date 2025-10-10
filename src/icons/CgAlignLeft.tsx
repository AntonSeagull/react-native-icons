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
        "d": "M8 13H14V17H8V13Z",
        "fill": "currentColor",
        "fill-opacity": "0.5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6 6H4V18H6V6Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M20 7H8V11H20V7Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

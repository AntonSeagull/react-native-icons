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
        "d": "M9 11H15V13H9V11Z",
        "stroke": "currentColor",
        "stroke-opacity": "0.5",
        "stroke-width": "2"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 7H5V5H19V7Z",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M19 19H5V17H19V19Z",
        "fill": "currentColor"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "fill": "none",
    "viewBox": "0 0 24 24"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "stroke": "#000",
        "stroke-width": "2",
        "d": "M12 14V6m0 12v-2m0-14C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

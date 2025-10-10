import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M12 12V7l-7 5 7 5zm7-5-7 5 7 5z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

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
        "d": "M12 4a5 5 0 015 5v6a5 5 0 01-10 0V9a5 5 0 015-5zm0 0v6m-6 0h12"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

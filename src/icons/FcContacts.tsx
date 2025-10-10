import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "version": "1",
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 48 48",
    "enable-background": "new 0 0 48 48"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "#FF7043",
        "d": "M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#BF360C",
        "d": "M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

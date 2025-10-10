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
        "fill": "#3F51B5",
        "d": "M9,29h10V15H9c-1.1,0-2,0.9-2,2v10C7,28.1,7.9,29,9,29z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#42A5F5",
        "d": "M38,38L38,38c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v28C40,37.1,39.1,38,38,38z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);

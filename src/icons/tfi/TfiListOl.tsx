import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const TfiListOl = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 4v1H5V4zM5 9h12V8H5zm0 4h12v-1H5zM2.083 3.48h.009v2.383h.356V3.136h-.314l-.596.319.071.281zm-.444 6.092.219-.201c.574-.554.939-.961.939-1.465 0-.39-.248-.793-.836-.793-.314 0-.582.117-.771.277l.117.26a.93.93 0 0 1 .58-.231c.406 0 .541.256.541.533-.004.411-.32.764-1.016 1.427l-.289.281v.227h1.74V9.58H1.639zm.597 2.819v-.009c.336-.121.504-.36.504-.642 0-.331-.243-.65-.78-.65a1.3 1.3 0 0 0-.714.21l.097.269a1 1 0 0 1 .546-.181c.34 0 .478.193.478.411 0 .323-.34.462-.608.462h-.206v.276h.205c.357 0 .701.164.705.546.005.227-.143.528-.616.528-.257 0-.5-.104-.604-.172l-.101.285c.134.089.402.186.709.186.654 0 .994-.382.994-.818 0-.382-.273-.634-.609-.701" />
      </G>
    </Svg>
  );
};
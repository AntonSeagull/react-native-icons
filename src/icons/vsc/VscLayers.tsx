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

export const VscLayers = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="m7.627 1.087.558-.004 6.091 4.037-.003.836L8.182 9.92l-.551-.004-5.91-3.963-.003-.828zm.286 1.016-5.021 3.43 5.021 3.368 5.176-3.368zM1.793 8.5l5.838 3.915.55.004L14.206 8.5h-1.833l-4.459 2.9-4.325-2.9zm5.838 6.415L1.793 11h1.795l4.325 2.9 4.459-2.9h1.833l-6.023 3.92z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
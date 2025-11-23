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

export const RiSwap3Line = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 5.914 3.707 8.207 2.293 6.793 7 2.086l4.707 4.707-1.414 1.414L8 5.914V11H6zM17 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m4.707 5.707-1.414-1.414L18 18.086V13h-2v5.086l-2.293-2.293-1.414 1.414L17 21.914zM5 19h4v-4H5zm5-6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
      </G>
    </Svg>
  );
};
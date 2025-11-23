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

export const GrSwitch = (props: IconProps) => {
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
        <Path fill="#000" fillRule="evenodd" d="M5 1h14v22H5V1m2.5 10H17v10H7V11zM15 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-4 13v-5h2v5zm1-13.998a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
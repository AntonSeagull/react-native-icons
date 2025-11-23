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

export const RiProhibitedLine = (props: IconProps) => {
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
        <Path d="M7.094 5.68 18.32 16.906A8 8 0 0 0 7.094 5.68m9.812 12.64L5.68 7.094A8 8 0 0 0 16.906 18.32M4.929 4.929A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10a9.97 9.97 0 0 1-2.929 7.071A9.97 9.97 0 0 1 12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.929-7.071" />
      </G>
    </Svg>
  );
};
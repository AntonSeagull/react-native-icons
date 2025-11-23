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

export const FaInbox = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 576 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 288, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M567.938 243.908 462.25 85.374A48 48 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A48 48 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a48 48 0 0 0-8.062-26.625M162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918z" />
      </G>
    </Svg>
  );
};
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

export const TbDeviceNintendo = (props: IconProps) => {
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
        <Path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zM14 20V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z" />
        <Circle cx={17.5} cy={15.5} r={1} fill="currentColor" />
        <Circle cx={6.5} cy={8.5} r={1} fill="currentColor" />
      </G>
    </Svg>
  );
};
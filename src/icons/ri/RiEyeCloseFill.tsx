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

export const RiEyeCloseFill = (props: IconProps) => {
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
        <Path d="m10.13 15.842-.787 2.94-1.932-.517.787-2.94a11 11 0 0 1-3.237-1.871l-2.153 2.153-1.414-1.414 2.153-2.154a10.96 10.96 0 0 1-2.371-5.07l.9-.164A16.92 16.92 0 0 0 12 10c3.704 0 7.132-1.184 9.924-3.195l.9.163a10.96 10.96 0 0 1-2.37 5.071l2.153 2.154-1.414 1.414-2.154-2.153a11 11 0 0 1-3.237 1.872l.788 2.939-1.932.517-.788-2.94a11.1 11.1 0 0 1-3.74 0" />
      </G>
    </Svg>
  );
};
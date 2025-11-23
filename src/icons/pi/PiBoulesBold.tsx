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

export const PiBoulesBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m50.28 40.75L60.75 178.28a85 85 0 0 1-8.36-13.7L164.58 52.39a85 85 0 0 1 13.7 8.36m17 17a85 85 0 0 1 8.36 13.7L91.42 203.61a85 85 0 0 1-13.7-8.36ZM128 44a85 85 0 0 1 10.37.66l-93.71 93.71A83.87 83.87 0 0 1 128 44m0 168a85 85 0 0 1-10.37-.66l93.71-93.71A83.87 83.87 0 0 1 128 212" />
      </G>
    </Svg>
  );
};
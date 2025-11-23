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

export const CgBandAid = (props: IconProps) => {
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
        <Path fill="currentColor" d="M11.939 9.765a1 1 0 1 1-1.813-.845 1 1 0 0 1 1.813.845M8.92 13.874a1 1 0 1 0 .845-1.813 1 1 0 0 0-.846 1.813M13.874 15.08a1 1 0 1 1-1.813-.845 1 1 0 0 1 1.813.846M14.235 11.939a1 1 0 1 0 .845-1.813 1 1 0 0 0-.845 1.813" />
        <Path fill="currentColor" fillRule="evenodd" d="M17.071 1.124a6 6 0 0 0-7.973 2.902L4.026 14.902a6 6 0 0 0 10.876 5.072l5.072-10.876a6 6 0 0 0-2.903-7.974m-3.136 16.192 3.38-7.25-7.25-3.382-3.38 7.25zm-.846 1.812-7.25-3.38a4 4 0 1 0 7.25 3.38m3.137-16.191a4 4 0 0 1 1.935 5.316l-7.25-3.381a4 4 0 0 1 5.315-1.935" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
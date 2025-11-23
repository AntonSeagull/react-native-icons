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

export const MdElderlyWoman = (props: IconProps) => {
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
        <Path d="M18.5 11c-1.56 0-2.92-.9-3.58-2.21l-.79-1.67C14.12 7.1 13.63 6 12.34 6 8.72 6 6 16.69 6 19h2.5l-2.1 2.8L8 23l3-4h2v4h2v-4.03L13 13l.49-2.71A6.02 6.02 0 0 0 17 12.81v.69h1v-1c0-.28.22-.5.5-.5s.5.22.5.5V23h1V12.5c0-.83-.67-1.5-1.5-1.5M11.6 2.91c-.06.19-.1.38-.1.59 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.21 0-.4.04-.59.1-.15-.35-.5-.6-.91-.6-.55 0-1 .45-1 1 0 .41.25.76.6.91" />
      </G>
    </Svg>
  );
};
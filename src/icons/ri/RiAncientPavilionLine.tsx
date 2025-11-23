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

export const RiAncientPavilionLine = (props: IconProps) => {
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
        <Path d="M1.516 7.877A4.5 4.5 0 0 0 5 11.887v7.114H3v2h18v-2h-2v-7.114a4.5 4.5 0 0 0 3.484-4.01A9 9 0 0 1 12.514 2h-1.029a9 9 0 0 1-9.97 5.877M17 19H7V12h10zm1.556-9.064L18.28 10H5.72l-.274-.063a2.6 2.6 0 0 1-.392-.121Q7.36 9.39 9.351 7.98A10.9 10.9 0 0 0 12 5.346a10.9 10.9 0 0 0 2.648 2.635q1.993 1.41 4.298 1.835a2.6 2.6 0 0 1-.391.121" />
      </G>
    </Svg>
  );
};
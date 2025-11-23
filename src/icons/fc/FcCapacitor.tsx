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

export const FcCapacitor = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 27h25v4H0zM0 17h25v4H0z" />
        <Path d="M46 35c1.1 0 2-.9 2-2V15c0-1.1-.9-2-2-2H27v22zM21 13c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h2V13z" />
        <Path fill="#303F9F" d="M25 33c1.1 0 2 .9 2 2V13c0 1.1-.9 2-2 2s-2-.9-2-2v22c0-1.1.9-2 2-2" />
      </G>
    </Svg>
  );
};
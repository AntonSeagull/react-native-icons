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

export const TbBallVolleyball = (props: IconProps) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20" />
        <Path d="M12 12a8 8 0 0 0-7.464 4.928M12.951 7.353a12 12 0 0 0-9.88 4.111" />
        <Path d="M12 12a8 8 0 0 0-.536-8.928M15.549 15.147a12 12 0 0 0 1.38-10.611" />
      </G>
    </Svg>
  );
};
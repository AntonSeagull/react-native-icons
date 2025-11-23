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

export const TbSnowflakeOff = (props: IconProps) => {
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
        <Path d="m10 4 2 1 2-1M12 2v6m1.196 1.186L15 10.22M17.928 6.268l.134 2.232 1.866 1.232" />
        <Path d="m20.66 7-5.629 3.25L15 11M19.928 14.268l-1.015.67M14.212 14.226l-2.171 1.262M14 20l-2-1-2 1" />
        <Path d="M12 22v-6.5l-3-1.72M6.072 17.732 5.938 15.5l-1.866-1.232" />
        <Path d="m3.34 17 5.629-3.25-.01-3.458M4.072 9.732 5.938 8.5l.134-2.232" />
        <Path d="m3.34 7 5.629 3.25.802-.466M3 3l18 18" />
      </G>
    </Svg>
  );
};
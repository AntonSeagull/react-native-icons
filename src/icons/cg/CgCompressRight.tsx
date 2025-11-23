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

export const CgCompressRight = (props: IconProps) => {
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
        <Path fill="currentColor" d="m14.567 8.03 6.343-6.26 1.405 1.423-6.323 6.24 3.57.015-.009 2-7-.028.028-7 2 .008zM7.979 14.543l-3.57.003-.002-2 7-.006.006 7-2 .002-.003-3.602-6.314 6.29-1.411-1.416z" />
      </G>
    </Svg>
  );
};
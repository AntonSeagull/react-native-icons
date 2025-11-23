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

export const DiIllustrator = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 34 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 17, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M21.66 10.97c.695 0 1.264-.563 1.264-1.253s-.569-1.253-1.264-1.253-1.264.563-1.264 1.253c0 .695.563 1.253 1.264 1.253M20.425 12.067h2.442v9.183h-2.442zM12.655 18.171h3.304l.893 3.076h2.501L15.721 9.181h-3.036v1.191L9.5 21.247h2.262zm1.637-6.843 1.221 4.733h-2.441z" />
        <Path fill="#444" d="M3.002 2.316v27.007h27.582V2.316zm25.514 24.881H5.11V4.442h23.406z" />
      </G>
    </Svg>
  );
};
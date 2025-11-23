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

export const LiaCouchSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6 7c-1.645 0-3 1.355-3 3v2.188c-1.156.417-2 1.519-2 2.812v11h2v-2h26v2h2V15c0-1.293-.844-2.395-2-2.812V10c0-1.645-1.355-3-3-3Zm0 2h20c.555 0 1 .445 1 1v2.188c-1.156.417-2 1.519-2 2.812v2H7v-2c0-1.293-.844-2.395-2-2.812V10c0-.555.445-1 1-1m-2 5c.555 0 1 .445 1 1v4h22v-4c0-.555.445-1 1-1s1 .445 1 1v7H3v-7c0-.555.445-1 1-1" />
      </G>
    </Svg>
  );
};
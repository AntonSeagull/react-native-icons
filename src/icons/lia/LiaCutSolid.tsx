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

export const LiaCutSolid = (props: IconProps) => {
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
        <Path d="M19.656 4.313c-.773.093-1.46.64-1.687 1.437l-2.657 9.313-3.343.968C11.73 14.336 10.258 13 8.5 13A3.514 3.514 0 0 0 5 16.5C5 18.422 6.578 20 8.5 20c1.29 0 2.426-.73 3.031-1.781l3.125-.875-.875 3.125C12.731 21.074 12 22.21 12 23.5c0 1.922 1.578 3.5 3.5 3.5s3.5-1.578 3.5-3.5c0-1.758-1.336-3.23-3.031-3.469l4.469-15.656a2 2 0 0 0-.782-.062m7.969 7.25-8.719 2.468-.656 2.281 8-2.28a1.996 1.996 0 0 0 1.375-2.47M8.5 15c.84 0 1.5.66 1.5 1.5S9.34 18 8.5 18 7 17.34 7 16.5 7.66 15 8.5 15m7 7c.84 0 1.5.66 1.5 1.5s-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5.66-1.5 1.5-1.5" />
      </G>
    </Svg>
  );
};
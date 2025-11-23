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

export const GiSpiderMask = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M256 24c-96 0-160 80-160 160 0 192 80 304 160 304s160-112 160-304c0-80-64-160-160-160M128 168c7.8 32 35 91.9 96 128l-48 48c-67.7-41.1-64-144-48-176m256 0c16 32 19.7 134.9-48 176l-48-48c61-36.1 88.2-96 96-128" />
      </G>
    </Svg>
  );
};
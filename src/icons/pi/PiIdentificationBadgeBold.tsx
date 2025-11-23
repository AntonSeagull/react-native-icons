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

export const PiIdentificationBadgeBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M200 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H60V44h136ZM84 68a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m8.8 127.37a48 48 0 0 1 70.4 0 12 12 0 0 0 17.6-16.32 72 72 0 0 0-19.21-14.68 44 44 0 1 0-67.19 0 72.1 72.1 0 0 0-19.2 14.68 12 12 0 0 0 17.6 16.32M128 116a20 20 0 1 1-20 20 20 20 0 0 1 20-20" />
      </G>
    </Svg>
  );
};
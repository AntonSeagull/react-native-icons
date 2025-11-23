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

export const PiLinkSimpleHorizontalBold = (props: IconProps) => {
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
        <Path d="M80 116h96a12 12 0 0 1 0 24H80a12 12 0 0 1 0-24m24 48H64a36 36 0 0 1 0-72h40a12 12 0 0 0 0-24H64a60 60 0 0 0 0 120h40a12 12 0 0 0 0-24m88-96h-40a12 12 0 0 0 0 24h40a36 36 0 0 1 0 72h-40a12 12 0 0 0 0 24h40a60 60 0 0 0 0-120" />
      </G>
    </Svg>
  );
};
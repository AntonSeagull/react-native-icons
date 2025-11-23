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

export const TiMediaRewind = (props: IconProps) => {
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
        <Path d="M10.2 6.4a1.8 1.8 0 0 0-1.253.512C6.566 9.227 3 12.701 3 12.701l5.944 5.789A1.802 1.802 0 0 0 12 17.201v-9c0-.994-.806-1.801-1.8-1.801m9 0a1.8 1.8 0 0 0-1.253.512C15.566 9.227 12 12.701 12 12.701l5.944 5.789A1.802 1.802 0 0 0 21 17.201v-9c0-.994-.806-1.801-1.8-1.801" />
      </G>
    </Svg>
  );
};
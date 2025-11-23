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

export const PiSubsetOfThin = (props: IconProps) => {
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
        <Path d="M204 208a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-4-44h-96a52 52 0 0 1 0-104h96a4 4 0 0 0 0-8h-96a60 60 0 0 0 0 120h96a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};
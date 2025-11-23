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

export const TbFlask2Filled = (props: IconProps) => {
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
        <Path d="M15 2a1 1 0 0 1 0 2v5.674l.062.03a7 7 0 0 1 3.85 5.174l.037.262a7 7 0 0 1-3.078 6.693 1 1 0 0 1-.553.167H8.683a1 1 0 0 1-.552-.166A7 7 0 0 1 8.938 9.7L9 9.672V4a1 1 0 1 1 0-2zm-2 2h-2v6.34a1 1 0 0 1-.551.894l-.116.049A5 5 0 0 0 7.413 14h9.172a5 5 0 0 0-2.918-2.715 1 1 0 0 1-.667-.943z" />
      </G>
    </Svg>
  );
};
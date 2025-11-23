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

export const PiDotsNine = (props: IconProps) => {
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
        <Path d="M72 60a12 12 0 1 1-12-12 12 12 0 0 1 12 12m56-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 24a12 12 0 1 0-12-12 12 12 0 0 0 12 12M60 116a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12M60 184a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12m68 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};
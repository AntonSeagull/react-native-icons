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

export const PiAsteriskSimpleFill = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m63.34 91.83-50.4 16.38 31.15 42.87a8 8 0 1 1-12.94 9.4L128 141.61l-31.15 42.87a8 8 0 0 1-12.94-9.4l31.15-42.87-50.4-16.38a8 8 0 0 1 4.94-15.22L120 117V64a8 8 0 0 1 16 0v53l50.4-16.38a8 8 0 0 1 4.94 15.22Z" />
      </G>
    </Svg>
  );
};
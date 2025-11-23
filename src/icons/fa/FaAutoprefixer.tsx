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

export const FaAutoprefixer = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 640 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 320, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m318.4 16-161 480h77.5l25.4-81.4h119.5L405 496h77.5zm-40.3 341.9 41.2-130.4h1.5l40.9 130.4zM640 405l-10-31.4L462.1 358l19.4 56.5zm-462.1-47L10 373.7 0 405l158.5 9.4z" />
      </G>
    </Svg>
  );
};
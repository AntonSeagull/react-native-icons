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

export const GiFastNoodles = (props: IconProps) => {
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
        <Path d="M279 31.1 263.8 183H282l15-150.1zm80.5 14.05L313.6 183h18.8l44.1-132.15zM118.3 189.6l-77.21 92.6 13.82 11.6L123 212.1l-3.8-18.2zm275.4 0-4.7 22.5 68.1 81.7 6.9-5.8 6.9-5.8zM144.8 201l52 78h118.4l52-78zm63.2 30h96v18h-96zm-61.6 4.9L189.2 439h133.6l42.8-203.1-40.8 61.1H187.2zM193 457l6.3 30h113.4l6.3-30z" />
      </G>
    </Svg>
  );
};
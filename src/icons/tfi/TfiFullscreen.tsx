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

export const TfiFullscreen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15.996 11.352 16 16l-4.649-.004.001-1 2.94.003L8.5 9.208 2.708 15l2.94-.003.001 1L1 16l.004-4.649 1 .001-.003 2.939L7.793 8.5 2.001 2.708l.003 2.939-1 .001L1 1l4.649.004-.001 1-2.94-.003L8.5 7.793l5.792-5.792-2.94.003-.001-1L16 1l-.004 4.649-1-.001.003-2.939L9.207 8.5l5.792 5.792-.003-2.939z" />
      </G>
    </Svg>
  );
};
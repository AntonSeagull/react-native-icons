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

export const SiSkaffold = (props: IconProps) => {
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
        <Path d="M6.602 20.097H24v3.836H6.602zm-2.766-6.692h13.562v3.837H0V6.714h3.836zm13.562-9.502H0V.067h17.398zm2.766 6.692H6.602V6.758H24v10.528h-3.836z" />
      </G>
    </Svg>
  );
};
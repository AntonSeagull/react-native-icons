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

export const TbMoodCrazyHappyFilled = (props: IconProps) => {
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
        <Path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-1.8 10.946a1 1 0 0 0-1.414.014 2.5 2.5 0 0 1-3.572 0 1 1 0 0 0-1.428 1.4 4.5 4.5 0 0 0 6.428 0 1 1 0 0 0-.014-1.414M7.707 7.793a1 1 0 0 0-1.414 1.414l.792.793-.792.793a1 1 0 0 0 1.414 1.414l.793-.792.793.792a1 1 0 1 0 1.414-1.414L9.915 10l.792-.793a1 1 0 1 0-1.414-1.414l-.793.792zm7 0a1 1 0 0 0-1.414 1.414l.792.793-.792.793a1 1 0 0 0 1.414 1.414l.793-.792.793.792a1 1 0 0 0 1.414-1.414L16.915 10l.792-.793a1 1 0 1 0-1.414-1.414l-.793.792z" />
      </G>
    </Svg>
  );
};
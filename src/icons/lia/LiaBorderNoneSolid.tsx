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

export const LiaBorderNoneSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v4h2V7h2V5zm6 0v2h4V5zm6 0v2h4V5zm6 0v2h2v2h2V5h-4m-8 4v4h2V9zM5 11v4h2v-4zm20 0v4h2v-4zM9 15v2h4v-2zm6 0v2h2v-2zm4 0v2h4v-2zM5 17v4h2v-4zm20 0v4h2v-4zm-10 2v4h2v-4zM5 23v4h4v-2H7v-2zm20 0v2h-2v2h4v-4zm-14 2v2h4v-2zm6 0v2h4v-2z" />
      </G>
    </Svg>
  );
};
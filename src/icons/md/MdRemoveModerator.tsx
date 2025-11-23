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

export const MdRemoveModerator = (props: IconProps) => {
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
        <Path d="m22.27 21.73-3.54-3.55L5.78 5.23 2.27 1.72 1 2.99 3.01 5H3v6c0 5.55 3.84 10.74 9 12 2.16-.53 4.08-1.76 5.6-3.41L21 23zM13 9.92l6.67 6.67C20.51 14.87 21 12.96 21 11V5l-9-4-5.48 2.44L11 7.92z" />
      </G>
    </Svg>
  );
};
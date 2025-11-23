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

export const Imblr = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9.001 7v3.659c0 .928-.012 1.463.086 1.727.098.262.342.534.609.691q.53.318 1.214.318c.81 0 1.289-.107 2.09-.633v2.405a9 9 0 0 1-1.833.639A8 8 0 0 1 9.369 16a4.9 4.9 0 0 1-1.725-.276 4.2 4.2 0 0 1-1.438-.79q-.596-.514-.826-1.091c-.23-.577-.23-.944-.23-1.676V6.556H3.003V4.29c.628-.204 1.331-.497 1.778-.877a4.4 4.4 0 0 0 1.08-1.374q.408-.801.561-2.039h2.579v4H13v3z" />
      </G>
    </Svg>
  );
};
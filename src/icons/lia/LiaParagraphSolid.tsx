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

export const LiaParagraphSolid = (props: IconProps) => {
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
        <Path d="M12 5c-3.3 0-6 2.7-6 6s2.7 6 6 6h4v10h2V7h2v20h2V7h2V5Zm0 2h4v8h-4c-2.219 0-4-1.781-4-4s1.781-4 4-4" />
      </G>
    </Svg>
  );
};
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

export const TbStarOff = (props: IconProps) => {
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
        <Path d="m3 3 18 18M10.012 6.016l1.981-4.014 3.086 6.253 6.9 1-4.421 4.304m.012 4.01.588 3.426L12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.327-.917" />
      </G>
    </Svg>
  );
};
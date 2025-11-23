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

export const TfiTag = (props: IconProps) => {
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
        <Path d="M8.953 1.008 4.986 3.89v12.14l3.986-2.794 4.041 2.785V3.886zm3.061 13.109-3.045-2.1-2.982 2.091V4.399l2.975-2.161 3.053 2.165v9.714zm-4.76-8.116c0 .965.785 1.75 1.75 1.75s1.75-.785 1.75-1.75-.785-1.75-1.75-1.75-1.75.785-1.75 1.75m1.75-.75c.413 0 .75.337.75.75s-.337.75-.75.75-.75-.337-.75-.75.337-.75.75-.75" />
      </G>
    </Svg>
  );
};
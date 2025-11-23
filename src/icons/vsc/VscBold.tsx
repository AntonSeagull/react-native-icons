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

export const VscBold = (props: IconProps) => {
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
        <Path d="M5 13V3h3.362q1.674 0 2.515.673.848.673.848 1.992 0 .7-.41 1.243-.41.535-1.116.831.833.227 1.314.865.487.633.487 1.511 0 1.347-.897 2.116T8.567 13zm1.356-4.677v3.599h2.24q.945 0 1.49-.474.55-.48.55-1.319 0-1.806-2.02-1.806zm0-1.058h2.049q.89 0 1.42-.433.536-.433.536-1.174 0-.825-.494-1.195-.495-.378-1.505-.378H6.356z" />
      </G>
    </Svg>
  );
};
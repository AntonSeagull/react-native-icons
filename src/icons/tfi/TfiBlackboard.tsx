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

export const TfiBlackboard = (props: IconProps) => {
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
        <Path d="M9 2V0H8v2H1v10h15V2zm6 9H2V3h13zM3.5 13h10v1h-2.584l1.504 2.326-.84.543L9.725 14H9v3H8v-3h-.712l-1.869 2.87-.838-.545L6.095 14H3.5z" />
      </G>
    </Svg>
  );
};
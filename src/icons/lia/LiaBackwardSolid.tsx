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

export const LiaBackwardSolid = (props: IconProps) => {
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
        <Path d="m17 5-1.594 1.188-12 9L2.344 16l1.062.813 12 9L17 27v-7.375l8.406 6.188L27 26.969V5.03l-1.594 1.157L17 12.375Zm8 3.969V23.03l-8.406-6.187L15.469 16l1.125-.844ZM15 9v14l-9.312-7Z" />
      </G>
    </Svg>
  );
};
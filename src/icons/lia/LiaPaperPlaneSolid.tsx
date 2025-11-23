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

export const LiaPaperPlaneSolid = (props: IconProps) => {
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
        <Path d="m3.594 5.344.437 1.875L5.97 16 4.03 24.781l-.437 1.875 1.781-.718 22-9L29.656 16l-2.281-.937-22-9Zm2.781 3.312L21.906 15H7.781ZM7.781 17h14.125L6.375 23.344Z" />
      </G>
    </Svg>
  );
};
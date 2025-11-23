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

export const TfiImage = (props: IconProps) => {
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
        <Path d="M1 1v15h15V1zm14 14H2v-2h13zM2 12V2h13v10zm12.203-1.835-.697.717-2.417-2.349-1.554 1.676-2.486-4.415-3.401 4.975-.826-.564 4.31-6.303 2.604 4.622 1.317-1.422z" />
      </G>
    </Svg>
  );
};
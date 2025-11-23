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

export const SiZincsearch = (props: IconProps) => {
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
        <Path d="m18.723 19.748-1.73 1.493H.678L0 18.77l10.63-9.343.542 6.635h8.701a3.65 3.65 0 0 1-1.15 3.686M5.277 4.252l1.73-1.493h16.316L24 5.23l-10.63 9.343-.542-6.635H4.129a3.65 3.65 0 0 1 1.148-3.686" />
      </G>
    </Svg>
  );
};
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

export const TfiGallery = (props: IconProps) => {
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
        <Path d="M13 10V0H0v13h13zM1 1h11v8h-.755L8.681 5.681 7.522 6.895 5.274 3.014 1.698 9H1zm8.982 8H2.863l2.398-4.014L7.325 8.55 8.6 7.213zM1 12v-2h11v2zm16-9v13H4v-1.984h1V15h11V4h-2V3z" />
      </G>
    </Svg>
  );
};
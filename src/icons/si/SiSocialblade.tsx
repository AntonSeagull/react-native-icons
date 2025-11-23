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

export const SiSocialblade = (props: IconProps) => {
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
        <Path d="M2.323 16.688H0v1.893h2.323zm3.612-3.097H3.613v4.99h2.322zm3.613 1.205H7.226v3.785h2.322zm3.613-.861H10.84v4.646h2.322zm3.613-1.892h-2.322v6.538h2.322zm3.613-1.978h-2.323v8.516h2.323zM24 5.42h-2.323v13.16H24z" />
      </G>
    </Svg>
  );
};
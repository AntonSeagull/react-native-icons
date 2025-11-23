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

export const FcFilm = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#3F51B5" d="M45 9H3v30h42zM22 37v-4h4v4zm8 0v-4h4v4zm8 0v-4h4v4zm-24 0v-4h4v4zm-8 0v-4h4v4zm16-22v-4h4v4zm8 0v-4h4v4zm8 0v-4h4v4zm-24 0v-4h4v4zm-8 0v-4h4v4z" />
      </G>
    </Svg>
  );
};
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

export const SiPytest = (props: IconProps) => {
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
        <Path d="M2.615 0v.887h3.84V0zm5.022 0v.887h3.842V0zm4.957 0v.887h3.841V0zm4.935 0v.887h3.842V0zM2.447 1.895a.935.935 0 0 0-.935.935c0 .517.418.938.935.938h19.106c.517 0 .935-.42.935-.938a.935.935 0 0 0-.935-.936zm.168 2.847V24h3.84V4.742zm5.022 0v15.801h3.842v-15.8zm4.957 0v10.549h3.85V4.742zm4.935 0v6.494h3.842V4.742z" />
      </G>
    </Svg>
  );
};
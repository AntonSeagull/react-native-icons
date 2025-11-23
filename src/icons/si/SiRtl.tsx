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

export const SiRtl = (props: IconProps) => {
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
        <Path d="M0 9.889v4.222h7.498V9.89H0zm8.25 0v4.222h7.5V9.89h-7.5zm8.252 0v4.222H24V9.89h-7.498zm-14.365.966H4.12c.61 0 .945.275.945.733 0 .397-.254.662-.691.723l.977.824h-.754l-.926-.795H2.656v.795h-.52zm8.281 0h3.164v.448H12.26v1.832h-.52v-1.832h-1.322zm8.414 0h.518v1.832h2.32v.448h-2.838zm-16.176.428v.631H4.06c.325 0 .478-.103.478-.316s-.153-.315-.478-.315z" />
      </G>
    </Svg>
  );
};
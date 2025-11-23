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

export const CiBeaker1 = (props: IconProps) => {
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
        <Path d="m19.447 18.645-.51-1.52a17.9 17.9 0 0 0-4.02-6.66 1.5 1.5 0 0 1-.42-1.04v-6.36H15a.5.5 0 0 0 0-1H9a.5.5 0 0 0 0 1h.5v6.36a1.48 1.48 0 0 1-.41 1.04 17.9 17.9 0 0 0-4.02 6.66l-.52 1.52a2.5 2.5 0 0 0 2.37 3.29h10.16a2.5 2.5 0 0 0 2.37-3.29Zm-9.64-7.49a2.48 2.48 0 0 0 .69-1.73v-6.36h3v6.36a2.49 2.49 0 0 0 .7 1.73 16.9 16.9 0 0 1 3.01 4.38H6.787a17 17 0 0 1 3.02-4.38m8.49 9.16a1.5 1.5 0 0 1-1.22.62H6.917a1.5 1.5 0 0 1-1.42-1.98l.51-1.52q.15-.45.33-.9h11.32q.18.45.33.9l.51 1.52a1.5 1.5 0 0 1-.197 1.36Z" data-name="Beaker 1" />
      </G>
    </Svg>
  );
};
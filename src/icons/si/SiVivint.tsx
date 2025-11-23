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

export const SiVivint = (props: IconProps) => {
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
        <Path d="M9.102 2.04a.8.8 0 0 0-.553.218L.514 9.756A1.62 1.62 0 0 0 0 10.939V21.15c0 .447.362.81.809.81h16.584a.81.81 0 0 0 .808-.81V10.94a1.62 1.62 0 0 0-.514-1.184l-8.035-7.5a.8.8 0 0 0-.55-.217zm0 4.964 5.252 4.904v6.203H3.848v-6.203zM21.648 17.35a2.305 2.305 0 0 0-2.26 2.304 2.305 2.305 0 0 0 2.307 2.307A2.305 2.305 0 0 0 24 19.654a2.305 2.305 0 0 0-2.305-2.304z" />
      </G>
    </Svg>
  );
};
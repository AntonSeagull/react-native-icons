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

export const SiAutoit = (props: IconProps) => {
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
        <Path d="m19.351 15.563-5.486-7.941a2.7 2.7 0 0 0-.702-.702q-.414-.282-1.03-.283-.645 0-1.064.302-.42.303-.696.683l-5.63 7.94h3.215l4.122-5.827 1.575 2.323q.223.316.466.676.242.36.426.597a9 9 0 0 0-.741-.026H10.78l-1.64 2.258zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12m0-21.61a9.61 9.61 0 1 0 0 19.22 9.61 9.61 0 1 0 0-19.22" />
      </G>
    </Svg>
  );
};
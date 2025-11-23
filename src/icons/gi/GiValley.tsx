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

export const GiValley = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M253.844 20.72 189.03 192.312l-49.31-47.188-60.5 150.844h362.59l-57-94.564-66.03 68.125-13.407-13.03 37.938-39.125-89.47-196.656zM20.47 314.655v178.72h175.75l49.936-78.626-36.062-34.844 43.875-65.25zm261.186 0-35.5 55.313 58.47 47.25-2.126 76.155h193v-178.72H281.656z" />
      </G>
    </Svg>
  );
};
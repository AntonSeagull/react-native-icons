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

export const GiAbstract049 = (props: IconProps) => {
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
        <Path d="m491 21-99.117 57.869L491 136.59zm0 146.434-99.117-57.868v115.59zm0 30.697-99.117 57.722L491 313.722zm0 146.288-99.117-57.575v115.59zm0 30.99-99.117 57.722L491 491zM367.426 21l-99.117 57.869 99.117 57.722zm0 146.434-99.117-57.868v115.59zm0 30.697-99.117 57.722 99.117 57.869zm0 146.288-99.117-57.575v115.59zm0 30.99-99.117 57.722L367.426 491zM243.69 78.87 144.574 21v115.59zm0 30.697-99.117 57.868 99.117 57.722zm0 146.287-99.117-57.722v115.59zm0 30.99-99.117 57.576 99.117 58.015zm0 146.288-99.117-57.722V491zM120.117 78.87 21 21v115.59zm0 30.697L21 167.434l99.117 57.722zm0 146.287L21 198.131v115.59zm0 30.99L21 344.42l99.117 58.015zm0 146.288L21 375.41V491z" />
      </G>
    </Svg>
  );
};
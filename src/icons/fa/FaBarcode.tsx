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

export const FaBarcode = (props: IconProps) => {
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
        <Path d="M0 448V64h18v384zm26.857-.273V64H36v383.727zm27.143 0V64h8.857v383.727zm44.857 0V64h8.857v383.727zm36 0V64h17.714v383.727zm44.857 0V64h8.857v383.727zm18 0V64h8.857v383.727zm18 0V64h8.857v383.727zm35.715 0V64h18v383.727zm44.857 0V64h18v383.727zm35.999 0V64h18.001v383.727zm36.001 0V64h18.001v383.727zm26.857 0V64h18v383.727zm45.143 0V64h26.857v383.727zm35.714 0V64h9.143v383.727zm18 .273V64h18v384z" />
      </G>
    </Svg>
  );
};
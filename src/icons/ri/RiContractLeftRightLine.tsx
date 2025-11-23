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

export const RiContractLeftRightLine = (props: IconProps) => {
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
        <Path d="M18.793 5.793 12.586 12l6.207 6.207 1.414-1.414L15.414 12l4.793-4.793zM5.207 18.207 11.414 12 5.207 5.793 3.793 7.207 8.586 12l-4.793 4.793z" />
      </G>
    </Svg>
  );
};
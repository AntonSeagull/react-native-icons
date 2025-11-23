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

export const TfiMap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.499 4.438 5.597 3.02 0 3v11h5.348l5.196 1.479L16 13.874V2.833zM6 4.177l4 1.157v8.95l-4-1.139zM1 4h4v9.017L1 13zm14 9.126-4 1.177V5.334l4-1.167z" />
      </G>
    </Svg>
  );
};
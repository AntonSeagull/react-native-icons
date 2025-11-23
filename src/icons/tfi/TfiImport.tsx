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

export const TfiImport = (props: IconProps) => {
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
        <Path d="m8.5 13.677-4.853-4.83.705-.709L8 11.769V.972h1v10.797l3.647-3.63.705.709zM16 9.03v6.47a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5V9.025H0V15.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V9.03z" />
      </G>
    </Svg>
  );
};
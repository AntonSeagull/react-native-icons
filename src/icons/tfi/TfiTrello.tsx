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

export const TfiTrello = (props: IconProps) => {
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
        <Path d="M16.5 15.833a.67.67 0 0 1-.667.667H1.167a.67.67 0 0 1-.667-.667V1.167C.5.802.802.5 1.167.5h14.667c.364 0 .667.302.667.667v14.666zM7.833 2.5a.33.33 0 0 0-.333-.333h-5a.33.33 0 0 0-.333.333v10.667a.33.33 0 0 0 .333.333h5a.33.33 0 0 0 .333-.333zm7 0a.33.33 0 0 0-.333-.333h-5a.33.33 0 0 0-.333.333v6.667c0 .187.145.333.333.333h5a.33.33 0 0 0 .333-.333z" />
      </G>
    </Svg>
  );
};
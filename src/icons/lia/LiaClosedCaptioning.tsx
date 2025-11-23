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

export const LiaClosedCaptioning = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M2 6v17.906h28V6Zm2 2h24v13.906H4Zm8 2c-2.75 0-5 2.25-5 5s2.25 5 5 5a4.97 4.97 0 0 0 3.125-1.125l-1.25-1.562c-.527.425-1.168.687-1.875.687-1.668 0-3-1.332-3-3s1.332-3 3-3c.707 0 1.348.262 1.875.688l1.25-1.563A4.97 4.97 0 0 0 12 10m10 0c-2.75 0-5 2.25-5 5s2.25 5 5 5a4.97 4.97 0 0 0 3.125-1.125l-1.25-1.562c-.527.425-1.168.687-1.875.687-1.668 0-3-1.332-3-3s1.332-3 3-3c.707 0 1.348.262 1.875.688l1.25-1.563A4.97 4.97 0 0 0 22 10" />
      </G>
    </Svg>
  );
};
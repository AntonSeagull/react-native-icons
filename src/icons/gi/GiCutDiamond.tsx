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

export const GiCutDiamond = (props: IconProps) => {
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
        <Path d="m92.906 94.813 60.438 79.75 78.125-79.75H92.905zm189.25 0L359.25 173.5l58.688-78.688H282.155zm-25.344.843-84.718 86.47H341.53zm177.907 7.906-58.626 78.563H494.53zm-358.064.75-57.78 77.813h116.78zm-58.5 96.5L226.562 429.22l-83.218-228.41H18.156zm145.063 0 93.593 256.844 93.593-256.844H163.22zm207.06 0L287.064 429.22l208.405-228.41H370.28z" />
      </G>
    </Svg>
  );
};
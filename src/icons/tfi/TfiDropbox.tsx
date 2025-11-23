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

export const TfiDropbox = (props: IconProps) => {
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
        <Path d="M16.853 4.371 11.557.917 8.5 3.455 5.454.917.147 4.371l3.1 2.476L.148 9.329l3.444 2.243v1.533l4.917 2.939 4.926-2.938v-1.548l3.417-2.23-3.098-2.481zm-5.226-2.214 3.52 2.296-2.232 1.782-3.56-2.19zM12 6.847 8.5 9.006 5 6.847l3.5-2.154zM1.853 4.453 5.38 2.157l2.265 1.887-3.561 2.191zm-.001 4.792 2.232-1.789 3.562 2.198-2.266 1.89zm10.583 3.293L8.51 14.881l-3.917-2.342v-.315l.862.561 3.047-2.54 3.056 2.54.878-.573v.326zm2.713-3.292-3.521 2.298-2.273-1.89 3.561-2.198z" />
      </G>
    </Svg>
  );
};
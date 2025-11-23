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

export const LiaChrome = (props: IconProps) => {
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
        <Path d="M16 4C9.385 4 4 9.385 4 16s5.385 12 12 12 12-5.385 12-12S22.615 4 16 4m0 2a9.98 9.98 0 0 1 8.922 5.492l-6.807-.004A4.9 4.9 0 0 0 16 11c-1.625 0-3.06.796-3.975 2.006L8.44 9.459A9.97 9.97 0 0 1 16 6m-8.367 4.523 3.387 5.87a5.015 5.015 0 0 0 4.369 4.566l-1.276 4.857A9.98 9.98 0 0 1 6 16a9.96 9.96 0 0 1 1.633-5.477m17.808 2.202A9.986 9.986 0 0 1 16 26c-.186 0-.367-.017-.55-.027l3.392-5.871A5 5 0 0 0 21 16c0-.69-.143-1.348-.398-1.947zM16 13c1.671 0 3 1.329 3 3s-1.329 3-3 3-3-1.329-3-3 1.329-3 3-3" />
      </G>
    </Svg>
  );
};
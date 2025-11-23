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

export const TbMeatOff = (props: IconProps) => {
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
        <Path d="m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821M5.904 18.596c2.733 2.734 5.9 4 7.07 2.829 1.172-1.172-.094-4.338-2.828-7.071-2.733-2.734-5.9-4-7.07-2.829-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1" />
        <Path d="M12.975 21.425c1.582-1.582 2.679-3.407 3.242-5.2M16.6 12.6c-.16-1.238-.653-2.345-1.504-3.195-.85-.85-1.955-1.344-3.192-1.503M8.274 8.284c-1.792.563-3.616 1.66-5.198 3.242M3 3l18 18" />
      </G>
    </Svg>
  );
};
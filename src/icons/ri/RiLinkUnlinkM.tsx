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

export const RiLinkUnlinkM = (props: IconProps) => {
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
        <Path d="m17.657 14.828-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485zm-2.828 2.829-1.415 1.414a6 6 0 0 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 0 0 12 17.657l1.414-1.414zm0-9.9 1.414 1.415-7.071 7.07-1.415-1.414zM5.775 2.293l1.932-.518L8.743 5.64l-1.932.518zm9.483 16.068 1.932-.518 1.035 3.864-1.932.518zM2.293 5.775l3.864 1.036-.518 1.931-3.864-1.035zm16.068 9.483 3.864 1.035-.518 1.932-3.864-1.036z" />
      </G>
    </Svg>
  );
};
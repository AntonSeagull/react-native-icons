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

export const CgReadme = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M4 5.5h5a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1m10 14c-.35 0-.687-.06-1-.17v.17a1 1 0 1 1-2 0v-.17c-.313.11-.65.17-1 .17H4a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h5a4 4 0 0 1 3 1.354A4 4 0 0 1 15 3.5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3zm-1-12v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2m-8 0h4v2H5zm10 0h4v2h-4zm4 3h-4v2h4zm-14 0h4v2H5zm14 3h-4v2h4zm-14 0h4v2H5z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
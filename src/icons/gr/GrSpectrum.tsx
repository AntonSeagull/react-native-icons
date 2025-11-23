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

export const GrSpectrum = (props: IconProps) => {
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
        <Path fill="#7B2DFB" fillRule="evenodd" d="M22.131 23.399h-9.006c-.795 0-1.506-.62-1.503-1.417.018-4.958-.878-6.584-2.753-8.224-1.969-1.72-5.414-2.055-7.375-2.094a1.51 1.51 0 0 1-1.479-1.507L0 1.533A1.505 1.505 0 0 1 1.431.023c2.95-.133 9.632.183 15.09 4.956 4.434 3.875 6.824 9.541 7.118 16.859a1.507 1.507 0 0 1-1.508 1.56" />
      </G>
    </Svg>
  );
};
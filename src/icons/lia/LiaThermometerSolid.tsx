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

export const LiaThermometerSolid = (props: IconProps) => {
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
        <Path d="M21.75 4a6.29 6.29 0 0 0-4.437 1.844l-7.657 7.625-.125.156A5.23 5.23 0 0 0 8 17.313v2.312l-3.094 3.063-.031.062c-1.152 1.207-1.156 3.156.031 4.344 1.203 1.203 3.203 1.203 4.407 0L12.375 24h2.313a5.23 5.23 0 0 0 3.687-1.531l7.781-7.782c2.434-2.433 2.434-6.41 0-8.843A6.22 6.22 0 0 0 21.75 4m0 2c1.086 0 2.164.414 3 1.25a4.253 4.253 0 0 1 0 6.031l-7.781 7.781a3.24 3.24 0 0 1-2.282.938h-3.124l-3.688 3.688a1.094 1.094 0 0 1-1.562 0 1.094 1.094 0 0 1 0-1.563L10 20.438v-3.125c0-.852.336-1.68.938-2.282l.843-.844 1 1.032 1.438-1.438-1-1 1.562-1.562 1 1 1.438-1.438-1-1L17.78 8.22l1 1L20.22 7.78l-.969-.968A4.25 4.25 0 0 1 21.75 6m.531 2.281L10.063 20.5l1.437 1.438 12.219-12.22Z" />
      </G>
    </Svg>
  );
};
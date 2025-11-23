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

export const HiTranslate = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M7 2a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2H9.578a18.9 18.9 0 0 1-1.724 4.78q.436.531.914 1.026a1 1 0 1 1-1.44 1.389 21 21 0 0 1-.554-.6 19 19 0 0 1-3.107 3.567 1 1 0 0 1-1.334-1.49 17 17 0 0 0 3.13-3.733 19 19 0 0 1-1.487-2.494 1 1 0 1 1 1.79-.89q.351.705.764 1.372c.417-.934.752-1.913.997-2.927H3a1 1 0 1 1 0-2h3V3a1 1 0 0 1 1-1m6 6a1 1 0 0 1 .894.553l2.991 5.982.02.037.99 1.98a1 1 0 1 1-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 1 1-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0 1 13 8m-1.382 6h2.764L13 11.236z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};
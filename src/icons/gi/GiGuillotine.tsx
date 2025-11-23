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

export const GiGuillotine = (props: IconProps) => {
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
        <Path d="M159.375 30.72v94.186l205.25-51.062V30.72zm-45.125.06v448.47h27.78V30.78zm266.53 0v448.47h27.783V30.78zm-16.155 61.25-205.25 51.064v45.062l205.25-51.656zm-205.25 279.69v45.217h67.72c3.82-17.578 18.53-30.687 36.093-30.687 17.56 0 32.24 13.11 36.062 30.688h65.375v-44.22l-205.25-1zm0 62.874v43.875h205.25v-43.876h-65.25c-3.668 17.8-18.48 31.125-36.188 31.125s-32.52-13.326-36.187-31.126h-67.625z" />
      </G>
    </Svg>
  );
};
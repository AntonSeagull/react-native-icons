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

export const RxBorderRight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M13.25 1v13h1.5V1z" clipRule="evenodd" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 5 7)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 5 13)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 3 7)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 3 13)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 7 7)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 1 7)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 7 13)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 1 13)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 7 5)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 1 5)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 7 3)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 1 3)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 7 9)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 1 9)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 7 11)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 1 11)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 9 7)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 9 13)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 11 7)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 11 13)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 5 1)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 3 1)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 7 1)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 1 1)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 9 1)" />
        <Rect width={1} height={1} fill="currentColor" rx={0.5} transform="matrix(0 1 1 0 11 1)" />
      </G>
    </Svg>
  );
};
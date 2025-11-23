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

export const RxBorderLeft = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M1.75 1v13H.25V1z" clipRule="evenodd" />
        <Rect width={1} height={1} x={10} y={7} fill="currentColor" rx={0.5} transform="rotate(90 10 7)" />
        <Rect width={1} height={1} x={10} y={13} fill="currentColor" rx={0.5} transform="rotate(90 10 13)" />
        <Rect width={1} height={1} x={12} y={7} fill="currentColor" rx={0.5} transform="rotate(90 12 7)" />
        <Rect width={1} height={1} x={12} y={13} fill="currentColor" rx={0.5} transform="rotate(90 12 13)" />
        <Rect width={1} height={1} x={8} y={7} fill="currentColor" rx={0.5} transform="rotate(90 8 7)" />
        <Rect width={1} height={1} x={14} y={7} fill="currentColor" rx={0.5} transform="rotate(90 14 7)" />
        <Rect width={1} height={1} x={8} y={13} fill="currentColor" rx={0.5} transform="rotate(90 8 13)" />
        <Rect width={1} height={1} x={14} y={13} fill="currentColor" rx={0.5} transform="rotate(90 14 13)" />
        <Rect width={1} height={1} x={8} y={5} fill="currentColor" rx={0.5} transform="rotate(90 8 5)" />
        <Rect width={1} height={1} x={14} y={5} fill="currentColor" rx={0.5} transform="rotate(90 14 5)" />
        <Rect width={1} height={1} x={8} y={3} fill="currentColor" rx={0.5} transform="rotate(90 8 3)" />
        <Rect width={1} height={1} x={14} y={3} fill="currentColor" rx={0.5} transform="rotate(90 14 3)" />
        <Rect width={1} height={1} x={8} y={9} fill="currentColor" rx={0.5} transform="rotate(90 8 9)" />
        <Rect width={1} height={1} x={14} y={9} fill="currentColor" rx={0.5} transform="rotate(90 14 9)" />
        <Rect width={1} height={1} x={8} y={11} fill="currentColor" rx={0.5} transform="rotate(90 8 11)" />
        <Rect width={1} height={1} x={14} y={11} fill="currentColor" rx={0.5} transform="rotate(90 14 11)" />
        <Rect width={1} height={1} x={6} y={7} fill="currentColor" rx={0.5} transform="rotate(90 6 7)" />
        <Rect width={1} height={1} x={6} y={13} fill="currentColor" rx={0.5} transform="rotate(90 6 13)" />
        <Rect width={1} height={1} x={4} y={7} fill="currentColor" rx={0.5} transform="rotate(90 4 7)" />
        <Rect width={1} height={1} x={4} y={13} fill="currentColor" rx={0.5} transform="rotate(90 4 13)" />
        <Rect width={1} height={1} x={10} y={1} fill="currentColor" rx={0.5} transform="rotate(90 10 1)" />
        <Rect width={1} height={1} x={12} y={1} fill="currentColor" rx={0.5} transform="rotate(90 12 1)" />
        <Rect width={1} height={1} x={8} y={1} fill="currentColor" rx={0.5} transform="rotate(90 8 1)" />
        <Rect width={1} height={1} x={14} y={1} fill="currentColor" rx={0.5} transform="rotate(90 14 1)" />
        <Rect width={1} height={1} x={6} y={1} fill="currentColor" rx={0.5} transform="rotate(90 6 1)" />
        <Rect width={1} height={1} x={4} y={1} fill="currentColor" rx={0.5} transform="rotate(90 4 1)" />
      </G>
    </Svg>
  );
};
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

export const LiaSocksSolid = (props: IconProps) => {
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
        <Path d="m9.938 2-.282.969L5.22 18.53v.032c-.7 2.32.36 4.82 2.531 5.906l.031.031h.032l11.937 4.969q.032.016.063.031c.695.336 1.457.5 2.187.5a4.99 4.99 0 0 0 4.469-2.75c1.226-2.46.242-5.488-2.219-6.719l-.062-.031h-.032l-.656-.281c-.008.004-.023-.004-.031 0l-7-2.782 3.25-11.5.25-.937-9.063-2.719Zm1.374 2.469 6.22 1.875L17 8.219l-6.219-1.875ZM10.22 8.28l6.219 1.875-2.157 7.594-.219.875.813.344 6.781 2.687a8.92 8.92 0 0 0-2.593 5.375l-7.375-3.093A6.1 6.1 0 0 0 12 22c0-2.633-1.723-4.852-4.094-5.656ZM7.375 18.25A3.975 3.975 0 0 1 10 22c0 .406-.074.785-.187 1.156l-1.157-.468a2.99 2.99 0 0 1-1.531-3.563v-.031Zm16.281 4.25a2.985 2.985 0 0 1 1.032 3.844A3 3 0 0 1 22 28a3.1 3.1 0 0 1-1-.187 6.99 6.99 0 0 1 2.656-5.313" />
      </G>
    </Svg>
  );
};
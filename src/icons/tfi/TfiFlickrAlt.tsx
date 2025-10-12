

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFlickrAlt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8.5 0.5c-4.418 0-8 3.583-8 8 0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.417-3.582-8-8-8zM5.433 10.979c-1.391 0-2.519-1.126-2.519-2.518 0-1.391 1.128-2.518 2.519-2.518s2.517 1.127 2.517 2.518c0 1.392-1.127 2.518-2.517 2.518zM11.75 10.979c-1.391 0-2.518-1.126-2.518-2.518 0-1.391 1.127-2.518 2.518-2.518s2.518 1.127 2.518 2.518c0 1.392-1.127 2.518-2.518 2.518z" />
        </G>
      </Svg>
    );
  }


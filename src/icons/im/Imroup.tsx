

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imroup = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M6 7.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.413 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.337-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z" />
          <Path  d="M11 7.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.412 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.338-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z" />
          <Path  d="M6 12.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.413 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.337-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z" />
          <Path  d="M11 12.25c0 0.412-0.338 0.75-0.75 0.75h-1.5c-0.412 0-0.75-0.338-0.75-0.75v-1.5c0-0.412 0.338-0.75 0.75-0.75h1.5c0.412 0 0.75 0.338 0.75 0.75v1.5z" />
          <Path  d="M14.251 2.5l1.749-1.749v-0.751h-0.751l-1.749 1.749-1.749-1.749h-0.751v0.751l1.749 1.749-1.749 1.749v0.751h0.751l1.749-1.749 1.749 1.749h0.751v-0.751z" />
          <Path  d="M0 12h1v2h-1v-2z" />
          <Path  d="M0 9h1v2h-1v-2z" />
          <Path  d="M13 7h1v2h-1v-2z" />
          <Path  d="M13 13h1v2h-1v-2z" />
          <Path  d="M13 10h1v2h-1v-2z" />
          <Path  d="M0 6h1v2h-1v-2z" />
          <Path  d="M0 3h1v2h-1v-2z" />
          <Path  d="M8 2h2v1h-2v-1z" />
          <Path  d="M5 2h2v1h-2v-1z" />
          <Path  d="M2 2h2v1h-2v-1z" />
          <Path  d="M7 15h2v1h-2v-1z" />
          <Path  d="M10 15h2v1h-2v-1z" />
          <Path  d="M4 15h2v1h-2v-1z" />
          <Path  d="M1 15h2v1h-2v-1z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Imminal = (props: IconProps) => {

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
          <Path  d="M0 1v14h16v-14h-16zM15 14h-14v-12h14v12zM14 3h-12v10h12v-10zM7 8h-1v1h-1v1h-1v-1h1v-1h1v-1h-1v-1h-1v-1h1v1h1v1h1v1zM11 10h-3v-1h3v1z" />
        </G>
      </Svg>
    );
  }


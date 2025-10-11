

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutGrid4 = (props: IconProps) => {

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
          <Path  d="M1 4h3v-3h-3v3zM2 2h1v1h-1v-1zM5 4h3v-3h-3v3zM6 2h1v1h-1v-1zM9 4h3v-3h-3v3zM10 2h1v1h-1v-1zM13 1v3h3v-3h-3zM15 3h-1v-1h1v1zM1 8h3v-3h-3v3zM2 6h1v1h-1v-1zM5 8h3v-3h-3v3zM6 6h1v1h-1v-1zM9 8h3v-3h-3v3zM10 6h1v1h-1v-1zM13 8h3v-3h-3v3zM14 6h1v1h-1v-1zM1 12h3v-3h-3v3zM2 10h1v1h-1v-1zM5 12h3v-3h-3v3zM6 10h1v1h-1v-1zM9 12h3v-3h-3v3zM10 10h1v1h-1v-1zM13 12h3v-3h-3v3zM14 10h1v1h-1v-1zM1 16h3v-3h-3v3zM2 14h1v1h-1v-1zM5 16h3v-3h-3v3zM6 14h1v1h-1v-1zM9 16h3v-3h-3v3zM10 14h1v1h-1v-1zM13 16h3v-3h-3v3zM14 14h1v1h-1v-1z" />
        </G>
      </Svg>
    );
  }


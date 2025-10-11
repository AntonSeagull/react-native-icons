

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutGrid2Thumb = (props: IconProps) => {

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
          <Path  d="M0 2h3v3h-3v-3zM9 5h3v-3h-3v3zM0 13h3v-3h-3v3zM9 13h3v-3h-3v3zM4 3h4v-1h-4v1zM4 5h4v-1h-4v1zM13 2v1h4v-1h-4zM13 5h4v-1h-4v1zM7 5.999h-3v1h3v-1zM16 5.999h-3v1h3v-1zM4 11h4v-1h-4v1zM4 13h4v-1h-4v1zM13 11h4v-1h-4v1zM13 13h4v-1h-4v1zM4 14.999h3v-1h-3v1zM13 14.999h3v-1h-3v1z" />
        </G>
      </Svg>
    );
  }


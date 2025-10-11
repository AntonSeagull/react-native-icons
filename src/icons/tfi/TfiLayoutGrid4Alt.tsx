

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutGrid4Alt = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M1 1h3v3h-3v-3zM5 4h3v-3h-3v3zM9 4h3v-3h-3v3zM13 1v3h3v-3h-3zM1 8h3v-3h-3v3zM5 8h3v-3h-3v3zM9 8h3v-3h-3v3zM13 8h3v-3h-3v3zM1 12h3v-3h-3v3zM5 12h3v-3h-3v3zM9 12h3v-3h-3v3zM13 12h3v-3h-3v3zM1 16h3v-3h-3v3zM5 16h3v-3h-3v3zM9 16h3v-3h-3v3zM13 16h3v-3h-3v3z" fill="#000000" />
        </G>
      </Svg>
    );
  }


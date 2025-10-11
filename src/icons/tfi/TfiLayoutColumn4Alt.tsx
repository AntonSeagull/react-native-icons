

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutColumn4Alt = (props: IconProps) => {

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
          <Path d="M1 0h3v17h-3v-17zM5 17h3v-17h-3v17zM9 17h3v-17h-3v17zM13 0v17h3v-17h-3z" fill="#000000" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlStop = (props: IconProps) => {

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
          <Path d="M3 3v11h11v-11h-11zM13 13h-9v-9h9v9z" fill="#000000" />
        </G>
      </Svg>
    );
  }


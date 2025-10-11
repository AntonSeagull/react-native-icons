

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiMicrostrategy = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M9.095 2.572h5.827v18.856H9.096zM0 2.572h5.825v18.856H.001zm18.174 0v18.854H24V8.33z" />
        </G>
      </Svg>
    );
  }


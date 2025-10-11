

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiFactory = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M384 64l.387 256H368l-96-128-16 128-96-128-16 128-96-128-16 128v160h448V64h-32v256h-32V64h-32zM64 352h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zM64 416h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32z" fill="#000" />
        </G>
      </Svg>
    );
  }


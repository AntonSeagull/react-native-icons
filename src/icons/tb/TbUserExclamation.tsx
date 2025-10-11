

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUserExclamation = (props: IconProps) => {

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
          <Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <Path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.008 .128" />
          <Path d="M19 16v3" />
          <Path d="M19 22v.01" />
        </G>
      </Svg>
    );
  }


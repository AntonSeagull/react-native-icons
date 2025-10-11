

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiNanostores = (props: IconProps) => {

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
          <Path d="M13.708 24 .6 14.822l7.679-2.995 11.235 7.867L13.708 24ZM10.292 0 23.4 9.178l-7.679 2.995L4.486 4.306 10.292 0Z" />
        </G>
      </Svg>
    );
  }


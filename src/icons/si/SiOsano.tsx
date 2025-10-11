

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiOsano = (props: IconProps) => {

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
          <Path d="M12 6.091A5.909 5.909 0 1017.909 12 5.91 5.91 0 0012 6.091M12 0A12 12 0 110 12 12 12 0 0112 0z" />
        </G>
      </Svg>
    );
  }




  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiBoat = (props: IconProps) => {

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
          <Path d="M12.081 0 5.833 17.686 17.15 13.93Zm-10.2 18.223L4.961 24H19.14l2.98-5.777z" />
        </G>
      </Svg>
    );
  }


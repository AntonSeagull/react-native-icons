

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiMusicFill = (props: IconProps) => {

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
          <Path d="M12 13.5351V3H20V6H14V17C14 19.2091 12.2091 21 10 21C7.79086 21 6 19.2091 6 17C6 14.7909 7.79086 13 10 13C10.7286 13 11.4117 13.1948 12 13.5351Z" />
        </G>
      </Svg>
    );
  }


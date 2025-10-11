

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoVideocamSharp = (props: IconProps) => {

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
          <Path d="M336,208V128a16,16,0,0,0-16-16H32a16,16,0,0,0-16,16V384a16,16,0,0,0,16,16H320a16,16,0,0,0,16-16V304l160,96V112Z" />
        </G>
      </Svg>
    );
  }


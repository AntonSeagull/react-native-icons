

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextTThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M204,56V88a4,4,0,0,1-8,0V60H132V196h28a4,4,0,0,1,0,8H96a4,4,0,0,1,0-8h28V60H60V88a4,4,0,0,1-8,0V56a4,4,0,0,1,4-4H200A4,4,0,0,1,204,56Z" />
        </G>
      </Svg>
    );
  }


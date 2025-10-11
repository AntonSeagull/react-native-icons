

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiDoor = (props: IconProps) => {

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
          <Path d="M105 41v398h302V41H105zm55 174c18.1 0 33 14.9 33 33s-14.9 33-33 33-33-14.9-33-33 14.9-33 33-33zm0 18c-8.4 0-15 6.6-15 15s6.6 15 15 15 15-6.6 15-15-6.6-15-15-15zM73 457v30h366v-30H73z" fill="#000" />
        </G>
      </Svg>
    );
  }


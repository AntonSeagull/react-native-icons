

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiTextAlignJustify = (props: IconProps) => {

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
          <Path d="M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
          <Path d="M20.437,8.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
          <Path d="M20.437,16.5H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
          <Path d="M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
          <Path d="M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" />
        </G>
      </Svg>
    );
  }


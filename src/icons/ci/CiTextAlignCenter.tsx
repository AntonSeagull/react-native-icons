

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiTextAlignCenter = (props: IconProps) => {

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
          <Path d="M20.437,4.063H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" />
          <Path d="M16.5,8.5h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
          <Path d="M16.5,16.5h-9a.5.5,0,1,1,0-1h9a.5.5,0,1,1,0,1Z" />
          <Path d="M20.437,12.5H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
          <Path d="M20.437,20.937H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
        </G>
      </Svg>
    );
  }


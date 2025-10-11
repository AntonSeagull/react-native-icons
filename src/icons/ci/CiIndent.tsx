

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiIndent = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M20.437,4.064H3.563a.5.5,0,0,1,0-1H20.437a.5.5,0,0,1,0,1Z" />
          <Path  d="M20.437,9.688h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
          <Path  d="M20.437,15.312h-9a.5.5,0,0,1,0-1h9a.5.5,0,0,1,0,1Z" />
          <Path  d="M20.437,20.936H3.563a.5.5,0,1,1,0-1H20.437a.5.5,0,1,1,0,1Z" />
          <Path  d="M7.91,11.65a.492.492,0,0,1,0,.7l-2,2a.495.495,0,0,1-.7-.7L6.36,12.5H3.54a.5.5,0,0,1,0-1H6.35c-.38-.38-.76-.76-1.14-1.15a.495.495,0,0,1,.7-.7Z" />
        </G>
      </Svg>
    );
  }

